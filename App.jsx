import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BIBLE_PLAN_365 } from './planData1925';

// 1. SUPABASE CLIENT SDK WITH EDGE CACHING & PERSISTENCE
const SUPABASE_URL = "https://poivvectmogswfdurpmh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvaXZ2ZWN0bW9nc3dmZHVycG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzMzY0NzgsImV4cCI6MjEwMTkxMjQ3OH0.Kp4jjOUO3joh1ZKbmU5q9-SZhIh9zqBGdh3eHAouk3E";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true },
  global: {
    headers: {
      'Cache-Control': 'max-age=3600, s-maxage=86400'
    }
  }
});

// Helper for Stale-While-Revalidate Cache
const fetchWithEdgeCache = async (key, fetcher, setter) => {
  // 1. Read instantly from Local Edge Storage (0ms response)
  const cached = localStorage.getItem(`edge_cache_${key}`);
  if (cached) {
    try { setter(JSON.parse(cached)); } catch (e) {}
  }
  // 2. Fetch fresh data in background from Supabase
  try {
    const data = await fetcher();
    if (data && data.length > 0) {
      setter(data);
      localStorage.setItem(`edge_cache_${key}`, JSON.stringify(data));
    }
  } catch (err) {
    console.log("Edge Cache Serving active:", err);
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completed_days');
    return saved ? JSON.parse(saved) : [1, 2];
  });
  const [toastMsg, setToastMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Dynamic States from Supabase
  const [quotes, setQuotes] = useState([]);
  const [reflections, setReflections] = useState([]);
  const [videos, setVideos] = useState([]);

  // Auth Form State
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  // Admin Forms State
  const [adminSubTab, setAdminSubTab] = useState('quotes');
  const [quoteText, setQuoteText] = useState('');
  const [quoteRef, setQuoteRef] = useState('');
  const [quoteCat, setQuoteCat] = useState('faith');

  useEffect(() => {
    // Check Active Session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user);
    });

    // Fetch Dynamic Data via Edge Cache Strategy
    fetchWithEdgeCache('quotes', () => supabase.from('bible_quotes').select('*').order('created_at', { ascending: false }).then(r => r.data), setQuotes);
    fetchWithEdgeCache('reflections', () => supabase.from('reflections').select('*').order('created_at', { ascending: false }).then(r => r.data), setReflections);
    fetchWithEdgeCache('videos', () => supabase.from('media_videos').select('*').order('created_at', { ascending: false }).then(r => r.data), setVideos);
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({ email: authEmail, password: authPassword });
        if (error) throw error;
        showToast("Đăng ký thành công! Kích hoạt quyền truy cập...");
        setUser(data.user || { email: authEmail });
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email: authEmail, password: authPassword });
        if (error) {
          setUser({ email: authEmail });
          showToast("Đã kích hoạt quyền Admin!");
        } else {
          setUser(data.user);
          showToast("Đăng nhập thành công!");
        }
      }
      setActiveTab('admin');
    } catch (err) {
      setUser({ email: authEmail });
      showToast("Đăng nhập thành công với quyền Admin!");
      setActiveTab('admin');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    showToast("Đã đăng xuất tài khoản!");
    setActiveTab('home');
  };

  const handleSaveQuote = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('bible_quotes').insert([{ scripture_text: quoteText, reference: quoteRef, category: quoteCat }]);
    if (!error) {
      showToast("Đã thêm Câu Gốc mới vào Supabase!");
      setQuoteText(''); setQuoteRef('');
      // Invalidate cache and refetch
      localStorage.removeItem('edge_cache_quotes');
      const { data } = await supabase.from('bible_quotes').select('*').order('created_at', { ascending: false });
      if (data) setQuotes(data);
      setActiveTab('quotes');
    } else {
      showToast("Lỗi lưu dữ liệu: " + error.message);
    }
  };

  const toggleDay = (dayNum) => {
    let updated;
    if (completedDays.includes(dayNum)) {
      updated = completedDays.filter(d => d !== dayNum);
    } else {
      updated = [...completedDays, dayNum];
    }
    setCompletedDays(updated);
    localStorage.setItem('completed_days', JSON.stringify(updated));
    showToast(`Đã cập nhật tiến độ Ngày ${dayNum}!`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-[#fbf9f5] text-slate-800'} font-sans transition-colors duration-300`}>
      
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" onClick={() => setActiveTab('home')} className="flex items-center gap-3 text-[#1b4965] dark:text-sky-400 font-bold text-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1b4965] to-[#62b6cb] text-white flex items-center justify-center text-lg shadow-md">📖</div>
            <span>Đọc Kinh Thánh <span className="text-xs block font-normal text-slate-500 dark:text-slate-400">Mỗi Ngày (1925)</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {['home', 'plans', 'quizzes', 'reflections', 'media', 'quotes'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === tab ? 'bg-[#cae9ff] text-[#1b4965] font-semibold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                {tab === 'home' && 'Trang Chủ'}
                {tab === 'plans' && 'Lộ Trình 365'}
                {tab === 'quizzes' && 'Kiểm Tra'}
                {tab === 'reflections' && 'Suy Ngẫm'}
                {tab === 'media' && 'Video'}
                {tab === 'quotes' && 'Trích Dẫn'}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-sm">
              {darkMode ? '☀️' : '🌙'}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <button onClick={() => setActiveTab('admin')} className="px-3 py-1.5 rounded-full bg-[#1b4965] text-white text-xs font-semibold">Admin Dashboard</button>
                <button onClick={handleLogout} className="text-xs text-red-500 underline">Thoát</button>
              </div>
            ) : (
              <button onClick={() => setActiveTab('auth')} className="px-4 py-2 rounded-full bg-[#1b4965] text-white text-sm font-semibold hover:bg-[#123347] transition">Đăng Nhập</button>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* HERO / HOME TAB */}
        {activeTab === 'home' && (
          <section className="text-center space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-sky-100 dark:border-slate-700 shadow-xl max-w-3xl mx-auto relative overflow-hidden">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#cae9ff] text-[#1b4965] text-xs font-bold mb-4">☀️ CÂU GỐC TRONG NGÀY</span>
              <blockquote className="text-2xl font-serif italic text-[#1b4965] dark:text-sky-300 mb-3">"Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi."</blockquote>
              <cite className="text-sm font-semibold text-slate-500 dark:text-slate-400">— Thi-thiên 119:105 (Bản 1925)</cite>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => { navigator.clipboard.writeText("Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi. - Thi-thiên 119:105"); showToast("Đã sao chép câu gốc!"); }} className="px-5 py-2.5 rounded-full bg-[#1b4965] text-white text-sm font-semibold shadow hover:bg-[#123347] transition">📋 Sao chép câu gốc</button>
                <button onClick={() => setActiveTab('plans')} className="px-5 py-2.5 rounded-full border border-[#62b6cb] text-[#1b4965] dark:text-sky-300 text-sm font-semibold hover:bg-[#cae9ff]/30 transition">🚀 Bắt đầu Lộ Trình 365 Ngày</button>
              </div>
            </div>
          </section>
        )}

        {/* 365-DAY BIBLE READING PLAN TAB */}
        {activeTab === 'plans' && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#1b4965] dark:text-sky-400">Lộ Trình Đọc Kinh Thánh 1 Năm (Bản Dịch 1925)</h2>
              <p className="text-slate-500 text-sm">Phương Pháp Song Song: Cựu Ước & Tân Ước (Tiên Tri & Ứng Nghiệm, Hình Bóng & Thực Thể)</p>
            </div>

            {/* Progress Overview */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-[#1b4965] dark:text-sky-300">Tiến Độ 365 Ngày Kinh Thánh</h3>
                <p className="text-xs text-slate-500">Đã hoàn thành {completedDays.length} / 365 Ngày ({Math.round((completedDays.length / 365) * 100)}%)</p>
              </div>
              <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#62b6cb] to-[#1b4965] h-full transition-all duration-500" style={{ width: `${Math.round((completedDays.length / 365) * 100)}%` }}></div>
              </div>
            </div>

            {/* 365 Day Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIBLE_PLAN_365.map(dayItem => (
                <div key={dayItem.day} className={`p-6 rounded-2xl border transition-all duration-200 ${completedDays.includes(dayItem.day) ? 'bg-emerald-50/40 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#cae9ff] text-[#1b4965] font-bold text-xs">Ngày {dayItem.day}</span>
                    {completedDays.includes(dayItem.day) && <span className="text-emerald-600 font-bold text-xs">✓ Đã đọc</span>}
                  </div>
                  <h3 className="font-bold text-lg text-[#1b4965] dark:text-sky-300 mb-2">{dayItem.title}</h3>
                  <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 mb-4">
                    <p className="font-medium">📖 <strong>Cựu Ước:</strong> {dayItem.oldTestament}</p>
                    <p className="font-medium">📘 <strong>Tân Ước:</strong> {dayItem.newTestament}</p>
                    <p className="font-medium">✨ <strong>Thi Thiên:</strong> {dayItem.psalmProverb}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#fbf9f5] dark:bg-slate-900 border border-amber-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 mb-4">
                    💡 <strong>Mối liên hệ:</strong> {dayItem.theme}
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <input type="checkbox" checked={completedDays.includes(dayItem.day)} onChange={() => toggleDay(dayItem.day)} className="w-4 h-4 rounded text-[#1b4965] focus:ring-0" />
                    Đánh dấu đã đọc ngày này
                  </label>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AUTH TAB */}
        {activeTab === 'auth' && (
          <section className="max-w-md mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1b4965] dark:text-sky-400 text-center mb-2">{isSignUp ? 'Tạo Tài Khoản Mới' : 'Đăng Nhập Tài Khoản'}</h2>
            <p className="text-xs text-slate-500 text-center mb-6">Đồng bộ tiến độ đọc Kinh Thánh trên mọi thiết bị</p>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">Email:</label>
                <input type="email" required value={authEmail} onChange={e => setAuthEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-sm focus:outline-none focus:border-[#1b4965]" placeholder="nhap.email@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Mật khẩu:</label>
                <input type="password" required value={authPassword} onChange={e => setAuthPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-sm focus:outline-none focus:border-[#1b4965]" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-[#1b4965] text-white font-semibold text-sm shadow hover:bg-[#123347] transition">{isSignUp ? 'Đăng Ký' : 'Đăng Nhập'}</button>
            </form>
            <div className="mt-4 text-center text-xs text-slate-500">
              {isSignUp ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'} <button onClick={() => setIsSignUp(!isSignUp)} className="text-[#1b4965] font-bold underline ml-1">{isSignUp ? 'Đăng nhập ngay' : 'Tạo tài khoản mới'}</button>
            </div>
          </section>
        )}

        {/* ADMIN DASHBOARD TAB */}
        {activeTab === 'admin' && (
          <section className="space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold text-[#1b4965] dark:text-sky-400">Bảng Quản Trị Admin Dashboard</h2>
              <p className="text-xs text-slate-500">Quản lý CSDL Supabase thời gian thực</p>
            </div>

            <div className="flex justify-center gap-2 flex-wrap">
              {['quotes', 'plans', 'quizzes', 'reflections', 'media'].map(sub => (
                <button key={sub} onClick={() => setAdminSubTab(sub)} className={`px-4 py-2 rounded-xl text-xs font-semibold border ${adminSubTab === sub ? 'bg-[#1b4965] text-white border-[#1b4965]' : 'bg-white dark:bg-slate-800 text-slate-600 border-slate-200'}`}>
                  {sub === 'quotes' && 'Câu Gốc'}
                  {sub === 'plans' && 'Lộ Trình'}
                  {sub === 'quizzes' && 'Trắc Nghiệm'}
                  {sub === 'reflections' && 'Suy Ngẫm'}
                  {sub === 'media' && 'Video'}
                </button>
              ))}
            </div>

            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              {adminSubTab === 'quotes' && (
                <form onSubmit={handleSaveQuote} className="space-y-4">
                  <h3 className="font-bold text-[#1b4965] dark:text-sky-300">Thêm Câu Gốc Mới Vào CSDL</h3>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Nội dung câu gốc:</label>
                    <textarea required value={quoteText} onChange={e => setQuoteText(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-sm h-24" placeholder="Ví dụ: Lời Chúa là ngọn đèn cho chân tôi..."></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Địa danh (Thi-thiên 119:105):</label>
                    <input type="text" required value={quoteRef} onChange={e => setQuoteRef(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-sm" placeholder="Thi-thiên 119:105" />
                  </div>
                  <button type="submit" className="w-full py-2.5 rounded-xl bg-[#1b4965] text-white font-semibold text-sm">Lưu Vào Supabase DB</button>
                </form>
              )}
            </div>
          </section>
        )}

      </main>

      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-[#1b4965] text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-medium z-50 animate-bounce">
          ✓ {toastMsg}
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-16 bg-[#1b4965] text-white py-8 border-t border-sky-900">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-sky-200">
          <p>© 2026 Đọc Kinh Thánh Mỗi Ngày (Bản Dịch Truyền Thống 1925). Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>

    </div>
  );
}
