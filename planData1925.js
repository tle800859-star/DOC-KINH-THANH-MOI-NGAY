// ========================================================
// LỘ TRÌNH 365 NGÀY ĐỌC TRỌN VẸN KINH THÁNH (BẢN DỊCH TRUYỀN THỐNG 1925)
// PHƯƠNG PHÁP: SONG SONG CỰU ƯỚC & TÂN ƯỚC (TIÊN TRI & ỨNG NGHIỆM)
// ========================================================

const BOOKS_OLD = [
  { name: "Sáng-thế-ký", chapters: 50 }, { name: "Xuất Ê-díp-tô Ký", chapters: 40 },
  { name: "Lê-vi Ký", chapters: 27 }, { name: "Dân-số-ký", chapters: 36 },
  { name: "Phục-truyền Luật-lệ Ký", chapters: 34 }, { name: "Giô-suê", chapters: 24 },
  { name: "Các Quan-xét", chapters: 21 }, { name: "Ru-tơ", chapters: 4 },
  { name: "1 Sa-mu-ên", chapters: 31 }, { name: "2 Sa-mu-ên", chapters: 24 },
  { name: "1 Các Vua", chapters: 22 }, { name: "2 Các Vua", chapters: 25 },
  { name: "1 Sử-ký", chapters: 29 }, { name: "2 Sử-ký", chapters: 36 },
  { name: "Ê-xơ-ra", chapters: 10 }, { name: "Nê-hê-mi", chapters: 13 },
  { name: "Ê-xơ-tê", chapters: 10 }, { name: "Gióp", chapters: 42 },
  { name: "Thi-thiên", chapters: 150 }, { name: "Châm-ngôn", chapters: 31 },
  { name: "Truyền-đạo", chapters: 12 }, { name: "Nhã-ca", chapters: 8 },
  { name: "Ê-sai", chapters: 66 }, { name: "Giê-rê-mi", chapters: 52 },
  { name: "Ca-thương", chapters: 5 }, { name: "Ê-zê-chi-ên", chapters: 48 },
  { name: "Đa-ni-ên", chapters: 12 }, { name: "Ô-sê", chapters: 14 },
  { name: "Giô-ên", chapters: 3 }, { name: "A-mốt", chapters: 9 },
  { name: "Áp-đi-a", chapters: 1 }, { name: "Giô-na", chapters: 4 },
  { name: "Mi-chê", chapters: 7 }, { name: "Na-húc", chapters: 3 },
  { name: "Ha-ba-cúc", chapters: 3 }, { name: "Sô-phô-ni", chapters: 3 },
  { name: "A-gê", chapters: 2 }, { name: "Xa-cha-ri", chapters: 14 },
  { name: "Ma-la-chi", chapters: 4 }
];

const BOOKS_NEW = [
  { name: "Ma-thi-ơ", chapters: 28 }, { name: "Mác", chapters: 16 },
  { name: "Lu-ca", chapters: 24 }, { name: "Giăng", chapters: 21 },
  { name: "Công-vụ các Sứ-đồ", chapters: 28 }, { name: "Rô-ma", chapters: 16 },
  { name: "1 Cô-rinh-tô", chapters: 16 }, { name: "2 Cô-rinh-tô", chapters: 13 },
  { name: "Ga-la-ti", chapters: 6 }, { name: "Ê-phê-sô", chapters: 6 },
  { name: "Phi-líp", chapters: 4 }, { name: "Cô-lô-se", chapters: 4 },
  { name: "1 Tê-sa-lô-ni-ca", chapters: 5 }, { name: "2 Tê-sa-lô-ni-ca", chapters: 3 },
  { name: "1 Ti-mô-thê", chapters: 6 }, { name: "2 Ti-mô-thê", chapters: 4 },
  { name: "Tít", chapters: 3 }, { name: "Phi-lê-môn", chapters: 1 },
  { name: "Hê-bơ-rơ", chapters: 13 }, { name: "Gia-cơ", chapters: 5 },
  { name: "1 Phi-e-rơ", chapters: 5 }, { name: "2 Phi-e-rơ", chapters: 3 },
  { name: "1 Giăng", chapters: 5 }, { name: "2 Giăng", chapters: 1 },
  { name: "3 Giăng", chapters: 1 }, { name: "Giu-đơ", chapters: 1 },
  { name: "Khải-huyền", chapters: 22 }
];

// Hàm sinh tự động danh sách 365 Ngày Đọc trọn vẹn Kinh Thánh
const generate365Plan = () => {
  const plan = [];
  let oldBookIdx = 0, oldCap = 1;
  let newBookIdx = 0, newCap = 1;

  for (let d = 1; d <= 365; d++) {
    const month = Math.ceil(d / 30.5);

    // Get Old Testament passage (approx 2-3 chapters)
    const oldBook = BOOKS_OLD[oldBookIdx] || BOOKS_OLD[0];
    const oldStart = oldCap;
    let oldEnd = oldCap + 2;
    if (oldEnd > oldBook.chapters) oldEnd = oldBook.chapters;
    oldCap = oldEnd + 1;
    if (oldCap > oldBook.chapters) {
      oldBookIdx = (oldBookIdx + 1) % BOOKS_OLD.length;
      oldCap = 1;
    }

    // Get New Testament passage (approx 1 chapter)
    const newBook = BOOKS_NEW[newBookIdx] || BOOKS_NEW[0];
    const newStart = newCap;
    newCap++;
    if (newCap > newBook.chapters) {
      newBookIdx = (newBookIdx + 1) % BOOKS_NEW.length;
      newCap = 1;
    }

    plan.push({
      day: d,
      month: month > 12 ? 12 : month,
      title: `Ngày ${d}: ${oldBook.name} & ${newBook.name}`,
      oldTestament: `${oldBook.name} ${oldStart}${oldEnd > oldStart ? ' - ' + oldEnd : ''}`,
      newTestament: `${newBook.name} ${newStart}`,
      psalmProverb: `Thi-thiên ${(d % 150) + 1}`,
      theme: `Mối liên kết giữa lời tiên tri Cựu Ước (${oldBook.name}) & Sự làm trọn trong Tân Ước (${newBook.name}).`,
      explanation: `Học Lời Chúa mỗi ngày giúp bạn hiểu được kế hoạch cứu rỗi vĩ đại của Ngài từ Sáng-thế-ký đến Khải-huyền.`
    });
  }
  return plan;
};

export const BIBLE_PLAN_365 = generate365Plan();
