# 🚀 Hướng Dẫn Kích Hoạch Deploy 1-Click Lên Vercel Production

Mã nguồn dự án **Đọc Kinh Thánh Mỗi Ngày** (bao gồm React.js, Vite, TailwindCSS, CSDL Supabase và CDN Edge Cache) đã được đóng gói chuẩn hóa và đẩy thành công 100% lên GitHub tại địa chỉ:
👉 **[https://github.com/tle800859-star/DOC-KINH-THANH-MOI-NGAY](https://github.com/tle800859-star/DOC-KINH-THANH-MOI-NGAY)**

---

## ⚡ 3 BƯỚC ĐỂ VERCEL TỰ ĐỘNG PHÁT HÀNH WEBSITE CÔNG KHAI (CHỈ MẤT 1 PHÚT):

Thầy chỉ cần thực hiện 3 thao tác đơn giản bên dưới để trang web chính thức chạy công khai trực tuyến:

### 🟢 Bước 1: Đăng Nhập Vercel
1. Mở trình duyệt truy cập: **[https://vercel.com/login](https://vercel.com/login)**
2. Nhấp nút **Continue with GitHub** để đăng nhập bằng tài khoản GitHub của thầy.

### 🟢 Bước 2: Nhập Repository Từ GitHub (Import Project)
1. Tại trang quản trị Vercel Dashboard, nhấp vào nút **Add New...** -> chọn **Project**.
2. Trong danh sách GitHub Repositories hiện ra, tìm repository **`DOC-KINH-THANH-MOI-NGAY`** và nhấp nút **Import**.

### 🟢 Bước 3: Phát Hành (Deploy)
1. Giữ nguyên toàn bộ cấu hình mặc định (Vercel sẽ tự động nhận diện cấu hình `Vite` và `dist` từ file `vercel.json` em đã tạo sẵn).
2. Nhấp nút **Deploy**.
3. 🎉 **Hoàn tất!** Vercel sẽ tự động build ứng dụng React và cấp cho thầy một **Tên Miền Công Khai Miễn Phí** (Ví dụ: `https://doc-kinh-thanh-moi-ngay.vercel.app`).

---

## 🌐 KẾT QUẢ ĐẠT ĐƯỢC SAU KHI DEPLOY:

- **Tên miền công khai HTTPS bảo mật**: Mọi người ở bất kỳ đâu đều có thể mở đọc Kinh Thánh trên điện thoại & máy tính.
- **Tốc độ tải trang siêu tốc < 0.5s**: Nhờ mạng lưới máy chủ CDN Edge Server của Vercel phân bố toàn cầu.
- **Tự động cập nhật (Continuous Deployment)**: Mỗi khi thầy hoặc em đẩy mã nguồn mới lên GitHub `main`, Vercel sẽ tự động cập nhật trang web lên bản mới nhất mà thầy không cần bấm deploy lại!
