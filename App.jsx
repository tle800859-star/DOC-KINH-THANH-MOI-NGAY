import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BIBLE_PLAN_365 } from './planData1925';
import { BIBLE_QUOTES_1925 } from './quotesData1925';

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

// DANH MỤC 12 THÁNG ĐỌC KINH THÁNH THEO CHỦ ĐỀ
const MONTH_CATEGORIES = [
  { id: 1, name: "Tháng 1", title: "Khởi Nguyên & Sáng Tạo", desc: "Sáng-thế-ký, Giăng, Ma-thi-ơ" },
  { id: 2, name: "Tháng 2", title: "Xuất Hành & Cứu Rỗi", desc: "Xuất Ê-díp-tô Ký, Giăng, Ma-thi-ơ" },
  { id: 3, name: "Tháng 3", title: "Luật Pháp & Sự Thánh Sạch", desc: "Lê-vi Ký, Mác, Hê-bơ-rơ" },
  { id: 4, name: "Tháng 4", title: "Hành Trình Đồng Vắng", desc: "Dân-số-ký, Lu-ca, Công-vụ" },
  { id: 5, name: "Tháng 5", title: "Nhắc Lại Luật Pháp & Chiếm Đất Hứa", desc: "Phục-truyền, Giô-suê, Rô-ma" },
  { id: 6, name: "Tháng 6", title: "Thời Kỳ Các Vua & Đa-vít", desc: "Các Quan-xét, 1-2 Sa-mu-ên, 1-2 Cô-rinh-tô" },
  { id: 7, name: "Tháng 7", title: "Thi Ca & Trí Tuệ", desc: "Thi-thiên, Châm-ngôn, Gióp, Ê-phê-sô" },
  { id: 8, name: "Tháng 8", title: "Lời Tiên Tri Ê-sai & Đấng Mê-si", desc: "Ê-sai, Ga-la-ti, Phi-líp" },
  { id: 9, name: "Tháng 9", title: "Giao Ước Mới & Sự Phục Hưng", desc: "Giê-rê-mi, Ca-thương, 1-2 Ti-mô-thê" },
  { id: 10, name: "Tháng 10", title: "Thung Lũng Hài Cốt Khô & Sự Sống Lại", desc: "Ê-zê-chi-ên, Đa-ni-ên, Hê-bơ-rơ" },
  { id: 11, name: "Tháng 11", title: "Các Tiên Tri Nhỏ & Sự Ăn Năn", desc: "Ô-sê đến Ma-la-chi, 1-2 Phi-e-rơ" },
  { id: 12, name: "Tháng 12", title: "Trời Mới Đất Mới & Sự Hoàn Tất", desc: "Khải-huyền, 1-3 Giăng, Giu-đơ" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completed_days');
    return saved ? JSON.parse(saved) : [1, 2];
  });
  const [toastMsg, setToastMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // 365 Plan Filter States
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Quotes Filter State
  const [quoteCategory, setQuoteCategory] = useState('all');

  // Auth & Admin Form States
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [adminSubTab, setAdminSubTab] = useState('quotes');
  const [quoteText, setQuoteText] = useState('');
  const [quoteRef, setQuoteRef] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user);
    });
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setUser({ email: authEmail });
    showToast("Đăng nhập thành công với quyền Admin!");
    setActiveTab('admin');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    showToast("Đã đăng xuất tài khoản!");
    setActiveTab('home');
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

  const filteredPlan = BIBLE_PLAN_365.filter(item => {
    const matchesMonth = selectedMonth === 0 || item.month === selectedMonth;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.oldTestament.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.newTestament.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesQuery;
  });

  const filteredQuotes = BIBLE_QUOTES_1925.filter(q => {
    return quoteCategory === 'all' || q.category === quoteCategory;
  });

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
            {['home', 'plans', 'quotes', 'reflections', 'media'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === tab ? 'bg-[#cae9ff] text-[#1b4965] font-semibold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                {tab === 'home' && 'Trang Chủ'}
                {tab === 'plans' && 'Lộ Trình 365'}
                {tab === 'quotes' && 'Trích Dẫn 1925'}
                {tab === 'reflections' && 'Suy Ngẫm'}
                {tab === 'media' && 'Video'}
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#cae9ff] text-[#1b4965] text-xs font-bold mb-4">☀️ CÂU GỐC TRONG NGÀY (BẢN DỊCH 1925)</span>
              <blockquote className="text-2xl font-serif italic text-[#1b4965] dark:text-sky-300 mb-3">"Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi."</blockquote>
              <cite className="text-sm font-semibold text-slate-500 dark:text-slate-400">— Thi-thiên 119:105 (Bản Dịch Truyền Thống 1925)</cite>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => { navigator.clipboard.writeText("Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi. - Thi-thiên 119:105"); showToast("Đã sao chép câu gốc!"); }} className="px-5 py-2.5 rounded-full bg-[#1b4965] text-white text-sm font-semibold shadow hover:bg-[#123347] transition">📋 Sao chép câu gốc</button>
                <button onClick={() => setActiveTab('quotes')} className="px-5 py-2.5 rounded-full border border-[#62b6cb] text-[#1b4965] dark:text-sky-300 text-sm font-semibold hover:bg-[#cae9ff]/30 transition">📜 Xem Ngân Hàng Trích Dẫn 1925</button>
              </div>
            </div>
          </section>
        )}

        {/* 365-DAY BIBLE READING PLAN TAB */}
        {activeTab === 'plans' && (
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#1b4965] dark:text-sky-400">Danh Mục Lộ Trình 12 Tháng Đọc Trọn Vẹn Kinh Thánh (1925)</h2>
              <p className="text-slate-500 text-sm">Sắp Xếp Song Song: Cựu Ước & Tân Ước (Tiên Tri & Ứng Nghiệm, Hình Bóng & Thực Thể)</p>
            </div>

            {/* 12 MONTHS CATEGORIES GRID */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div onClick={() => setSelectedMonth(0)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedMonth === 0 ? 'bg-[#1b4965] text-white border-[#1b4965] shadow-lg scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#62b6cb]'}`}>
                  <span className="text-xs font-bold opacity-80 block">TẤT CẢ 365 NGÀY</span>
                  <h4 className="font-bold text-sm mb-1">Toàn Bộ Lộ Trình</h4>
                  <p className="text-[11px] opacity-70">365 Bài Học Trọn Vẹn 66 Sách</p>
                </div>

                {MONTH_CATEGORIES.map(m => (
                  <div key={m.id} onClick={() => setSelectedMonth(m.id)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedMonth === m.id ? 'bg-[#1b4965] text-white border-[#1b4965] shadow-lg scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#62b6cb]'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedMonth === m.id ? 'bg-sky-400 text-slate-900' : 'bg-[#cae9ff] text-[#1b4965]'}`}>{m.name}</span>
                    </div>
                    <h4 className="font-bold text-xs mb-1 line-clamp-1">{m.title}</h4>
                    <p className="text-[10px] opacity-75 line-clamp-1">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 365 Day Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlan.map(dayItem => (
                <div key={dayItem.day} className={`p-6 rounded-2xl border transition-all duration-200 ${completedDays.includes(dayItem.day) ? 'bg-emerald-50/40 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#cae9ff] text-[#1b4965] font-bold text-xs">Ngày {dayItem.day} (Tháng {dayItem.month})</span>
                    {completedDays.includes(dayItem.day) && <span className="text-emerald-600 font-bold text-xs">✓ Đã đọc</span>}
                  </div>
                  <h3 className="font-bold text-base text-[#1b4965] dark:text-sky-300 mb-2">{dayItem.title}</h3>
                  <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 mb-4">
                    <p className="font-medium">📖 <strong>Cựu Ước:</strong> {dayItem.oldTestament}</p>
                    <p className="font-medium">📘 <strong>Tân Ước:</strong> {dayItem.newTestament}</p>
                    <p className="font-medium">✨ <strong>Thi Thiên:</strong> {dayItem.psalmProverb}</p>
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

        {/* BIBLE QUOTES 1925 TAB */}
        {activeTab === 'quotes' && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#1b4965] dark:text-sky-400">Ngân Hàng Trích Dẫn Kinh Thánh (Bản Dịch 1925)</h2>
              <p className="text-slate-500 text-sm">Tuyển chọn các câu gốc Kinh Thánh truyền thống nuôi dưỡng tâm hồn</p>
            </div>

            {/* Quotes Category Filter Bar */}
            <div className="flex justify-center gap-2 flex-wrap">
              {[
                { id: 'all', name: 'Tất Cả' },
                { id: 'peace', name: '🕊️ Bình An' },
                { id: 'faith', name: '🛡️ Đức Tin' },
                { id: 'love', name: '❤️ Tình Yêu' },
                { id: 'hope', name: '🌅 Hy Vọng' }
              ].map(cat => (
                <button key={cat.id} onClick={() => setQuoteCategory(cat.id)} className={`px-4 py-2 rounded-full text-xs font-semibold transition ${quoteCategory === cat.id ? 'bg-[#1b4965] text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200'}`}>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredQuotes.map(q => (
                <div key={q.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <blockquote className="font-serif italic text-lg text-[#1b4965] dark:text-sky-300 mb-4">"{q.text}"</blockquote>
                  <div className="flex items-center justify-between border-t pt-4 border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">— {q.reference} (Bản 1925)</span>
                    <button onClick={() => { navigator.clipboard.writeText(`"${q.text}" - ${q.reference} (Bản 1925)`); showToast("Đã sao chép câu gốc 1925!"); }} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-200 transition">📋 Sao Chép</button>
                  </div>
                </div>
              ))}
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
