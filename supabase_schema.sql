-- ========================================================
-- KỊCH BẢN KHỞI TẠO CƠ SỞ DỮ LIỆU SUPABASE
-- DỰ ÁN: ĐỌC KINH THÁNH MỖI NGÀY
-- ========================================================

-- 1. BẢNG TRÍCH DẪN KINH THÁNH (Bible Quotes)
CREATE TABLE IF NOT EXISTS public.bible_quotes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scripture_text TEXT NOT NULL,
    reference VARCHAR(100) NOT NULL,
    category VARCHAR(50) DEFAULT 'faith', -- faith, love, hope, peace
    is_verse_of_the_day BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BẢNG LỘ TRÌNH ĐỌC (Reading Plans)
CREATE TABLE IF NOT EXISTS public.reading_plans (
    id SERIAL PRIMARY KEY,
    day_number INT NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    passage VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BẢNG TIẾN ĐỘ NGƯỜI DÙNG (User Reading Progress)
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_identifier VARCHAR(255) NOT NULL, -- UUID user hoặc Cookie ID
    plan_day_id INT REFERENCES public.reading_plans(day_number) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_identifier, plan_day_id)
);

-- 4. BẢNG BÀI KIỂM TRA (Quizzes)
CREATE TABLE IF NOT EXISTS public.quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_type VARCHAR(20) NOT NULL, -- multiple_choice, true_false, essay
    question TEXT NOT NULL,
    options JSONB, -- Ví dụ: ["A. ...", "B. ...", "C. ..."]
    correct_answer TEXT, -- 'B' hoặc 'True'
    explanation TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. BẢNG BÀI SUY NGẪM (Reflections / Devotionals)
CREATE TABLE IF NOT EXISTS public.reflections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT,
    image_url TEXT,
    published_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. BẢNG THƯ VIỆN VIDEO (Media Videos)
CREATE TABLE IF NOT EXISTS public.media_videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100),
    youtube_video_id VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================================================
-- BẬT ROW LEVEL SECURITY (RLS) & CẤP QUYỀN ĐỌC CHO ANONYMOUS
-- ========================================================

ALTER TABLE public.bible_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reflections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_videos ENABLE ROW LEVEL SECURITY;

-- Cho phép mọi người (Anon / Public) đọc dữ liệu công khai
CREATE POLICY "Public Read Bible Quotes" ON public.bible_quotes FOR SELECT USING (true);
CREATE POLICY "Public Read Reading Plans" ON public.reading_plans FOR SELECT USING (true);
CREATE POLICY "Public Read Quizzes" ON public.quizzes FOR SELECT USING (true);
CREATE POLICY "Public Read Reflections" ON public.reflections FOR SELECT USING (true);
CREATE POLICY "Public Read Media Videos" ON public.media_videos FOR SELECT USING (true);

-- Cho phép đọc & ghi Tiến độ đọc cá nhân
CREATE POLICY "Public Read Progress" ON public.user_progress FOR SELECT USING (true);
CREATE POLICY "Public Insert Progress" ON public.user_progress FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Progress" ON public.user_progress FOR UPDATE USING (true);
CREATE POLICY "Public Delete Progress" ON public.user_progress FOR DELETE USING (true);

-- ========================================================
-- NẠP DỮ LIỆU MẪU BAN ĐẦU (SEED DATA)
-- ========================================================

-- Câu gốc
INSERT INTO public.bible_quotes (scripture_text, reference, category, is_verse_of_the_day) VALUES
('Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi.', 'Thi-thiên 119:105', 'peace', true),
('Vả, đức tin là sự quả quyết về những điều mình đang hy vọng, là bằng chứng của những điều mình chẳng xem thấy.', 'Hê-bơ-rơ 11:1', 'faith', false),
('Đức Chúa Trời đã yêu thương thế gian đến nỗi đã ban Con Một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.', 'Giăng 3:16', 'love', false),
('Ta để sự bình an lại cho các ngươi; Ta ban sự bình an của Ta cho các ngươi.', 'Giăng 14:27', 'peace', false),
('Tôi làm được mọi sự nhờ Đấng ban năng lực cho tôi.', 'Phi-líp 4:13', 'hope', false);

-- Lộ trình đọc mẫu
INSERT INTO public.reading_plans (day_number, title, passage, description) VALUES
(1, 'Ma-thi-ơ Chương 1 - 2', 'Ma-thi-ơ 1-2', 'Gia phả & Sự giáng sinh của Đức Chúa Jêsus'),
(2, 'Ma-thi-ơ Chương 3 - 4', 'Ma-thi-ơ 3-4', 'Giăng Báp-tít & Sự chịu cám dỗ'),
(3, 'Ma-thi-ơ Chương 5 - 7', 'Ma-thi-ơ 5-7', 'Bài giảng trên núi (Phước lành & Cầu nguyện)'),
(4, 'Ma-thi-ơ Chương 8 - 9', 'Ma-thi-ơ 8-9', 'Các phép lạ chữa bệnh & kêu gọi Ma-thi-ơ'),
(5, 'Ma-thi-ơ Chương 10 - 11', 'Ma-thi-ơ 10-11', 'Sai 12 sứ đồ đi rao giảng'),
(6, 'Ma-thi-ơ Chương 12 - 13', 'Ma-thi-ơ 12-13', 'Chúa của ngày Sa-bát & Các ví dụ về Nước Thiên Đàng');

-- Bài tĩnh nguyện mẫu
INSERT INTO public.reflections (title, excerpt, image_url) VALUES
('Tìm Kiếm Sự Bình An Trong Thế Giới Vội Vã', 'Sự bình an thật không đến từ việc hoàn cảnh xung quanh lặng sóng, mà đến từ sự hiện diện của Chúa trong tâm hồn bạn...', 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=600&q=80'),
('Hạt Giống Đức Tin Và Sức Mạnh Của Sự Kiên Trì', 'Đức tin không cần phải lớn như ngọn núi, chỉ cần nhỏ như hạt cải nhưng sống động...', 'https://images.unsplash.com/photo-1499209974431-9dac3cea0047?auto=format&fit=crop&w=600&q=80');

-- Video mẫu
INSERT INTO public.media_videos (title, author, youtube_video_id) VALUES
('Tổng Quan Sách Ma-thi-ơ (Phần 1)', 'The Bible Project (Phụ đề Việt)', 'GQI72THyOKE'),
('Ý Nghĩa Phước Lành Trong Bài Giảng Trên Núi', 'Kinh Thánh Minh Họa', '3D_39Zk9x8E'),
('Câu Chuyện Người Samari Nhân Lành', 'Hoạt Hình Kinh Thánh Cho Gia Đình', 'LkW0G1M8n_4');
