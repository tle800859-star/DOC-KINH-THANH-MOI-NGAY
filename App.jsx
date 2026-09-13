import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BIBLE_PLAN_365 } from './planData1925';
import { BIBLE_QUOTES_1925, BIBLE_QUOTES_CATEGORIES } from './quotesData1925';
const WATV_12_MONTHS_PLAN = window.WATV_12_MONTHS_PLAN || [];
const CHRONOLOGICAL_12_MONTHS_PLAN = window.CHRONOLOGICAL_12_MONTHS_PLAN || [];
const FAST_6_MONTHS_PLAN = window.FAST_6_MONTHS_PLAN || [];
const STUDENT_CAP2_PLAN = window.STUDENT_CAP2_PLAN || [];
const STUDENT_CAP3_PLAN = window.STUDENT_CAP3_PLAN || [];

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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completed_days');
    return saved ? JSON.parse(saved) : [1, 2];
  });
  const [toastMsg, setToastMsg] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // 5 Lộ Trình States
  const [planMode, setPlanMode] = useState(() => localStorage.getItem('saved_reading_plan_mode') || 'doctrinal');
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Quotes Filter State
  const [quoteCategory, setQuoteCategory] = useState('all');

  // Auth & Admin Form States
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

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
                {tab === 'quotes' && 'Lời Chúa Khích Lệ'}
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#cae9ff] text-[#1b4965] text-xs font-bold mb-4">☀️ CÂU GỐC KHÍCH LỆ TRONG NGÀY</span>
              <blockquote className="text-2xl font-serif italic text-[#1b4965] dark:text-sky-300 mb-3">"Đừng sợ, vì Ta ở với ngươi; chớ kinh hãi, vì Ta là Đức Chúa Trời ngươi."</blockquote>
              <cite className="text-sm font-semibold text-slate-500 dark:text-slate-400">— Ê-sai 41:10 (Bản Dịch Truyền Thống 1925)</cite>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={() => { navigator.clipboard.writeText("Đừng sợ, vì Ta ở với ngươi; chớ kinh hãi, vì Ta là Đức Chúa Trời ngươi. - Ê-sai 41:10"); showToast("Đã sao chép câu gốc!"); }} className="px-5 py-2.5 rounded-full bg-[#1b4965] text-white text-sm font-semibold shadow hover:bg-[#123347] transition">📋 Sao chép câu gốc</button>
                <button onClick={() => setActiveTab('quotes')} className="px-5 py-2.5 rounded-full border border-[#62b6cb] text-[#1b4965] dark:text-sky-300 text-sm font-semibold hover:bg-[#cae9ff]/30 transition">💡 Lời Chúa Theo Tình Trạng Nhau</button>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1b4965] dark:text-sky-400">Bắt Đầu Hành Trình Của Bạn</h3>
                <p className="text-slate-500 text-sm">Duy trì thói quen học và đọc Kinh Thánh dễ dàng mỗi ngày với lộ trình được thiết kế riêng.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center flex flex-col justify-between items-center">
                  <div className="text-4xl mb-3">🧩</div>
                  <h4 className="font-bold text-lg text-[#1b4965] dark:text-sky-300 mb-2">Lộ Trình Đọc Kinh Thánh Trong 1 Năm</h4>
                  <p className="text-xs text-slate-500 mb-4">Đọc trọn vẹn 66 sách Kinh Thánh (Cựu Ước & Tân Ước) trong 365 ngày.</p>
                  <button onClick={() => setActiveTab('plans')} className="px-5 py-2 rounded-full bg-[#1b4965] text-white text-xs font-bold shadow hover:bg-[#123347] transition">Xem Lộ Trình</button>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center flex flex-col justify-between items-center">
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-bold text-lg text-[#1b4965] dark:text-sky-300 mb-2">Ôn Tập Kiến Thức</h4>
                  <p className="text-xs text-slate-500 mb-4">Củng cố bài học qua các câu hỏi trắc nghiệm & tự luận ngắn.</p>
                  <button onClick={() => setActiveTab('quotes')} className="px-5 py-2 rounded-full border border-[#1b4965] text-[#1b4965] dark:text-sky-300 text-xs font-bold hover:bg-[#cae9ff]/30 transition">Làm Bài Kiểm Tra</button>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center flex flex-col justify-between items-center">
                  <div className="text-4xl mb-3">❤️</div>
                  <h4 className="font-bold text-lg text-[#1b4965] dark:text-sky-300 mb-2">Bài Suy Ngẫm</h4>
                  <p className="text-xs text-slate-500 mb-4">Đọc các bài tĩnh nguyện ngắn giúp áp dụng lời Chúa vào đời sống.</p>
                  <button onClick={() => setActiveTab('reflections')} className="px-5 py-2 rounded-full border border-[#1b4965] text-[#1b4965] dark:text-sky-300 text-xs font-bold hover:bg-[#cae9ff]/30 transition">Đọc Bài Suy Ngẫm</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 365-DAY BIBLE READING PLAN TAB */}
        {activeTab === 'plans' && (() => {
          let currentPlanData = WATV_12_MONTHS_PLAN;
          let planTitle = "🕊️ Lộ Trình Đọc Kinh Thánh Theo Chuyên Đề Lẽ Thật Giao Ước Mới";
          let planSubtitle = "Phương Pháp Song Song: Cựu Ước & Tân Ước (Tiên Tri & Ứng Nghiệm, Hình Bóng & Thực Thể) • WATV.ORG";

          if (planMode === 'chronological') {
            currentPlanData = CHRONOLOGICAL_12_MONTHS_PLAN;
            planTitle = "📜 Lộ Trình Đọc Kinh Thánh Theo Tiến Trình Lịch Sử & Lời Tiên Tri";
            planSubtitle = "Sắp xếp chính xác theo thời gian lịch sử xuất hiện và lời tiên tri ứng nghiệm • Bản Dịch Phan Khôi 1925";
          } else if (planMode === 'fast6') {
            currentPlanData = FAST_6_MONTHS_PLAN;
            planTitle = "⚡ Lộ Trình Đọc Kinh Thánh 6 Tháng Nhanh (Tân Ước & Tiên Tri Trọng Tâm)";
            planSubtitle = "Rút ngắn thời gian, tập trung Tân Ước & Các Tiên Tri (Ê-sai, Đa-ni-ên, Sa-cha-ri) • 2 Chương/Ngày";
          } else if (planMode === 'cap2') {
            currentPlanData = STUDENT_CAP2_PLAN;
            planTitle = "🎒 Lộ Trình Đọc Kinh Thánh Cho Học Sinh Cấp 2 (THCS: 11 – 14 Tuổi)";
            planSubtitle = "Thiếu niên anh hùng đức tin, lòng hiếu kính cha mẹ & Lẽ Thật cứu rỗi • 1 Chương/Ngày (5–7 Phút)";
          } else if (planMode === 'cap3') {
            currentPlanData = STUDENT_CAP3_PLAN;
            planTitle = "🎓 Lộ Trình Đọc Kinh Thánh Cho Học Sinh Cấp 3 (THPT: 15 – 18 Tuổi)";
            planSubtitle = "Bản sắc con cái Đức Chúa Trời, sự khôn ngoan thi cử & định hướng tương lai • 2 Chương/Ngày (10–12 Phút)";
          }

          const activeMonthData = selectedMonth > 0 ? currentPlanData.find(m => m.month === selectedMonth) : null;
          const displaySchedule = selectedMonth === 0 
            ? currentPlanData.flatMap(m => m.schedule.map(s => ({ ...s, month: m.month, books: m.books })))
            : (activeMonthData ? activeMonthData.schedule.map(s => ({ ...s, month: activeMonthData.month, books: activeMonthData.books })) : []);

          return (
            <section className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-[#1b4965] dark:text-sky-400">{planTitle}</h2>
                <p className="text-slate-500 text-sm">{planSubtitle}</p>
              </div>

              {/* BỘ CHỌN LỘ TRÌNH DROPDOWN */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4965] text-white flex items-center justify-center font-bold text-lg">📚</div>
                  <div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase">BỘ CHỌN ĐỒNG BỘ 100%</span>
                    <h3 className="font-bold text-sm text-[#1b4965] dark:text-sky-300">Lựa Chọn Lộ Trình Đọc Phù Hợp:</h3>
                  </div>
                </div>
                <select 
                  value={planMode} 
                  onChange={(e) => {
                    setPlanMode(e.target.value);
                    localStorage.setItem('saved_reading_plan_mode', e.target.value);
                    showToast(`Đã chuyển sang Lộ Trình Mới!`);
                  }}
                  className="w-full md:w-auto px-4 py-2.5 rounded-xl border-2 border-[#62b6cb] font-bold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 outline-none cursor-pointer"
                >
                  <option value="doctrinal">🕊️ LỘ TRÌNH 2: Theo Chuyên Đề Lẽ Thật Giao Ước Mới (Song Song - WATV.ORG)</option>
                  <option value="chronological">📜 LỘ TRÌNH 1: Theo Tiến Trình Lịch Sử & Lời Tiên Tri (Cựu Ước ➔ Tân Ước)</option>
                  <option value="fast6">⚡ LỘ TRÌNH 3: Lộ Trình 6 Tháng Nhanh (2 Chương/Ngày)</option>
                  <option value="cap2">🎒 LỘ TRÌNH 4: Lộ Trình Học Sinh Cấp 2 (THCS: 11-14 Tuổi - Thiếu Niên Đức Tin)</option>
                  <option value="cap3">🎓 LỘ TRÌNH 5: Lộ Trình Học Sinh Cấp 3 (THPT: 15-18 Tuổi - Định Hướng & Lẽ Thật)</option>
                </select>
              </div>

              {/* 12 THẺ THÁNG GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div onClick={() => setSelectedMonth(0)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedMonth === 0 ? 'bg-[#1b4965] text-white border-[#1b4965] shadow-lg scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#62b6cb]'}`}>
                  <span className="text-xs font-bold opacity-80 block">TẤT CẢ THÁNG</span>
                  <h4 className="font-bold text-sm mb-1">Toàn Bộ Lộ Trình</h4>
                  <p className="text-[11px] opacity-70">Bản Dịch Phan Khôi 1925</p>
                </div>

                {currentPlanData.map(m => (
                  <div key={m.month} onClick={() => setSelectedMonth(m.month)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedMonth === m.month ? 'bg-[#1b4965] text-white border-[#1b4965] shadow-lg scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-[#62b6cb]'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${selectedMonth === m.month ? 'bg-sky-400 text-slate-900' : 'bg-[#cae9ff] text-[#1b4965]'}`}>Tháng {m.month} ({m.totalChapters}ch)</span>
                    </div>
                    <h4 className="font-bold text-xs mb-1 line-clamp-1">{m.title.replace(/^Tháng \d+:\s*/, '').replace(/^Tháng \d+\s*\([^)]+\):\s*/, '')}</h4>
                    <p className="text-[10px] opacity-75 line-clamp-1">{m.books}</p>
                  </div>
                ))}
              </div>

              {/* DETAILS BOX IF MONTH SELECTED */}
              {activeMonthData && (
                <div className="bg-sky-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-sky-200 dark:border-slate-700 space-y-4">
                  <h3 className="font-bold text-lg text-[#1b4965] dark:text-sky-300">📖 {activeMonthData.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300"><strong>Tổng quan:</strong> {activeMonthData.overview}</p>
                  {activeMonthData.coreDoc && (
                    <div>
                      <h4 className="font-bold text-xs text-sky-700 dark:text-sky-400 uppercase mb-1">🕊️ Bản Chất Cốt Lõi (WATV.ORG):</h4>
                      <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 dark:text-slate-300">
                        {activeMonthData.coreDoc.map((c, idx) => <li key={idx}>{c}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* DAY CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displaySchedule.map((s, idx) => {
                  const globalDay = s.day || idx + 1;
                  const isDone = completedDays.includes(globalDay);
                  return (
                    <div key={idx} className={`p-6 rounded-2xl border transition-all duration-200 ${isDone ? 'bg-emerald-50/40 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md'}`}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#cae9ff] text-[#1b4965] font-bold text-xs">Tháng {s.month} • Ngày {s.day || (idx + 1)}</span>
                        {isDone && <span className="text-emerald-600 font-bold text-xs">✓ Đã đọc</span>}
                      </div>
                      <h3 className="font-bold text-base text-[#1b4965] dark:text-sky-300 mb-2">{s.passage}</h3>
                      <p className="text-xs text-slate-500 mb-4">📖 {s.books || 'Phân đoạn Kinh Thánh Phan Khôi 1925'}</p>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-200">
                        <input type="checkbox" checked={isDone} onChange={() => toggleDay(globalDay)} className="w-4 h-4 rounded text-[#1b4965] focus:ring-0" />
                        Đánh dấu đã đọc ngày này
                      </label>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })()}

        {/* BIBLE QUOTES BY HUMAN NEED CATEGORIES TAB */}
        {activeTab === 'quotes' && (
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-[#1b4965] dark:text-sky-400">Lời Chúa Khích Lệ Theo Tình Trạng Cần Giúp</h2>
              <p className="text-slate-500 text-sm">Tuyển chọn các câu Kinh Thánh khích lệ giúp nâng đỡ tâm hồn (Bản Dịch 1925)</p>
            </div>

            {/* Quotes Categories Filter Bar */}
            <div className="flex justify-center gap-2 flex-wrap">
              {BIBLE_QUOTES_CATEGORIES.map(cat => (
                <button key={cat.id} onClick={() => setQuoteCategory(cat.id)} className={`px-4 py-2 rounded-full text-xs font-semibold transition ${quoteCategory === cat.id ? 'bg-[#1b4965] text-white shadow-md scale-105' : 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 hover:border-[#62b6cb]'}`}>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredQuotes.map(q => (
                <div key={q.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <blockquote className="font-serif italic text-base text-[#1b4965] dark:text-sky-300 mb-4 leading-relaxed">"{q.text}"</blockquote>
                  <div className="flex items-center justify-between border-t pt-4 border-slate-100 dark:border-slate-700">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-slate-900 px-3 py-1 rounded-full">📍 {q.reference} (Bản 1925)</span>
                    <button onClick={() => { navigator.clipboard.writeText(`"${q.text}" - ${q.reference} (Bản Dịch Truyền Thống 1925)`); showToast("Đã sao chép câu gốc khích lệ 1925!"); }} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-200 transition">📋 Sao Chép</button>
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
