// ========================================================
// LỘ TRÌNH 12 THÁNG ĐỌC KINH THÁNH (BẢN DỊCH PHAN KHÔI 1925)
// CHUẨN NỘI DUNG VÀ QUAN ĐIỂM HỘI HÁNH ĐỨC CHÚA TRỜI (WATV.ORG)
// ========================================================

const WATV_12_MONTHS_PLAN = [
  {
    month: 1,
    title: "Tháng 1: Đức Chúa Trời Elohim, Ngày Sa-bát & Lễ Vượt Qua Giao Ước Mới",
    books: "Sáng-thế-ký, Ma-thi-ơ, Giăng, 1-2-3 Giăng",
    totalChapters: 106,
    totalDays: 30,
    overview: "Khởi đầu lịch sử sáng tạo với Đức Chúa Trời Elohim (\"Chúng ta\"), ngày Sa-bát thánh thứ Bảy, bí mật Cây Sự Sống trong vườn Ê-đen và Đức Chúa Giê-xu ban sự sống đời đời qua Lễ Vượt Qua Giao Ước Mới.",
    coreDoc: [
      "Sáng-thế-ký 1:26-27: Đức Chúa Trời phán \"Chúng ta hãy làm nên loài người như hình ta và theo tượng ta\", loài người được dựng nên theo hình ảnh của Đức Chúa Trời -> Khẳng định sự hiện hữu của Đức Chúa Trời Cha và Đức Chúa Trời Mẹ (Elohim).",
      "Sáng-thế-ký 2:1-3: Biệt riêng ngày thứ bảy làm Ngày Sa-bát là ngày thánh để tưởng nhớ Đấng Sáng Tạo.",
      "Giăng 6:53-54 & Ma-thi-ơ 26:17-28: Kẻ phạm tội bị chặn đường đến Cây Sự Sống (Sáng 3:22). Đức Chúa Giê-xu đến ban Thịt và Huyết Ngài qua Bánh và Rượu Nho Lễ Vượt Qua Giao Ước Mới làm thực thể chính Cây Sự Sống để tái sinh sự sống đời đời."
    ],
    foundationVerses: [
      { ref: "Sáng-thế-ký 1:26-27", text: "Đức Chúa Trời phán rằng: Chúng ta hãy làm nên loài người như hình ta và theo tượng ta... Đức Chúa Trời dựng nên loài người như hình Ngài: Ngài dựng nên loài người nam cùng loài người nữ." },
      { ref: "Sáng-thế-ký 2:1-3", text: "Đức Chúa Trời ban phước cho ngày thứ bảy, đặt là ngày thánh; vì trong ngày đó, Ngài nghỉ các công việc đã dựng nên và làm xong rồi." },
      { ref: "Ma-thi-ơ 26:26-28", text: "Đức Chúa Giê-xu lấy bánh, chúc phước, bẻ ra đưa cho môn đồ mà phán rằng: Hãy lấy ăn đi, nầy là thân thể ta. Ngài lại lấy chén, tạ ơn, đưa cho môn đồ mà phán rằng: Hết thảy hãy uống đi; vì nầy là huyết ta, huyết của sự giao ước đã đổ ra cho nhiều người được tha tội." },
      { ref: "Giăng 6:53-54", text: "Đức Chúa Giê-xu phán rằng: Quả thật, quả thật, ta nói cùng các ngươi, nếu các ngươi không ăn thịt của Con người, cùng không uống huyết Ngài, thì chẳng có sự sống trong các ngươi đâu. Ai ăn thịt và uống huyết ta thì được sự sống đời đời..." }
    ],
    schedule: [
      { day: 1, passage: "Sáng-thế-ký 1–3 & Ma-thi-ơ 1" },
      { day: 2, passage: "Sáng-thế-ký 4–7 & Ma-thi-ơ 2" },
      { day: 3, passage: "Sáng-thế-ký 8–11 & Ma-thi-ơ 3" },
      { day: 4, passage: "Sáng-thế-ký 12–15 & Ma-thi-ơ 4" },
      { day: 5, passage: "Sáng-thế-ký 16–18 & Ma-thi-ơ 5" },
      { day: 6, passage: "Sáng-thế-ký 19–21 & Ma-thi-ơ 6" },
      { day: 7, passage: "Sáng-thế-ký 22–24 & Ma-thi-ơ 7" },
      { day: 8, passage: "Sáng-thế-ký 25–27 & Ma-thi-ơ 8" },
      { day: 9, passage: "Sáng-thế-ký 28–30 & Ma-thi-ơ 9" },
      { day: 10, passage: "Sáng-thế-ký 31–33 & Ma-thi-ơ 10" },
      { day: 11, passage: "Sáng-thế-ký 34–36 & Ma-thi-ơ 11" },
      { day: 12, passage: "Sáng-thế-ký 37–39 & Ma-thi-ơ 12" },
      { day: 13, passage: "Sáng-thế-ký 40–42 & Ma-thi-ơ 13" },
      { day: 14, passage: "Sáng-thế-ký 43–45 & Ma-thi-ơ 14" },
      { day: 15, passage: "Sáng-thế-ký 46–48 & Ma-thi-ơ 15" },
      { day: 16, passage: "Sáng-thế-ký 49–50 & Ma-thi-ơ 16" },
      { day: 17, passage: "Ma-thi-ơ 17–20" },
      { day: 18, passage: "Ma-thi-ơ 21–24" },
      { day: 19, passage: "Ma-thi-ơ 25–28" },
      { day: 20, passage: "Giăng 1–3" },
      { day: 21, passage: "Giăng 4–6" },
      { day: 22, passage: "Giăng 7–9" },
      { day: 23, passage: "Giăng 10–12" },
      { day: 24, passage: "Giăng 13–15" },
      { day: 25, passage: "Giăng 16–18" },
      { day: 26, passage: "Giăng 19–21" },
      { day: 27, passage: "1 Giăng 1–2" },
      { day: 28, passage: "1 Giăng 3–4" },
      { day: 29, passage: "1 Giăng 5" },
      { day: 30, passage: "2 Giăng 1 & 3 Giăng 1" }
    ]
  },
  {
    month: 2,
    title: "Tháng 2: Lễ Vượt Qua Giải Thoát, 3 Kỳ 7 Lễ Trọng Thể & Thầy Tế Lễ Mên-chi-xê-đéc",
    books: "Xuất Ê-đíp-tô Ký, Lê-vi Ký, Mác, Hê-bơ-rơ",
    totalChapters: 96,
    totalDays: 30,
    overview: "Giải phóng khỏi tai ương, tai vạ nhờ Huyết Chiên Con Lễ Vượt Qua, luật cấm tuyệt đối thờ hình tượng (như thập tự giá), quy chế 3 kỳ 7 Lễ Trọng Thể và Đức Chúa Jesus Christ đã lập nên ban Mên-chi-xê-đéc.",
    coreDoc: [
      "Xuất Ê-đíp-tô Ký 12: Lễ Vượt Qua là dấu hiệu duy nhất để tai nạn diệt trừ vượt qua khỏi dân sự.",
      "Xuất Ê-đíp-tô Ký 20:4-5: Điều răn thứ hai cấm tuyệt đối làm và tôn thờ hình tượng (thập tự giá vốn là công cụ xử tử của La Mã cổ đại, việc dựng và thờ thập tự giá là thờ ngẫu tượng).",
      "Lê-vi Ký 23: Quy định 3 Kỳ 7 Lễ Trọng Thể đời đời của Đức Chúa Trời.",
      "Hê-bơ-rơ 5, 7, 8: Đức Chúa Giê-xu là Thầy Tế Lễ Thượng Phẩm theo ban Mên-chi-xê-đéc dùng Bánh và Rượu Nho Lễ Vượt Qua ban sự sống đời đời và lập Giao Ước Mới."
    ],
    foundationVerses: [
      { ref: "Xuất Ê-đíp-tô Ký 12:13-14", text: "Huyết đó sẽ dùng làm dấu hiệu nơi các nhà các ngươi ở. Khi Ta thấy huyết đó, thì sẽ vượt qua khỏi các ngươi... Các ngươi hãy kỷ niệm ngày đó... như một lễ đời đời." },
      { ref: "Xuất Ê-đíp-tô Ký 20:4-5", text: "Ngươi chớ làm tượng chạm cho mình, cũng chớ làm tượng nào giống những vật trên trời cao kia, hoặc nơi đất thấp nầy... Ngươi chớ quì lạy trước các hình tượng đó, và cũng chớ hầu việc chúng nó." },
      { ref: "Lê-vi Ký 23:2, 4", text: "Hãy truyền cho dân Y-sơ-ra-ên rằng: Nầy là những ngày lễ của Đức Giê-hô-va các ngươi hãy rao truyền ra là các hội thánh... Nầy là những lễ của Đức Giê-hô-va, tức những sự nhóm hiệp thánh, các ngươi phải rao truyền ra khi đến kỳ nhứt định." },
      { ref: "Hê-bơ-rơ 7:17, 8:8", text: "Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc... Nầy, những ngày đến, Ta sẽ lập một giao ước mới với nhà Y-sơ-ra-ên và với nhà Giu-đa." }
    ],
    schedule: [
      { day: 1, passage: "Xuất Ê-đíp-tô Ký 1–4" },
      { day: 2, passage: "Xuất Ê-đíp-tô Ký 5–8" },
      { day: 3, passage: "Xuất Ê-đíp-tô Ký 9–11" },
      { day: 4, passage: "Xuất Ê-đíp-tô Ký 12–14" },
      { day: 5, passage: "Xuất Ê-đíp-tô Ký 15–17" },
      { day: 6, passage: "Xuất Ê-đíp-tô Ký 18–20" },
      { day: 7, passage: "Xuất Ê-đíp-tô Ký 21–24" },
      { day: 8, passage: "Xuất Ê-đíp-tô Ký 25–27" },
      { day: 9, passage: "Xuất Ê-đíp-tô Ký 28–30" },
      { day: 10, passage: "Xuất Ê-đíp-tô Ký 31–34" },
      { day: 11, passage: "Xuất Ê-đíp-tô Ký 35–37" },
      { day: 12, passage: "Xuất Ê-đíp-tô Ký 38–40" },
      { day: 13, passage: "Lê-vi Ký 1–4" },
      { day: 14, passage: "Lê-vi Ký 5–7" },
      { day: 15, passage: "Lê-vi Ký 8–10" },
      { day: 16, passage: "Lê-vi Ký 11–13" },
      { day: 17, passage: "Lê-vi Ký 14–16" },
      { day: 18, passage: "Lê-vi Ký 17–20" },
      { day: 19, passage: "Lê-vi Ký 21–23" },
      { day: 20, passage: "Lê-vi Ký 24–27" },
      { day: 21, passage: "Mác 1–3" },
      { day: 22, passage: "Mác 4–6" },
      { day: 23, passage: "Mác 7–9" },
      { day: 24, passage: "Mác 10–12" },
      { day: 25, passage: "Mác 13–16" },
      { day: 26, passage: "Hê-bơ-rơ 1–3" },
      { day: 27, passage: "Hê-bơ-rơ 4–6" },
      { day: 28, passage: "Hê-bơ-rơ 7–9" },
      { day: 29, passage: "Hê-bơ-rơ 10–11" },
      { day: 30, passage: "Hê-bơ-rơ 12–13" }
    ]
  },
  {
    month: 3,
    title: "Tháng 3: Hành Trình Luyện Rèn Đức Tin & Thói Quen Giữ Ngày Sa-bát",
    books: "Dân-số-ký, Phục-truyền Luật-lệ Ký, Lu-ca",
    totalChapters: 94,
    totalDays: 27,
    overview: "Sự thử thách đức tin 40 năm trong đồng vắng, quy định Lễ Vượt Qua tháng thứ hai, lời dặn dò vâng giữ điều răn và thói quen giữ ngày Sa-bát của Đức Chúa Giê-xu.",
    coreDoc: [
      "Dân-số-ký 9: Tình yêu thương của Đức Chúa Trời ban cơ hội giữ Lễ Vượt Qua tháng thứ hai (ngày 14 tháng 2 thánh lịch) cho người lỡ kỳ.",
      "Dân-số-ký 21 & 2 Các Vua 18:4: Việc nhìn con rắn đồng được cứu là nhờ Lời phán của Đức Chúa Trời chứ không phải quyền phép của con rắn; sau này dân chúng đem con rắn đồng ra thờ lạy nên vua Ê-xê-chia đã đập nát (bài học cảnh tỉnh việc sùng kính thập tự giá).",
      "Lu-ca 4:16: Đức Chúa Giê-xu vào nhà hội giữ ngày Sa-bát thứ Bảy theo thói quen Ngài thường làm.",
      "Lu-ca 22:15-20: Đức Chúa Giê-xu phán \"Ta rất muốn ăn Lễ Vượt Qua này\" để lập Giao Ước Mới trong Huyết Ngài."
    ],
    foundationVerses: [
      { ref: "Phục-truyền 6:4-5", text: "Hỡi Y-sơ-ra-ên! Hãy nghe: Giê-hô-va Đức Chúa Trời chúng ta là Giê-hô-va có một không hai. Ngươi phải hết lòng, hết linh hồn, hết sức mà kính mến Giê-hô-va Đức Chúa Trời ngươi." },
      { ref: "Lu-ca 4:16", text: "Đức Chúa Giê-xu đến thành Na-xa-rét... theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát, đứng dậy để đọc." },
      { ref: "Lu-ca 22:15, 20", text: "Ngài phán rằng: Ta rất muốn ăn lễ Vượt Qua nầy với các ngươi trước khi ta chịu đau đớn... Chén nầy là giao ước mới trong huyết ta vì các ngươi mà đổ ra." }
    ],
    schedule: [
      { day: 1, passage: "Dân-số-ký 1–4" },
      { day: 2, passage: "Dân-số-ký 5–8" },
      { day: 3, passage: "Dân-số-ký 9–12" },
      { day: 4, passage: "Dân-số-ký 13–16" },
      { day: 5, passage: "Dân-số-ký 17–20" },
      { day: 6, passage: "Dân-số-ký 21–24" },
      { day: 7, passage: "Dân-số-ký 25–28" },
      { day: 8, passage: "Dân-số-ký 29–32" },
      { day: 9, passage: "Dân-số-ký 33–36" },
      { day: 10, passage: "Phục-truyền 1–4" },
      { day: 11, passage: "Phục-truyền 5–8" },
      { day: 12, passage: "Phục-truyền 9–12" },
      { day: 13, passage: "Phục-truyền 13–16" },
      { day: 14, passage: "Phục-truyền 17–20" },
      { day: 15, passage: "Phục-truyền 21–25" },
      { day: 16, passage: "Phục-truyền 26–28" },
      { day: 17, passage: "Phục-truyền 29–31" },
      { day: 18, passage: "Phục-truyền 32–34" },
      { day: 19, passage: "Lu-ca 1–2" },
      { day: 20, passage: "Lu-ca 3–5" },
      { day: 21, passage: "Lu-ca 6–8" },
      { day: 22, passage: "Lu-ca 9–11" },
      { day: 23, passage: "Lu-ca 12–14" },
      { day: 24, passage: "Lu-ca 15–17" },
      { day: 25, passage: "Lu-ca 18–20" },
      { day: 26, passage: "Lu-ca 21–22" },
      { day: 27, passage: "Lu-ca 23–24" }
    ]
  },
  {
    month: 4,
    title: "Tháng 4: Lễ Vượt Qua Chiếm Đất Hứa, Lễ Ngũ Tuần & Sự Sống Lại",
    books: "Giô-suê, Các Quan-xét, Ru-tơ, Công-vụ các Sứ-đồ, Rô-ma",
    totalChapters: 93,
    totalDays: 26,
    overview: "Giữ Lễ Vượt Qua trước khi công phá thành Giê-ri-cô, Đức Thánh Linh giáng xuống trong Lễ Ngũ Tuần, Sứ đồ Phao-lô giữ ngày Sa-bát theo thói quen và A-đam Ê-va là hình bóng của Đức Chúa Trời Cha & Đức Chúa Trời Mẹ.",
    coreDoc: [
      "Giô-suê 5:10: Dân sự giữ Lễ Vượt Qua tại đồng bằng Giê-ri-cô trước khi bức tường thành sụp đổ.",
      "Công-vụ 2:1-38: Đức Thánh Linh mưa đầu mùa giáng lâm vào Lễ Ngũ Tuần (ngày thứ 50 sau Lễ Phục Sinh).",
      "Công-vụ 17:2 & 18:4: Sứ đồ Phao-lô luôn giữ ngày Sa-bát theo thói quen của mình trong suốt hành trình truyền giáo.",
      "Rô-ma 5:14: A-đam là hình bóng của Đấng phải đến (Đức Chúa Trời Cha), ngụ ý vợ A-đam là Ê-va chính là hình bóng của Đức Chúa Trời Mẹ."
    ],
    foundationVerses: [
      { ref: "Giô-suê 5:10", text: "Dân Y-sơ-ra-ên đóng trại tại Ghinh-ganh, và giữ lễ Vượt-qua ngày mười mốn tháng nầy, vào lối chiều tối, tại trong đồng bằng Giê-ri-cô." },
      { ref: "Công-vụ 2:1, 38", text: "Đến ngày lễ Ngũ-tuần, môn-đồ nhóm họp tại một chỗ... Phi-e-rơ trả lời rằng: Hãy hối cải, ai nấy khá chịu phép báp-tem nhân danh Đức Chúa Giê-xu Đấng Christ, đặng được tha tội mình; rồi sẽ nhận lãnh sự ban cho Đức Thánh Linh." },
      { ref: "Công-vụ 17:2", text: "Phao-lô tới nơi họ, theo thói quen mình, và trong ba ngày Sa-bát biện luận với họ bằng Kinh Thánh." },
      { ref: "Rô-ma 5:14", text: "A-đam là hình bóng của Đấng phải đến." }
    ],
    schedule: [
      { day: 1, passage: "Giô-suê 1–4" },
      { day: 2, passage: "Giô-suê 5–8" },
      { day: 3, passage: "Giô-suê 9–12" },
      { day: 4, passage: "Giô-suê 13–17" },
      { day: 5, passage: "Giô-suê 18–21" },
      { day: 6, passage: "Giô-suê 22–24" },
      { day: 7, passage: "Các Quan-xét 1–5" },
      { day: 8, passage: "Các Quan-xét 6–9" },
      { day: 9, passage: "Các Quan-xét 10–14" },
      { day: 10, passage: "Các Quan-xét 15–18" },
      { day: 11, passage: "Các Quan-xét 19–21" },
      { day: 12, passage: "Ru-tơ 1–4" },
      { day: 13, passage: "Công-vụ 1–3" },
      { day: 14, passage: "Công-vụ 4–6" },
      { day: 15, passage: "Công-vụ 7–9" },
      { day: 16, passage: "Công-vụ 10–12" },
      { day: 17, passage: "Công-vụ 13–15" },
      { day: 18, passage: "Công-vụ 16–18" },
      { day: 19, passage: "Công-vụ 19–21" },
      { day: 20, passage: "Công-vụ 22–25" },
      { day: 21, passage: "Công-vụ 26–28" },
      { day: 22, passage: "Rô-ma 1–3" },
      { day: 23, passage: "Rô-ma 4–6" },
      { day: 24, passage: "Rô-ma 7–9" },
      { day: 25, passage: "Rô-ma 10–12" },
      { day: 26, passage: "Rô-ma 13–16" }
    ]
  },
  {
    month: 5,
    title: "Tháng 5: Đức Chúa Trời Mẹ Giê-ru-sa-lem, Luật Khăn Trùm Đầu & Lễ Vượt Qua",
    books: "1-2 Sa-mu-ên, 1 Các Vua, 1-2 Cô-rinh-tô, Ga-la-ti",
    totalChapters: 112,
    totalDays: 27,
    overview: "Sự thiết lập vương triều Đa-vít tại Si-ôn, Lễ Vượt Qua Giao Ước Mới trong 1 Cô-rinh-tô 11, Luật Khăn Trùm Đầu cho nữ tín đồ và lẽ thật tối thượng về Đức Chúa Trời Mẹ Giê-ru-sa-lem trên trời trong Ga-la-ti 4:26.",
    coreDoc: [
      "1 Cô-rinh-tô 11:1-16: Quy định Luật Đội Khăn Trùm Đầu theo trật tự sáng tạo của Đức Chúa Trời: Nữ tín đồ đội khăn khi cầu nguyện và thờ phượng; nam giới không đội khăn.",
      "1 Cô-rinh-tô 5:7-8 & 11:23-26: Mạng lệnh giữ Lễ Vượt Qua Giao Ước Mới bằng Bánh và Rượu Nho để rao truyền sự chết của Chúa cho tới khi Ngài đến.",
      "Ga-la-ti 4:26, 28: Tuyên bố lẽ thật: \"Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta\". Chúng ta là con cái của lời hứa như Y-sác được sinh ra bởi Mẹ Tự Do."
    ],
    foundationVerses: [
      { ref: "1 Cô-rinh-tô 11:5, 7", text: "Người đàn bà nào cầu nguyện hoặc nói tiên tri mà không trùm đầu lại, thì làm nhục đầu mình... Người đàn ông không nên trùm đầu, vì là hình ảnh và sự vinh hiển của Đức Chúa Trời; nhưng người đàn bà là sự vinh hiển của người đàn ông." },
      { ref: "1 Cô-rinh-tô 5:7-8", text: "Vì Đấng Christ là con sinh lễ Vượt-qua của chúng ta, đã bị hi sinh rồi. Vậy thì, chúng ta hãy giữ lễ..." },
      { ref: "Ga-la-ti 4:26, 28", text: "Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta... Hỡi anh em, về phần chúng ta, chúng ta cũng như Y-sác, là con của lời hứa." },
      { ref: "2 Cô-rinh-tô 3:6", text: "Ngài đã ban cho chúng tôi đủ tài năng đặng làm chức việc của Giao Ước Mới..." }
    ],
    schedule: [
      { day: 1, passage: "1 Sa-mu-ên 1–4" },
      { day: 2, passage: "1 Sa-mu-ên 5–8" },
      { day: 3, passage: "1 Sa-mu-ên 9–12" },
      { day: 4, passage: "1 Sa-mu-ên 13–16" },
      { day: 5, passage: "1 Sa-mu-ên 17–20" },
      { day: 6, passage: "1 Sa-mu-ên 21–25" },
      { day: 7, passage: "1 Sa-mu-ên 26–31" },
      { day: 8, passage: "2 Sa-mu-ên 1–5" },
      { day: 9, passage: "2 Sa-mu-ên 6–9" },
      { day: 10, passage: "2 Sa-mu-ên 10–14" },
      { day: 11, passage: "2 Sa-mu-ên 15–18" },
      { day: 12, passage: "2 Sa-mu-ên 19–24" },
      { day: 13, passage: "1 Các Vua 1–4" },
      { day: 14, passage: "1 Các Vua 5–8" },
      { day: 15, passage: "1 Các Vua 9–12" },
      { day: 16, passage: "1 Các Vua 13–16" },
      { day: 17, passage: "1 Các Vua 17–19" },
      { day: 18, passage: "1 Các Vua 20–22" },
      { day: 19, passage: "1 Cô-rinh-tô 1–4" },
      { day: 20, passage: "1 Cô-rinh-tô 5–8" },
      { day: 21, passage: "1 Cô-rinh-tô 9–12" },
      { day: 22, passage: "1 Cô-rinh-tô 13–16" },
      { day: 23, passage: "2 Cô-rinh-tô 1–4" },
      { day: 24, passage: "2 Cô-rinh-tô 5–8" },
      { day: 25, passage: "2 Cô-rinh-tô 9–13" },
      { day: 26, passage: "Ga-la-ti 1–3" },
      { day: 27, passage: "Ga-la-ti 4–6" }
    ]
  },
  {
    month: 6,
    title: "Tháng 6: Lễ Vượt Qua Phá Thần Tượng (Ê-xê-chia & Giô-si-a) & Thư Tín Ngục Tù",
    books: "2 Các Vua, 1-2 Sử-ký, Ê-phê-sô, Phi-líp, Cô-lô-se",
    totalChapters: 104,
    totalDays: 24,
    overview: "Vua Ê-xê-chia đập nát con rắn đồng Nê-hu-sơ-tan và cùng vua Giô-si-a phục hưng dân sự nhờ Lễ Vượt Qua; các thư tín ngục tù về sự tha tội nhờ Huyết Lễ Vượt Qua trong Đấng Christ.",
    coreDoc: [
      "2 Các Vua 18:4: Vua Ê-xê-chia đập nát con rắn đồng vì dân chúng xông hương thờ lạy nó (gọi là Nê-hu-sơ-tan) -> Minh chứng sùng bái thập tự giá ngày nay cũng là thờ hình tượng phạm tội lớn trước Đức Chúa Trời.",
      "2 Sử-ký 30 & 2 Các Vua 23: Khi dân sự trở lại giữ Lễ Vượt Qua, mọi thần tượng bị triệt hạ và Đức Chúa Trời ban sự che chở kỳ diệu.",
      "Ê-phê-sô 1:7: Sự tha tội và cứu chuộc nhận được nhờ Huyết Lễ Vượt Qua của Đấng Christ."
    ],
    foundationVerses: [
      { ref: "2 Các Vua 18:4", text: "Người phá hủy các nơi cao, bẻ gãy các trụ thờ, đốn các hình tượng A-sê-ra, và đập nát con rắn đồng mà Môi-se đã làm; vì cho đến ngày đó, dân Y-sơ-ra-ên xông hương cho nó; người ta gọi nó là Nê-hu-sơ-tan." },
      { ref: "2 Sử-ký 30:1, 5", text: "Ê-xê-chia sai sứ truyền cho cả Y-sơ-ra-ên và Giu-đa... hãy đến đền của Đức Giê-hô-va tại Giê-ru-sa-lem đặng dự lễ Vượt-qua cho Giê-hô-va Đức Chúa Trời của Y-sơ-ra-ên." },
      { ref: "Ê-phê-sô 1:7", text: "Ấy là trong Đấng Christ, chúng ta được sự cứu chuộc bởi huyết Ngài, được tha tội, theo sự dư dật của ân điển Ngài." },
      { ref: "Cô-lô-se 2:16-17", text: "Vì vậy, chớ có ai đoán xét anh em về của ăn uống, hoặc ngày lễ, hoặc ngày mồng một, hoặc ngày Sa-bát: ấy đều là bóng của những việc sẽ tới, mà thân thể thì thuộc về Đấng Christ." }
    ],
    schedule: [
      { day: 1, passage: "2 Các Vua 1–4" },
      { day: 2, passage: "2 Các Vua 5–8" },
      { day: 3, passage: "2 Các Vua 9–12" },
      { day: 4, passage: "2 Các Vua 13–17" },
      { day: 5, passage: "2 Các Vua 18–21" },
      { day: 6, passage: "2 Các Vua 22–25" },
      { day: 7, passage: "1 Sử-ký 1–4" },
      { day: 8, passage: "1 Sử-ký 5–9" },
      { day: 9, passage: "1 Sử-ký 10–14" },
      { day: 10, passage: "1 Sử-ký 15–18" },
      { day: 11, passage: "1 Sử-ký 19–23" },
      { day: 12, passage: "1 Sử-ký 24–29" },
      { day: 13, passage: "2 Sử-ký 1–5" },
      { day: 14, passage: "2 Sử-ký 6–9" },
      { day: 15, passage: "2 Sử-ký 10–15" },
      { day: 16, passage: "2 Sử-ký 16–20" },
      { day: 17, passage: "2 Sử-ký 21–25" },
      { day: 18, passage: "2 Sử-ký 26–30" },
      { day: 19, passage: "2 Sử-ký 31–36" },
      { day: 20, passage: "Ê-phê-sô 1–3" },
      { day: 21, passage: "Ê-phê-sô 4–6" },
      { day: 22, passage: "Phi-líp 1–2" },
      { day: 23, passage: "Phi-líp 3–4" },
      { day: 24, passage: "Cô-lô-se 1–4" }
    ]
  },
  {
    month: 7,
    title: "Tháng 7: Tái Thiết Si-ôn, Lễ Lều Tạm & Cảnh Báo Kẻ Gian Ác Đổi Luật Pháp",
    books: "Ê-xơ-ra, Nê-hê-mi, Ê-xơ-thê, Gióp, 1-2 Tê-sa-lô-ni-ca, 1-2 Ti-mô-thê, Tít, Phi-lê-môn",
    totalChapters: 97,
    totalDays: 19,
    overview: "Dân sự trở về tái thiết Đền Thờ, giữ Lễ Vượt Qua và Lễ Lều Tạm, đức tin kiên định của Gióp và lời cảnh báo về Kẻ gian ác bội đạo bỏ luật pháp trong 2 Tê-sa-lô-ni-ca.",
    coreDoc: [
      "Ê-xơ-ra 6:19-22: Dân sự trở về từ Ba-by-lôn liền giữ Lễ Vượt Qua và Lễ Bánh Không Men trong sự vui vẻ lớn.",
      "Nê-hê-mi 8 & 13: Phục hồi Lễ Lều Tạm và lập lại giao ước giữ ngày Sa-bát thánh.",
      "2 Tê-sa-lô-ni-ca 2:3-4: Cảnh báo về \"người gian ác, con của sự hư mất\" ngồi trong đền thờ tự tôn xưng là Đức Chúa Trời -> Tiên tri về việc quyền lực La Mã bãi bỏ Lễ Vượt Qua và đổi ngày Sa-bát sang ngày Mặt Trời (Chủ Nhật)."
    ],
    foundationVerses: [
      { ref: "Ê-xơ-ra 6:19, 22", text: "Những người bị lưu-đày đã trở về, bèn giữ lễ Vượt-qua trong ngày mười bốn tháng giêng... lại giữ lễ Bánh-không-men trong bảy ngày cách vui-vẻ." },
      { ref: "2 Tê-sa-lô-ni-ca 2:3-4", text: "Mặc dầu cách nào, chớ để ai lừa dối mình; vì phải có sự bội đạo đến trước, và có người gian ác, con của sự hư mất hiện ra, tức là kẻ đối địch, tôn mình lên trên mọi sự người ta xưng là Đức Chúa Trời." },
      { ref: "2 Ti-mô-thê 3:16-17", text: "Cả Kinh Thánh đều là bởi Đức Chúa Trời soi dẫn, có ích cho sự dạy dỗ, bẻ trách, sửa trị, dạy người trong sự công bình." }
    ],
    schedule: [
      { day: 1, passage: "Ê-xơ-ra 1–5" },
      { day: 2, passage: "Ê-xơ-ra 6–10" },
      { day: 3, passage: "Nê-hê-mi 1–4" },
      { day: 4, passage: "Nê-hê-mi 5–8" },
      { day: 5, passage: "Nê-hê-mi 9–13" },
      { day: 6, passage: "Ê-xơ-thê 1–5" },
      { day: 7, passage: "Ê-xơ-thê 6–10" },
      { day: 8, passage: "Gióp 1–5" },
      { day: 9, passage: "Gióp 6–12" },
      { day: 10, passage: "Gióp 13–19" },
      { day: 11, passage: "Gióp 20–27" },
      { day: 12, passage: "Gióp 28–34" },
      { day: 13, passage: "Gióp 35–42" },
      { day: 14, passage: "1 Tê-sa-lô-ni-ca 1–5" },
      { day: 15, passage: "2 Tê-sa-lô-ni-ca 1–3" },
      { day: 16, passage: "1 Ti-mô-thê 1–3" },
      { day: 17, passage: "1 Ti-mô-thê 4–6" },
      { day: 18, passage: "2 Ti-mô-thê 1–4" },
      { day: 19, passage: "Tít 1–3 & Phi-lê-môn 1" }
    ]
  },
  {
    month: 8,
    title: "Tháng 8: Si-ôn Nơi Ban Sự Sống Đời Đời & Thầy Tế Lễ Mên-chi-xê-đéc",
    books: "Thi-thiên (Bài 1 đến Bài 100), Gia-cơ, 1-2 Phi-e-rơ",
    totalChapters: 113,
    totalDays: 15,
    overview: "Si-ôn là nơi Đức Chúa Trời chọn ngự và ban phước sự sống đời đời (Thi-thiên 133), Đấng Mê-si theo ban Mên-chi-xê-đéc và đức tin sống động có việc làm vâng giữ điều răn luật pháp Đức Chúa Trời.",
    coreDoc: [
      "Thi-thiên 132 & 133:3: Si-ôn là nơi Đức Chúa Trời ban phước sự sống chẳng hề cùng cho đến đời đời.",
      "Thi-thiên 110:4: Đấng Mê-si được lập làm Thầy Tế Lễ đời đời theo ban Mên-chi-xê-đéc (dâng Bánh và Rượu Nho Lễ Vượt Qua).",
      "Gia-cơ 2:26: Xác chẳng có hồn thì chết, đức tin không có việc làm vâng giữ điều răn cũng chết như vậy.",
      "1 Phi-e-rơ 1:18-19: Được chuộc bởi Huyết báu Chiên Con Lễ Vượt Qua của Đức Chúa Jesus Christ."
    ],
    foundationVerses: [
      { ref: "Thi-thiên 133:3", text: "Tại đó Đức Giê-hô-va đã ban phước, tức là sự sống cho đến đời đời." },
      { ref: "Thi-thiên 110:4", text: "Đức Giê-hô-va đã thề, và không hề đổi ý, rằng: Ngươi là thầy tế lễ đời đời theo ban Mên-chi-xê-đéc." },
      { ref: "Gia-cơ 2:26", text: "Vả, xác chẳng có hồn thì chết, đức tin không có việc làm cũng chết như vậy." },
      { ref: "1 Phi-e-rơ 1:18-19", text: "Nhờ huyết báu Đấng Christ, dường như huyết chiên con không lỗi không vít, mà anh em đã được chuộc." }
    ],
    schedule: [
      { day: 1, passage: "Thi-thiên 1–10" },
      { day: 2, passage: "Thi-thiên 11–20" },
      { day: 3, passage: "Thi-thiên 21–30" },
      { day: 4, passage: "Thi-thiên 31–40" },
      { day: 5, passage: "Thi-thiên 41–50" },
      { day: 6, passage: "Thi-thiên 51–60" },
      { day: 7, passage: "Thi-thiên 61–70" },
      { day: 8, passage: "Thi-thiên 71–80" },
      { day: 9, passage: "Thi-thiên 81–90" },
      { day: 10, passage: "Thi-thiên 91–100" },
      { day: 11, passage: "Gia-cơ 1–2" },
      { day: 12, passage: "Gia-cơ 3–5" },
      { day: 13, passage: "1 Phi-e-rơ 1–3" },
      { day: 14, passage: "1 Phi-e-rơ 4–5 & 2 Phi-e-rơ 1" },
      { day: 15, passage: "2 Phi-e-rơ 2–3" }
    ]
  },
  {
    month: 9,
    title: "Tháng 9: Sự Khôn Ngoan Thiên Thượng, Tiệc Rượu Nho & Tình Yêu Nhã-ca",
    books: "Thi-thiên (Bài 101 đến Bài 150), Châm-ngôn, Truyền-đạo, Nhã-ca, Giu-đơ",
    totalChapters: 102,
    totalDays: 15,
    overview: "Ngợi khen Luật pháp và Giao Ước Mới (Thi-thiên 119), Sự Khôn Ngoan lên tiệc bánh và rượu nho (Châm-ngôn 9) và bài ca tình yêu thánh khiết giữa Đấng Chăn Chiên cùng Nàng Su-la-mít.",
    coreDoc: [
      "Châm-ngôn 9:1-5: Sự Khôn Ngoan (hình bóng Đức Chúa Trời Mẹ) xây nhà mình trên vầng đá, dự phần vào tiệc thánh Lễ Vượt Qua bởi bánh và rượu nho, mời những ai khao khát đến ăn bánh uống rượu để được sống.",
      "Thi-thiên 119: 176 câu ca ngợi luật pháp, chứng cớ và điều răn thánh khiết của Đức Chúa Trời.",
      "Truyền-đạo 12:13: Bổn phận trọn vẹn của con người là kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài.",
      "Nhã-ca: Tình yêu thương đời đời giữa Đức Chúa Trời Cha, Đức Chúa Trời Mẹ và các con cái linh hồn."
    ],
    foundationVerses: [
      { ref: "Châm-ngôn 9:1-2, 5", text: "Sự khôn ngoan đã xây cất nhà mình... đã dọn tiệc mình, pha rượu, và bày bàn mình... Hãy đến ăn bánh ta, và uống rượu ta đã pha." },
      { ref: "Thi-thiên 119:105", text: "Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi." },
      { ref: "Truyền-đạo 12:13", text: "Chúng ta hãy nghe lời kết của muôn sự: Khá kính sợ Đức Chúa Trời và giữ các điều răn Ngài; ấy là trọn phận sự của ngươi." }
    ],
    schedule: [
      { day: 1, passage: "Thi-thiên 101–110" },
      { day: 2, passage: "Thi-thiên 111–118" },
      { day: 3, passage: "Thi-thiên 119:1–88" },
      { day: 4, passage: "Thi-thiên 119:89–176" },
      { day: 5, passage: "Thi-thiên 120–135" },
      { day: 6, passage: "Thi-thiên 136–150" },
      { day: 7, passage: "Châm-ngôn 1–5" },
      { day: 8, passage: "Châm-ngôn 6–10" },
      { day: 9, passage: "Châm-ngôn 11–15" },
      { day: 10, passage: "Châm-ngôn 16–20" },
      { day: 11, passage: "Châm-ngôn 21–25" },
      { day: 12, passage: "Châm-ngôn 26–31" },
      { day: 13, passage: "Truyền-đạo 1–6" },
      { day: 14, passage: "Truyền-đạo 7–12" },
      { day: 15, passage: "Nhã-ca 1–8 & Giu-đơ 1" }
    ]
  },
  {
    month: 10,
    title: "Tháng 10: Tiên Tri Tiệc Rượu Nho Lâu Năm, Si-ôn Lễ Trọng & Giao Ước Mới",
    books: "Ê-sai, Giê-rê-mi (Chương 1 đến Chương 35)",
    totalChapters: 101,
    totalDays: 17,
    overview: "Tiên tri về Tiệc Rượu Nho Lâu Năm nuốt sự chết đời đời (Ê-sai 25:6-9), Si-ôn là thành của các kỳ lễ trọng thể (Ê-sai 33:20), Đức Chúa Trời Mẹ an ủi tại Giê-ru-sa-lem (Ê-sai 66) và lời hứa Giao Ước Mới (Giê-rê-mi 31).",
    coreDoc: [
      "Ê-sai 25:6-9: Lời tiên tri Đấng Cứu Chúa sẽ đãi muôn dân một bữa tiệc rượu nho lâu năm (Rượu Nho Lễ Vượt Qua Giao Ước Mới bị bãi bỏ 1600 năm được phục hồi) để thoát khỏi sự chết đến đời đời -> Đấng phục hồi Lễ Vượt Qua chính là Đức Chúa Trời chúng ta ngóng trông.",
      "Ê-sai 33:20: Si-ôn được định nghĩa chuẩn xác là nơi cử hành các kỳ lễ trọng thể của Đức Chúa Trời.",
      "Ê-sai 66:10-13: Lẽ thật về Đức Chúa Trời Mẹ an ủi con cái Ngài tại Giê-ru-sa-lem như mẹ an ủi con.",
      "Giê-rê-mi 31:31-34: Lời hứa Đức Chúa Trời lập Giao Ước Mới, khắc ghi luật pháp vào lòng để tha thứ tội lỗi."
    ],
    foundationVerses: [
      { ref: "Ê-sai 25:6, 8-9", text: "Đức Giê-hô-va vạn-quân sẽ đãi muôn dân... một tiệc rượu nho lâu năm... Ngài đã nuốt sự chết đến đời đời... Kìa, ấy là Đức Chúa Trời chúng ta; chúng ta đã ngóng trông Ngài, và Ngài sẽ cứu chúng ta." },
      { ref: "Ê-sai 33:20", text: "Hãy nhìn xem Si-ôn, là thành của các kỳ lễ trọng-thể chúng ta! Mắt ngươi sẽ thấy Giê-ru-sa-lem là nơi ở yên lặng." },
      { ref: "Giê-rê-mi 31:31, 33", text: "Đức Giê-hô-va phán: Nầy, những ngày đến, bấy giờ Ta sẽ lập một giao-ước mới... Ta sẽ đặt luật-pháp Ta trong bụng chúng nó và chép vào lòng." }
    ],
    schedule: [
      { day: 1, passage: "Ê-sai 1–6" },
      { day: 2, passage: "Ê-sai 7–12" },
      { day: 3, passage: "Ê-sai 13–20" },
      { day: 4, passage: "Ê-sai 21–27" },
      { day: 5, passage: "Ê-sai 28–35" },
      { day: 6, passage: "Ê-sai 36–39" },
      { day: 7, passage: "Ê-sai 40–44" },
      { day: 8, passage: "Ê-sai 45–48" },
      { day: 9, passage: "Ê-sai 49–53" },
      { day: 10, passage: "Ê-sai 54–59" },
      { day: 11, passage: "Ê-sai 60–66" },
      { day: 12, passage: "Giê-rê-mi 1–5" },
      { day: 13, passage: "Giê-rê-mi 6–10" },
      { day: 14, passage: "Giê-rê-mi 11–16" },
      { day: 15, passage: "Giê-rê-mi 17–22" },
      { day: 16, passage: "Giê-rê-mi 23–28" },
      { day: 17, passage: "Giê-rê-mi 29–35" }
    ]
  },
  {
    month: 11,
    title: "Tháng 11: Đổi Thời Kỳ Luật Pháp, Dấu Ấn Đức Chúa Trời & Nước Sự Sống",
    books: "Giê-rê-mi (Chương 36 đến 52), Ca-thương, Ê-zê-chi-ên, Đa-ni-ên",
    totalChapters: 82,
    totalDays: 17,
    overview: "Đa-ni-ên tiên tri kẻ thù toan định đổi thời kỳ và luật pháp (Đa-ni-ên 7:25), Dấu ấn thoát khỏi tai nạn hủy diệt (Ê-zê-chi-ên 9) và dòng sông Nước Sự Sống phát xuất từ Đền Thờ Giê-ru-sa-lem Mẹ.",
    coreDoc: [
      "Đa-ni-ên 7:25: Tiên tri vạch trần kẻ thù của Đức Chúa Trời sẽ đổi thời kỳ và luật pháp (đổi ngày Sa-bát thứ Bảy sang ngày Chủ Nhật, bãi bỏ Lễ Vượt Qua và các kỳ lễ trọng thể).",
      "Ê-zê-chi-ên 9:4: Dấu ấn ghi trên trán những người được bảo vệ thoát khỏi tai nạn diệt vong (hình bóng về Lễ Vượt Qua).",
      "Ê-zê-chi-ên 47:1-9: Dòng sông Nước Sự Sống tuôn chảy từ Đền Thờ Giê-ru-sa-lem làm cho biển mặn hóa ngọt và muôn vật sinh sống."
    ],
    foundationVerses: [
      { ref: "Đa-ni-ên 7:25", text: "Vua đó sẽ nói những lời phạm đến Đấng Rất Cao, làm hao mòn các thánh đồ của Đấng Rất Cao, và toan định đổi những thời kỳ và luật pháp." },
      { ref: "Ê-zê-chi-ên 9:4", text: "Hãy đi qua giữa thành... ghi một cái dấu trên trán những người than thở và khóc lóc vì mọi sự gớm ghiếc đã phạm giữa thành nầy." },
      { ref: "Ê-zê-chi-ên 47:9", text: "Hễ sông nầy chảy đến đâu, thì mọi sinh vật sinh sản ở đó đều sẽ được sống... vì nước nầy chảy đến đó thì nước biển trở nên ngọt, và muôn vật sẽ sống ở nơi nào sông ấy chảy đến." }
    ],
    schedule: [
      { day: 1, passage: "Giê-rê-mi 36–40" },
      { day: 2, passage: "Giê-rê-mi 41–47" },
      { day: 3, passage: "Giê-rê-mi 48–52" },
      { day: 4, passage: "Ca-thương 1–5" },
      { day: 5, passage: "Ê-zê-chi-ên 1–5" },
      { day: 6, passage: "Ê-zê-chi-ên 6–10" },
      { day: 7, passage: "Ê-zê-chi-ên 11–16" },
      { day: 8, passage: "Ê-zê-chi-ên 17–22" },
      { day: 9, passage: "Ê-zê-chi-ên 23–28" },
      { day: 10, passage: "Ê-zê-chi-ên 29–34" },
      { day: 11, passage: "Ê-zê-chi-ên 35–39" },
      { day: 12, passage: "Ê-zê-chi-ên 40–44" },
      { day: 13, passage: "Ê-zê-chi-ên 45–48" },
      { day: 14, passage: "Đa-ni-ên 1–3" },
      { day: 15, passage: "Đa-ni-ên 4–6" },
      { day: 16, passage: "Đa-ni-ên 7–9" },
      { day: 17, passage: "Đa-ni-ên 10–12" }
    ]
  },
  {
    month: 12,
    title: "Tháng 12: 12 Tiên Tri Nhỏ, Lễ Lều Tạm & Thánh Linh Cùng Vợ Mới Ban Nước Sự Sống",
    books: "12 Tiên Tri Nhỏ (Ô-sê đến Ma-la-chi), Khải-huyền",
    totalChapters: 89,
    totalDays: 17,
    overview: "Muôn dân đổ về Si-ôn học luật pháp (Mi-chê 4), giữ Lễ Lều Tạm nhận nước sự sống (Sa-cha-ri 14), Ấn Đức Chúa Trời (Khải-huyền 7), 144,000 người trên núi Si-ôn được cất lên khi còn sống (Khải-huyền 14) và Thánh Linh cùng Vợ Mới (Đức Chúa Trời Mẹ) ban Nước Sự Sống ở Khải-huyền 22:17.",
    coreDoc: [
      "Mi-chê 4:1-2: Tiên tri ngày sau rốt muôn dân đổ về Si-ôn để học luật pháp Giao Ước Mới của Đức Chúa Trời.",
      "Sa-cha-ri 14:16-19: Lệnh truyền giữ Lễ Lều Tạm hằng năm để đón nhận nước sự sống và mưa Thánh Linh.",
      "Khải-huyền 7:2-3: Ấn của Đức Chúa Trời Hằng Sống (Lễ Vượt Qua Giao Ước Mới) bảo vệ các tôi tớ khỏi 4 cơn gió - tức tai nạn hủy diệt.",
      "Khải-huyền 21:9-10 & 22:17: Vợ Mới của Chiên Con chính là Thành Thánh Giê-ru-sa-lem từ trên trời xuống (Đức Chúa Trời Mẹ - Ga-la-ti 4:26). Thánh Linh và Vợ Mới cùng kêu gọi nhân loại nhận lấy Nước Sự Sống cách nhưng không để bước vào sự sống đời đời."
    ],
    foundationVerses: [
      { ref: "Mi-chê 4:1-2", text: "Xảy ra trong những ngày sau-rốt... muôn dân sẽ chảy về đó... Hãy đến, chúng ta hãy lên núi Đức Giê-hô-va... Ngài sẽ dạy chúng ta về đường-lối Ngài, và chúng ta sẽ đi trong các nẻo Ngài. Vì luật-pháp sẽ ra từ Si-ôn." },
      { ref: "Sa-cha-ri 14:16-17", text: "Hết thảy những kẻ còn sót lại... sẽ lên đó hằng năm đặng thờ lạy Vua, tức là Đức Giê-hô-va vạn-quân, và giữ lễ Lều-tạm. Hễ ai... không lên Giê-ru-sa-lem đặng thờ lạy Vua... thì trên họ sẽ không có mưa." },
      { ref: "Khải-huyền 22:17", text: "Thánh Linh và Vợ Mới cùng nói: Hãy đến! Kẻ nào nghe cũng hãy nói: Hãy đến! Kẻ nào khát, khá đến. Kẻ nào muốn, khá nhận lấy nước sự sống cách nhưng không." }
    ],
    schedule: [
      { day: 1, passage: "Ô-sê 1–7" },
      { day: 2, passage: "Ô-sê 8–14" },
      { day: 3, passage: "Giô-ên 1–3" },
      { day: 4, passage: "A-mốt 1–5" },
      { day: 5, passage: "A-mốt 6–9 & Ô-ba-đi-a 1" },
      { day: 6, passage: "Giô-na 1–4" },
      { day: 7, passage: "Mi-chê 1–7" },
      { day: 8, passage: "Na-hum 1–3 & Ha-ba-cúc 1–3" },
      { day: 9, passage: "Sô-phô-ni 1–3 & Ha-gai 1–2" },
      { day: 10, passage: "Sa-cha-ri 1–7" },
      { day: 11, passage: "Sa-cha-ri 8–14" },
      { day: 12, passage: "Ma-la-chi 1–4" },
      { day: 13, passage: "Khải-huyền 1–3" },
      { day: 14, passage: "Khải-huyền 4–7" },
      { day: 15, passage: "Khải-huyền 8–12" },
      { day: 16, passage: "Khải-huyền 13–17" },
      { day: 17, passage: "Khải-huyền 18–22" }
    ]
  }
];

// ========================================================
// LỘ TRÌNH 1: TIẾN TRÌNH LỊCH SỬ & LỜI TIÊN TRI ỨNG NGHIỆM (CHRONOLOGICAL PLAN)
// (Sắp xếp các sách Cựu Ước & Tân Ước chuẩn xác theo thời gian xuất hiện & ứng nghiệm)
// ========================================================
const CHRONOLOGICAL_12_MONTHS_PLAN = [
  {
    month: 1,
    title: "Tháng 1: Khởi Đầu Sáng Tạo, Thời Đại Các Tổ Phụ & Đức Tin Thử Thách",
    books: "Sáng-thế-ký, Gióp",
    totalChapters: 92,
    totalDays: 30,
    overview: "Khởi đầu lịch sử sáng tạo vũ trụ loài người với Đức Chúa Trời Elohim, vườn Ê-đen, ngày Sa-bát thánh, tháp Ba-ben, cuộc đời các tổ phụ A-bra-ham, Y-sác, Gia-cốp, Giô-sép và đức tin thử thách kiên định của Gióp thời cổ đại.",
    coreDoc: [
      "Sáng-thế-ký 1:26-27: Khởi đầu công cuộc sáng tạo của Đức Chúa Trời Elohim ('Chúng ta').",
      "Sáng-thế-ký 2:1-3: Ban phước và đặt ngày thứ bảy làm Ngày Sa-bát thánh.",
      "Gióp 1 & 42: Bài học kiên trì đức tin vượt qua thử thách gian khổ."
    ],
    foundationVerses: [
      { ref: "Sáng-thế-ký 1:1", text: "Ban đầu Đức Chúa Trời dựng nên trời đất." },
      { ref: "Gióp 19:25", text: "Tôi biết rằng Đấng cứu chuộc tôi vẫn sống, đến ngày sau rốt Ngài sẽ đứng trên đất." }
    ],
    schedule: [
      { day: 1, passage: "Sáng-thế-ký 1–4" },
      { day: 2, passage: "Sáng-thế-ký 5–9" },
      { day: 3, passage: "Sáng-thế-ký 10–14" },
      { day: 4, passage: "Sáng-thế-ký 15–18" },
      { day: 5, passage: "Sáng-thế-ký 19–22" },
      { day: 6, passage: "Sáng-thế-ký 23–26" },
      { day: 7, passage: "Sáng-thế-ký 27–30" },
      { day: 8, passage: "Sáng-thế-ký 31–34" },
      { day: 9, passage: "Sáng-thế-ký 35–38" },
      { day: 10, passage: "Sáng-thế-ký 39–42" },
      { day: 11, passage: "Sáng-thế-ký 43–46" },
      { day: 12, passage: "Sáng-thế-ký 47–50" },
      { day: 13, passage: "Gióp 1–4" },
      { day: 14, passage: "Gióp 5–8" },
      { day: 15, passage: "Gióp 9–12" },
      { day: 16, passage: "Gióp 13–16" },
      { day: 17, passage: "Gióp 17–20" },
      { day: 18, passage: "Gióp 21–24" },
      { day: 19, passage: "Gióp 25–28" },
      { day: 20, passage: "Gióp 29–32" },
      { day: 21, passage: "Gióp 33–35" },
      { day: 22, passage: "Gióp 36–38" },
      { day: 23, passage: "Gióp 39–42" }
    ]
  },
  {
    month: 2,
    title: "Tháng 2: Lễ Vượt Qua Giải Thoát, Xuất Ai Cập & Luật Pháp Tại Núi Si-na-i",
    books: "Xuất Ê-đíp-tô Ký, Lê-vi Ký",
    totalChapters: 67,
    totalDays: 25,
    overview: "Cuộc giải phóng dân sự khỏi ách nô lệ nhờ Huyết Chiên Con Lễ Vượt Qua, nhận 10 Điều Răn tại núi Si-na-i, dựng Đền Tụ Hội và quy định 3 kỳ 7 lễ trọng thể.",
    coreDoc: [
      "Xuất Ê-đíp-tô Ký 12: Lễ Vượt Qua là dấu hiệu duy nhất để tai vạ diệt trừ vượt qua.",
      "Xuất Ê-đíp-tô Ký 20:4-5: Điều răn thứ hai cấm thờ ngẫu tượng và hình tượng.",
      "Lê-vi Ký 23: Quy chế 3 kỳ 7 Lễ Trọng Thể đời đời của Đức Chúa Trời."
    ],
    foundationVerses: [
      { ref: "Xuất Ê-đíp-tô Ký 12:14", text: "Các ngươi hãy kỷ niệm ngày đó... như một lễ đời đời." }
    ],
    schedule: [
      { day: 1, passage: "Xuất Ê-đíp-tô Ký 1–4" },
      { day: 2, passage: "Xuất Ê-đíp-tô Ký 5–8" },
      { day: 3, passage: "Xuất Ê-đíp-tô Ký 9–12" },
      { day: 4, passage: "Xuất Ê-đíp-tô Ký 13–16" },
      { day: 5, passage: "Xuất Ê-đíp-tô Ký 17–20" },
      { day: 6, passage: "Xuất Ê-đíp-tô Ký 21–24" },
      { day: 7, passage: "Xuất Ê-đíp-tô Ký 25–28" },
      { day: 8, passage: "Xuất Ê-đíp-tô Ký 29–32" },
      { day: 9, passage: "Xuất Ê-đíp-tô Ký 33–36" },
      { day: 10, passage: "Xuất Ê-đíp-tô Ký 37–40" },
      { day: 11, passage: "Lê-vi Ký 1–4" },
      { day: 12, passage: "Lê-vi Ký 5–8" },
      { day: 13, passage: "Lê-vi Ký 9–12" },
      { day: 14, passage: "Lê-vi Ký 13–16" },
      { day: 15, passage: "Lê-vi Ký 17–20" },
      { day: 16, passage: "Lê-vi Ký 21–24" },
      { day: 17, passage: "Lê-vi Ký 25–27" }
    ]
  },
  {
    month: 3,
    title: "Tháng 3: 40 Năm Đồng Vắng, Nhắc Lại Luật Pháp & Chiếm Đất Hứa Ca-na-an",
    books: "Dân-số-ký, Phục-truyền Luật-lệ Ký, Giô-suê",
    totalChapters: 94,
    totalDays: 27,
    overview: "Sự luyện rèn đức tin 40 năm trong đồng vắng, quy định Lễ Vượt Qua tháng 2 cho người lỡ kỳ, lời dặn dò của Môi-se và cuộc chinh phục Đất Hứa thành công rực rỡ với Giô-suê.",
    coreDoc: [
      "Dân-số-ký 9: Cơ hội giữ Lễ Vượt Qua tháng thứ hai cho người lỡ kỳ.",
      "Giô-suê 5:10: Giữ Lễ Vượt Qua tại Ghinh-ganh trước khi hạ gục thành Giê-ri-cô."
    ],
    foundationVerses: [
      { ref: "Giô-suê 1:9", text: "Hãy vững lòng bền chí, chớ run sợ, chớ kinh hãi; vì Giê-hô-va Đức Chúa Trời ngươi vẫn ở cùng ngươi trong mọi nơi ngươi đi." }
    ],
    schedule: [
      { day: 1, passage: "Dân-số-ký 1–4" },
      { day: 2, passage: "Dân-số-ký 5–8" },
      { day: 3, passage: "Dân-số-ký 9–12" },
      { day: 4, passage: "Dân-số-ký 13–16" },
      { day: 5, passage: "Dân-số-ký 17–20" },
      { day: 6, passage: "Dân-số-ký 21–25" },
      { day: 7, passage: "Dân-số-ký 26–30" },
      { day: 8, passage: "Dân-số-ký 31–36" },
      { day: 9, passage: "Phục-truyền 1–4" },
      { day: 10, passage: "Phục-truyền 5–9" },
      { day: 11, passage: "Phục-truyền 10–14" },
      { day: 12, passage: "Phục-truyền 15–19" },
      { day: 13, passage: "Phục-truyền 20–24" },
      { day: 14, passage: "Phục-truyền 25–29" },
      { day: 15, passage: "Phục-truyền 30–34" },
      { day: 16, passage: "Giô-suê 1–5" },
      { day: 17, passage: "Giô-suê 6–10" },
      { day: 18, passage: "Giô-suê 11–15" },
      { day: 19, passage: "Giô-suê 16–20" },
      { day: 20, passage: "Giô-suê 21–24" }
    ]
  },
  {
    month: 4,
    title: "Tháng 4: Thời Các Quan Xét, Tình Yêu Ru-tơ & Khởi Đầu Vương Triều Đa-vít",
    books: "Các Quan-xét, Ru-tơ, 1-2 Sa-mu-ên",
    totalChapters: 80,
    totalDays: 24,
    overview: "Thời kỳ các Quan xét giải cứu dân sự, tình yêu trung kiên của Ru-tơ, cuộc đời tiên tri Sa-mu-ên và sự dấy lên của vua Đa-vít lập vương triều Si-ôn.",
    coreDoc: [
      "1 Sa-mu-ên 16:7: Đức Chúa Trời chẳng xem bề ngoài nhưng nhìn thấy trong lòng.",
      "2 Sa-mu-ên 7: Lời hứa lập vương triều Đa-vít vững bền đến đời đời."
    ],
    foundationVerses: [
      { ref: "2 Sa-mu-ên 7:16", text: "Nhà ngươi và nước ngươi sẽ được bền vững trước mặt ngươi đời đời; ngai ngươi sẽ được ban cho vững bền đến đời đời." }
    ],
    schedule: [
      { day: 1, passage: "Các Quan-xét 1–5" },
      { day: 2, passage: "Các Quan-xét 6–10" },
      { day: 3, passage: "Các Quan-xét 11–15" },
      { day: 4, passage: "Các Quan-xét 16–21" },
      { day: 5, passage: "Ru-tơ 1–4" },
      { day: 6, passage: "1 Sa-mu-ên 1–5" },
      { day: 7, passage: "1 Sa-mu-ên 6–10" },
      { day: 8, passage: "1 Sa-mu-ên 11–15" },
      { day: 9, passage: "1 Sa-mu-ên 16–20" },
      { day: 10, passage: "1 Sa-mu-ên 21–25" },
      { day: 11, passage: "1 Sa-mu-ên 26–31" },
      { day: 12, passage: "2 Sa-mu-ên 1–5" },
      { day: 13, passage: "2 Sa-mu-ên 6–10" },
      { day: 14, passage: "2 Sa-mu-ên 11–15" },
      { day: 15, passage: "2 Sa-mu-ên 16–20" },
      { day: 16, passage: "2 Sa-mu-ên 21–24" }
    ]
  },
  {
    month: 5,
    title: "Tháng 5: Đền Thờ Sô-lô-môn & Kho Tàng Thi Ca Khôn Ngoan Ca Ngợi Luật Pháp",
    books: "1 Các Vua (1–11), 1 Sử-ký, Thi-thiên, Châm-ngôn, Truyền-đạo, Nhã-ca",
    totalChapters: 120,
    totalDays: 30,
    overview: "Sự hưng thịnh của Đền Thờ Giê-ru-sa-lem thời Sô-lô-môn cùng kho tàng thơ ca, châm ngôn khôn ngoan tôn vinh Si-ôn và Luật Pháp thánh khiết.",
    coreDoc: [
      "Thi-thiên 133:3: Si-ôn là nơi Đức Chúa Trời ban phước sự sống đời đời.",
      "Truyền-đạo 12:13: Bổn phận trọn vẹn của con người là kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài."
    ],
    foundationVerses: [
      { ref: "Thi-thiên 119:105", text: "Lời Chúa là ngọn đèn cho chân tôi, là ánh sáng cho đường lối tôi." }
    ],
    schedule: [
      { day: 1, passage: "1 Các Vua 1–5" },
      { day: 2, passage: "1 Các Vua 6–11" },
      { day: 3, passage: "1 Sử-ký 1–10" },
      { day: 4, passage: "1 Sử-ký 11–20" },
      { day: 5, passage: "1 Sử-ký 21–29" },
      { day: 6, passage: "Thi-thiên 1–30" },
      { day: 7, passage: "Thi-thiên 31–60" },
      { day: 8, passage: "Thi-thiên 61–90" },
      { day: 9, passage: "Thi-thiên 91–120" },
      { day: 10, passage: "Thi-thiên 121–150" },
      { day: 11, passage: "Châm-ngôn 1–15" },
      { day: 12, passage: "Châm-ngôn 16–31" },
      { day: 13, passage: "Truyền-đạo 1–12 & Nhã-ca 1–8" }
    ]
  },
  {
    month: 6,
    title: "Tháng 6: Vương Quốc Phân Chia & Phục Hưng Lễ Vượt Qua Triệt Hạ Thần Tượng",
    books: "1 Các Vua (12–22), 2 Các Vua, 2 Sử-ký",
    totalChapters: 83,
    totalDays: 25,
    overview: "Lịch sử hai vương quốc Y-sơ-ra-ên và Giu-đa, cuộc phục hưng Lễ Vượt Qua của vua Ê-xê-chia và Giô-si-a để đập nát thần tượng con rắn đồng.",
    coreDoc: [
      "2 Các Vua 18:4: Vua Ê-xê-chia đập nát con rắn đồng Nê-hu-sơ-tan.",
      "2 Sử-ký 30: Trở lại giữ Lễ Vượt Qua được Đức Chúa Trời ban sự che chở."
    ],
    foundationVerses: [
      { ref: "2 Các Vua 18:4", text: "Người đập nát con rắn đồng mà Môi-se đã làm... người ta gọi nó là Nê-hu-sơ-tan." }
    ],
    schedule: [
      { day: 1, passage: "1 Các Vua 12–16" },
      { day: 2, passage: "1 Các Vua 17–22" },
      { day: 3, passage: "2 Các Vua 1–5" },
      { day: 4, passage: "2 Các Vua 6–10" },
      { day: 5, passage: "2 Các Vua 11–15" },
      { day: 6, passage: "2 Các Vua 16–20" },
      { day: 7, passage: "2 Các Vua 21–25" },
      { day: 8, passage: "2 Sử-ký 1–10" },
      { day: 9, passage: "2 Sử-ký 11–20" },
      { day: 10, passage: "2 Sử-ký 21–30" },
      { day: 11, passage: "2 Sử-ký 31–36" }
    ]
  },
  {
    month: 7,
    title: "Tháng 7: Lời Tiên Tri Về Tiệc Rượu Nho Lâu Năm & Giao Ước Mới",
    books: "Ê-sai, Giê-rê-mi, Ca-thương, Ê-zê-chi-ên, Đa-ni-ên, 12 Tiên Tri Nhỏ",
    totalChapters: 120,
    totalDays: 30,
    overview: "Các lời tiên tri vĩ đại về Đấng Cứu Chúa sẽ đãi tiệc Rượu Nho Lâu Năm (Ê-sai 25), lập Giao Ước Mới (Giê-rê-mi 31) và vạch trần kẻ gian ác toan định đổi thời kỳ luật pháp (Đa-ni-ên 7).",
    coreDoc: [
      "Ê-sai 25:6-9: Tiệc rượu nho lâu năm nuốt sự chết đến đời đời.",
      "Giê-rê-mi 31:31-34: Đức Chúa Trời lập Giao Ước Mới với nhà Y-sơ-ra-ên.",
      "Đa-ni-ên 7:25: Kẻ thù toan định đổi thời kỳ và luật pháp."
    ],
    foundationVerses: [
      { ref: "Ê-sai 25:6", text: "Đức Giê-hô-va vạn quân sẽ đãi muôn dân... một tiệc rượu nho lâu năm." }
    ],
    schedule: [
      { day: 1, passage: "Ê-sai 1–15" },
      { day: 2, passage: "Ê-sai 16–30" },
      { day: 3, passage: "Ê-sai 31–45" },
      { day: 4, passage: "Ê-sai 46–66" },
      { day: 5, passage: "Giê-rê-mi 1–25" },
      { day: 6, passage: "Giê-rê-mi 26–52" },
      { day: 7, passage: "Ê-zê-chi-ên 1–24" },
      { day: 8, passage: "Ê-zê-chi-ên 25–48" },
      { day: 9, passage: "Đa-ni-ên 1–12" },
      { day: 10, passage: "12 Tiên Tri Nhỏ" }
    ]
  },
  {
    month: 8,
    title: "Tháng 8: Trở Về Từ Ba-by-lôn, Tái Thiết Si-ôn & Lễ Lều Tạm",
    books: "Ê-xơ-ra, Nê-hê-mi, Ê-xơ-thê",
    totalChapters: 33,
    totalDays: 15,
    overview: "Cuộc trở về lịch sử sau 70 năm lưu đày Ba-by-lôn, tái thiết Đền Thờ, vui vẻ vâng giữ Lễ Vượt Qua và Lễ Lều Tạm.",
    coreDoc: [
      "Ê-xơ-ra 6:19-22: Dân sự lưu đày trở về liền vui vẻ vâng giữ Lễ Vượt Qua và Lễ Bánh Không Men."
    ],
    foundationVerses: [
      { ref: "Ê-xơ-ra 6:22", text: "Lại giữ lễ Bánh-không-men trong bảy ngày cách vui-vẻ." }
    ],
    schedule: [
      { day: 1, passage: "Ê-xơ-ra 1–5" },
      { day: 2, passage: "Ê-xơ-ra 6–10" },
      { day: 3, passage: "Nê-hê-mi 1–7" },
      { day: 4, passage: "Nê-hê-mi 8–13" },
      { day: 5, passage: "Ê-xơ-thê 1–10" }
    ]
  },
  {
    month: 9,
    title: "Tháng 9: Sự Giáng Sinh Của Đấng Christ & Lễ Vượt Qua Giao Ước Mới Ứng Nghiệm",
    books: "Ma-thi-ơ, Mác, Lu-ca, Giăng",
    totalChapters: 89,
    totalDays: 25,
    overview: "Ứng nghiệm các lời tiên tri Cựu Ước: Đức Chúa Giê-xu giáng sinh, chịu báp-têm, giữ ngày Sa-bát thứ Bảy và lập Lễ Vượt Qua Giao Ước Mới ban sự sống đời đời.",
    coreDoc: [
      "Lu-ca 4:16: Đức Chúa Giê-xu giữ ngày Sa-bát theo thói quen Ngài.",
      "Ma-thi-ơ 26 & Lu-ca 22: Đức Chúa Giê-xu dùng Bánh và Rượu Nho Lễ Vượt Qua lập Giao Ước Mới."
    ],
    foundationVerses: [
      { ref: "Lu-ca 22:20", text: "Chén nầy là giao ước mới trong huyết ta vì các ngươi mà đổ ra." }
    ],
    schedule: [
      { day: 1, passage: "Ma-thi-ơ 1–7" },
      { day: 2, passage: "Ma-thi-ơ 8–15" },
      { day: 3, passage: "Ma-thi-ơ 16–23" },
      { day: 4, passage: "Ma-thi-ơ 24–28" },
      { day: 5, passage: "Mác 1–8" },
      { day: 6, passage: "Mác 9–16" },
      { day: 7, passage: "Lu-ca 1–8" },
      { day: 8, passage: "Lu-ca 9–16" },
      { day: 9, passage: "Lu-ca 17–24" },
      { day: 10, passage: "Giăng 1–7" },
      { day: 11, passage: "Giăng 8–14" },
      { day: 12, passage: "Giăng 15–21" }
    ]
  },
  {
    month: 10,
    title: "Tháng 10: Lễ Ngũ Tuần Hội Thánh Sơ Khai & Hành Trình Truyền Giáo Sa-bát",
    books: "Công-vụ các Sứ-đồ, Rô-ma, 1-2 Cô-rinh-tô",
    totalChapters: 73,
    totalDays: 24,
    overview: "Đức Thánh Linh giáng lâm vào Lễ Ngũ Tuần, Sứ đồ Phao-lô luôn giữ ngày Sa-bát theo thói quen, Luật Đội Khăn Trùm Đầu và vâng giữ Lễ Vượt Qua.",
    coreDoc: [
      "Công-vụ 17:2: Phao-lô giữ ngày Sa-bát theo thói quen mình.",
      "1 Cô-rinh-tô 11: Luật Đội Khăn Trùm Đầu cho nữ tín đồ."
    ],
    foundationVerses: [
      { ref: "1 Cô-rinh-tô 5:7", text: "Vì Đấng Christ là con sinh lễ Vượt-qua của chúng ta, đã bị hi sinh rồi. Vậy thì, chúng ta hãy giữ lễ." }
    ],
    schedule: [
      { day: 1, passage: "Công-vụ 1–7" },
      { day: 2, passage: "Công-vụ 8–14" },
      { day: 3, passage: "Công-vụ 15–21" },
      { day: 4, passage: "Công-vụ 22–28" },
      { day: 5, passage: "Rô-ma 1–8" },
      { day: 6, passage: "Rô-ma 9–16" },
      { day: 7, passage: "1 Cô-rinh-tô 1–8" },
      { day: 8, passage: "1 Cô-rinh-tô 9–16" },
      { day: 9, passage: "2 Cô-rinh-tô 1–13" }
    ]
  },
  {
    month: 11,
    title: "Tháng 11: Các Thư Tín Sứ Đồ & Lẽ Thật Tối Thượng Đức Chúa Trời Mẹ",
    books: "Ga-la-ti đến Giu-đơ (Các Thư Tín)",
    totalChapters: 61,
    totalDays: 20,
    overview: "Xác minh Lẽ Thật Đức Chúa Trời Mẹ Giê-ru-sa-lem trên trời, đời sống thánh sạch của con cái Giao Ước Mới và sự kiên trì giữ đạo.",
    coreDoc: [
      "Ga-la-ti 4:26: Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta."
    ],
    foundationVerses: [
      { ref: "Ga-la-ti 4:26", text: "Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta." }
    ],
    schedule: [
      { day: 1, passage: "Ga-la-ti 1–6" },
      { day: 2, passage: "Ê-phê-sô 1–6" },
      { day: 3, passage: "Phi-líp & Cô-lô-se" },
      { day: 4, passage: "1-2 Tê-sa-lô-ni-ca" },
      { day: 5, passage: "1-2 Ti-mô-thê & Tít" },
      { day: 6, passage: "Hê-bơ-rơ 1–7" },
      { day: 7, passage: "Hê-bơ-rơ 8–13" },
      { day: 8, passage: "Gia-cơ, 1-2 Phi-e-rơ" },
      { day: 9, passage: "1-2-3 Giăng & Giu-đơ" }
    ]
  },
  {
    month: 12,
    title: "Tháng 12: Tiên Tri Ngày Sau Rốt & Thánh Linh Cùng Vợ Mới Ban Nước Sự Sống",
    books: "Khải-huyền",
    totalChapters: 22,
    totalDays: 15,
    overview: "Ấn Đức Chúa Trời Hằng Sống bảo vệ tai nạn diệt vong, 144,000 người trên núi Si-ôn và Thánh Linh cùng Vợ Mới (Đức Chúa Trời Mẹ) ban Nước Sự Sống ở Khải-huyền 22:17.",
    coreDoc: [
      "Khải-huyền 22:17: Thánh Linh và Vợ Mới cùng nói: Hãy đến... nhận lấy nước sự sống cách nhưng không."
    ],
    foundationVerses: [
      { ref: "Khải-huyền 22:17", text: "Thánh Linh và Vợ Mới cùng nói: Hãy đến! Kẻ nào khát, khá đến. Kẻ nào muốn, khá nhận lấy nước sự sống cách nhưng không." }
    ],
    schedule: [
      { day: 1, passage: "Khải-huyền 1–4" },
      { day: 2, passage: "Khải-huyền 5–8" },
      { day: 3, passage: "Khải-huyền 9–12" },
      { day: 4, passage: "Khải-huyền 13–17" },
      { day: 5, passage: "Khải-huyền 18–22" }
    ]
  }
];

// ========================================================
// LỘ TRÌNH 3: LỘ TRÌNH 6 THÁNG NHANH (TÂN ƯỚC & TIÊN TRI TRỌNG TÂM)
// (2 chương/ngày - 10-15 phút/ngày - Tân Ước + Ê-sai, Đa-ni-ên, Sa-cha-ri)
// ========================================================
const FAST_6_MONTHS_PLAN = [
  {
    month: 1,
    title: "Tháng 1: Bốn Phúc Âm (Phần 1) – Đức Chúa Giê-xu & Lễ Vượt Qua Giao Ước Mới",
    books: "Ma-thi-ơ, Mác",
    totalChapters: 44,
    totalDays: 22,
    overview: "Đức Chúa Giê-xu giáng sinh, chịu báp-têm tại sông Giô-đanh, giảng trên núi, chọn 12 sứ đồ và lập Lễ Vượt Qua Giao Ước Mới làm Cây Sự Sống tái sinh linh hồn.",
    coreDoc: [
      "Ma-thi-ơ 26:17-28: Đức Chúa Giê-xu phán Bánh và Rượu Nho Lễ Vượt Qua là Thân Thể và Huyết Ngài ban sự tha tội.",
      "Ma-thi-ơ 5–7: Bài giảng trên núi về luật pháp Giao Ước Mới."
    ],
    foundationVerses: [
      { ref: "Ma-thi-ơ 26:26-28", text: "Đức Chúa Giê-xu lấy bánh, chúc phước, bẻ ra đưa cho môn đồ mà phán rằng: Hãy lấy ăn đi, nầy là thân thể ta..." }
    ],
    schedule: [
      { day: 1, passage: "Ma-thi-ơ 1–2" },
      { day: 2, passage: "Ma-thi-ơ 3–4" },
      { day: 3, passage: "Ma-thi-ơ 5–6" },
      { day: 4, passage: "Ma-thi-ơ 7–8" },
      { day: 5, passage: "Ma-thi-ơ 9–10" },
      { day: 6, passage: "Ma-thi-ơ 11–12" },
      { day: 7, passage: "Ma-thi-ơ 13–14" },
      { day: 8, passage: "Ma-thi-ơ 15–16" },
      { day: 9, passage: "Ma-thi-ơ 17–18" },
      { day: 10, passage: "Ma-thi-ơ 19–20" },
      { day: 11, passage: "Ma-thi-ơ 21–22" },
      { day: 12, passage: "Ma-thi-ơ 23–24" },
      { day: 13, passage: "Ma-thi-ơ 25–26" },
      { day: 14, passage: "Ma-thi-ơ 27–28" },
      { day: 15, passage: "Mác 1–2" },
      { day: 16, passage: "Mác 3–4" },
      { day: 17, passage: "Mác 5–6" },
      { day: 18, passage: "Mác 7–8" },
      { day: 19, passage: "Mác 9–10" },
      { day: 20, passage: "Mác 11–12" },
      { day: 21, passage: "Mác 13–14" },
      { day: 22, passage: "Mác 15–16" }
    ]
  },
  {
    month: 2,
    title: "Tháng 2: Bốn Phúc Âm (Phần 2) – Thói Quen Sa-bát & Nước Sự Sống",
    books: "Lu-ca, Giăng",
    totalChapters: 45,
    totalDays: 23,
    overview: "Đức Chúa Giê-xu giữ ngày Sa-bát thứ Bảy theo thói quen Ngài, phán truyền Thịt và Huyết Ngài ban sự sống đời đời (Giăng 6) và Lễ Rửa Chân thánh khiết.",
    coreDoc: [
      "Lu-ca 4:16: Đức Chúa Giê-xu vào nhà hội giữ ngày Sa-bát theo thói quen Ngài.",
      "Giăng 6:53-54: Ai ăn thịt và uống huyết Ngài thì được sự sống đời đời."
    ],
    foundationVerses: [
      { ref: "Lu-ca 4:16", text: "Theo thói quen thường làm, Ngài vào nhà hội trong ngày Sa-bát, đứng dậy để đọc." },
      { ref: "Giăng 6:54", text: "Ai ăn thịt và uống huyết ta thì được sự sống đời đời, ta sẽ làm cho người sống lại trong ngày sau rốt." }
    ],
    schedule: [
      { day: 1, passage: "Lu-ca 1–2" },
      { day: 2, passage: "Lu-ca 3–4" },
      { day: 3, passage: "Lu-ca 5–6" },
      { day: 4, passage: "Lu-ca 7–8" },
      { day: 5, passage: "Lu-ca 9–10" },
      { day: 6, passage: "Lu-ca 11–12" },
      { day: 7, passage: "Lu-ca 13–14" },
      { day: 8, passage: "Lu-ca 15–16" },
      { day: 9, passage: "Lu-ca 17–18" },
      { day: 10, passage: "Lu-ca 19–20" },
      { day: 11, passage: "Lu-ca 21–22" },
      { day: 12, passage: "Lu-ca 23–24" },
      { day: 13, passage: "Giăng 1–2" },
      { day: 14, passage: "Giăng 3–4" },
      { day: 15, passage: "Giăng 5–6" },
      { day: 16, passage: "Giăng 7–8" },
      { day: 17, passage: "Giăng 9–10" },
      { day: 18, passage: "Giăng 11–12" },
      { day: 19, passage: "Giăng 13–14" },
      { day: 20, passage: "Giăng 15–16" },
      { day: 21, passage: "Giăng 17–18" },
      { day: 22, passage: "Giăng 19–20" },
      { day: 23, passage: "Giăng 21" }
    ]
  },
  {
    month: 3,
    title: "Tháng 3: Hội Thánh Sơ Khai & Các Thư Tín Truyền Giáo Sa-bát",
    books: "Công-vụ các Sứ-đồ, Rô-ma, 1-2 Cô-rinh-tô",
    totalChapters: 57,
    totalDays: 28,
    overview: "Đức Thánh Linh giáng lâm Lễ Ngũ Tuần, Sứ đồ Phao-lô luôn giữ ngày Sa-bát theo thói quen trong suốt hành trình truyền giáo và dặn dò vâng giữ Lễ Vượt Qua.",
    coreDoc: [
      "Công-vụ 17:2 & 18:4: Sứ đồ Phao-lô giữ ngày Sa-bát theo thói quen.",
      "1 Cô-rinh-tô 5:7-8: Đấng Christ là con sinh Lễ Vượt Qua đã bị hi sinh, vậy chúng ta hãy giữ lễ."
    ],
    foundationVerses: [
      { ref: "Công-vụ 17:2", text: "Phao-lô tới nơi họ, theo thói quen mình, và trong ba ngày Sa-bát biện luận với họ bằng Kinh Thánh." }
    ],
    schedule: [
      { day: 1, passage: "Công-vụ 1–2" },
      { day: 2, passage: "Công-vụ 3–4" },
      { day: 3, passage: "Công-vụ 5–6" },
      { day: 4, passage: "Công-vụ 7–8" },
      { day: 5, passage: "Công-vụ 9–10" },
      { day: 6, passage: "Công-vụ 11–12" },
      { day: 7, passage: "Công-vụ 13–14" },
      { day: 8, passage: "Công-vụ 15–16" },
      { day: 9, passage: "Công-vụ 17–18" },
      { day: 10, passage: "Công-vụ 19–20" },
      { day: 11, passage: "Công-vụ 21–22" },
      { day: 12, passage: "Công-vụ 23–24" },
      { day: 13, passage: "Công-vụ 25–26" },
      { day: 14, passage: "Công-vụ 27–28" },
      { day: 15, passage: "Rô-ma 1–2" },
      { day: 16, passage: "Rô-ma 3–4" },
      { day: 17, passage: "Rô-ma 5–6" },
      { day: 18, passage: "Rô-ma 7–8" },
      { day: 19, passage: "Rô-ma 9–10" },
      { day: 20, passage: "Rô-ma 11–12" },
      { day: 21, passage: "Rô-ma 13–14" },
      { day: 22, passage: "Rô-ma 15–16" },
      { day: 23, passage: "1 Cô-rinh-tô 1–3" },
      { day: 24, passage: "1 Cô-rinh-tô 4–6" },
      { day: 25, passage: "1 Cô-rinh-tô 7–9" },
      { day: 26, passage: "1 Cô-rinh-tô 10–12" },
      { day: 27, passage: "1 Cô-rinh-tô 13–16" },
      { day: 28, passage: "2 Cô-rinh-tô 1–13" }
    ]
  },
  {
    month: 4,
    title: "Tháng 4: Thư Tín Sứ Đồ & Lẽ Thật Đức Chúa Trời Mẹ Giê-ru-sa-lem",
    books: "Ga-la-ti đến Giu-đơ (Các Thư Tín)",
    totalChapters: 61,
    totalDays: 30,
    overview: "Khai sáng lẽ thật tối thượng về Đức Chúa Trời Mẹ Giê-ru-sa-lem trên trời (Ga-la-ti 4:26), Luật Khăn Trùm Đầu và chức việc Thầy Tế Lễ theo ban Mên-chi-xê-đéc.",
    coreDoc: [
      "Ga-la-ti 4:26: Thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta.",
      "Hê-bơ-rơ 7: Đấng Christ là Thầy Tế Lễ Thượng Phẩm theo ban Mên-chi-xê-đéc."
    ],
    foundationVerses: [
      { ref: "Ga-la-ti 4:26", text: "Nhưng thành Giê-ru-sa-lem ở trên cao là tự do, và ấy là Mẹ chúng ta." }
    ],
    schedule: [
      { day: 1, passage: "Ga-la-ti 1–2" },
      { day: 2, passage: "Ga-la-ti 3–4" },
      { day: 3, passage: "Ga-la-ti 5–6" },
      { day: 4, passage: "Ê-phê-sô 1–2" },
      { day: 5, passage: "Ê-phê-sô 3–4" },
      { day: 6, passage: "Ê-phê-sô 5–6" },
      { day: 7, passage: "Phi-líp 1–4" },
      { day: 8, passage: "Cô-lô-se 1–4" },
      { day: 9, passage: "1 Tê-sa-lô-ni-ca 1–5" },
      { day: 10, passage: "2 Tê-sa-lô-ni-ca 1–3" },
      { day: 11, passage: "1 Ti-mô-thê 1–3" },
      { day: 12, passage: "1 Ti-mô-thê 4–6" },
      { day: 13, passage: "2 Ti-mô-thê 1–4" },
      { day: 14, passage: "Tít 1–3 & Phi-lê-môn 1" },
      { day: 15, passage: "Hê-bơ-rơ 1–2" },
      { day: 16, passage: "Hê-bơ-rơ 3–4" },
      { day: 17, passage: "Hê-bơ-rơ 5–6" },
      { day: 18, passage: "Hê-bơ-rơ 7–8" },
      { day: 19, passage: "Hê-bơ-rơ 9–10" },
      { day: 20, passage: "Hê-bơ-rơ 11–13" },
      { day: 21, passage: "Gia-cơ 1–3" },
      { day: 22, passage: "Gia-cơ 4–5" },
      { day: 23, passage: "1 Phi-e-rơ 1–3" },
      { day: 24, passage: "1 Phi-e-rơ 4–5" },
      { day: 25, passage: "2 Phi-e-rơ 1–3" },
      { day: 26, passage: "1 Giăng 1–3" },
      { day: 27, passage: "1 Giăng 4–5" },
      { day: 28, passage: "2 Giăng 1 & 3 Giăng 1" },
      { day: 29, passage: "Giu-đơ 1" },
      { day: 30, passage: "Ôn tập Thư Tín" }
    ]
  },
  {
    month: 5,
    title: "Tháng 5: Các Tiên Tri Cựu Ước Trọng Tâm (Ê-sai, Đa-ni-ên, Sa-cha-ri)",
    books: "Ê-sai, Đa-ni-ên, Sa-cha-ri",
    totalChapters: 92,
    totalDays: 30,
    overview: "Các lời tiên tri cốt lõi Cựu Ước về Tiệc Rượu Nho Lâu Năm nuốt sự chết (Ê-sai 25), kẻ gian ác toan định đổi luật pháp (Đa-ni-ên 7) và Lễ Lều Tạm nhận nước sự sống (Sa-cha-ri 14).",
    coreDoc: [
      "Ê-sai 25:6-9: Tiệc rượu nho lâu năm nuốt sự chết đến đời đời.",
      "Đa-ni-ên 7:25: Tiên tri vạch trần kẻ gian ác đổi thời kỳ và luật pháp.",
      "Sa-cha-ri 14:16-17: Giữ Lễ Lều Tạm hằng năm nhận mưa Thánh Linh."
    ],
    foundationVerses: [
      { ref: "Ê-sai 25:6", text: "Đức Giê-hô-va vạn quân sẽ đãi muôn dân một tiệc rượu nho lâu năm." },
      { ref: "Sa-cha-ri 14:16", text: "Hết thảy... sẽ lên đó hằng năm đặng thờ lạy Vua... và giữ lễ Lều-tạm." }
    ],
    schedule: [
      { day: 1, passage: "Ê-sai 1–3" },
      { day: 2, passage: "Ê-sai 4–6" },
      { day: 3, passage: "Ê-sai 7–9" },
      { day: 4, passage: "Ê-sai 10–12" },
      { day: 5, passage: "Ê-sai 13–15" },
      { day: 6, passage: "Ê-sai 16–18" },
      { day: 7, passage: "Ê-sai 19–21" },
      { day: 8, passage: "Ê-sai 22–24" },
      { day: 9, passage: "Ê-sai 25–27" },
      { day: 10, passage: "Ê-sai 28–30" },
      { day: 11, passage: "Ê-sai 31–33" },
      { day: 12, passage: "Ê-sai 34–36" },
      { day: 13, passage: "Ê-sai 37–39" },
      { day: 14, passage: "Ê-sai 40–42" },
      { day: 15, passage: "Ê-sai 43–45" },
      { day: 16, passage: "Ê-sai 46–48" },
      { day: 17, passage: "Ê-sai 49–51" },
      { day: 18, passage: "Ê-sai 52–54" },
      { day: 19, passage: "Ê-sai 55–57" },
      { day: 20, passage: "Ê-sai 58–60" },
      { day: 21, passage: "Ê-sai 61–63" },
      { day: 22, passage: "Ê-sai 64–66" },
      { day: 23, passage: "Đa-ni-ên 1–3" },
      { day: 24, passage: "Đa-ni-ên 4–6" },
      { day: 25, passage: "Đa-ni-ên 7–9" },
      { day: 26, passage: "Đa-ni-ên 10–12" },
      { day: 27, passage: "Sa-cha-ri 1–4" },
      { day: 28, passage: "Sa-cha-ri 5–8" },
      { day: 29, passage: "Sa-cha-ri 9–11" },
      { day: 30, passage: "Sa-cha-ri 12–14" }
    ]
  },
  {
    month: 6,
    title: "Tháng 6: Khải-huyền & Thánh Linh Cùng Vợ Mới Ban Nước Sự Sống",
    books: "Khải-huyền",
    totalChapters: 22,
    totalDays: 15,
    overview: "Ấn Đức Chúa Trời Hằng Sống bảo vệ tai nạn diệt vong, 144,000 người trên núi Si-ôn và Thánh Linh cùng Vợ Mới (Đức Chúa Trời Mẹ) ban Nước Sự Sống cách nhưng không.",
    coreDoc: [
      "Khải-huyền 7:2-3: Ấn của Đức Chúa Trời Hằng Sống bảo vệ các tôi tớ khỏi tai nạn.",
      "Khải-huyền 22:17: Thánh Linh và Vợ Mới cùng phán hãy đến nhận nước sự sống."
    ],
    foundationVerses: [
      { ref: "Khải-huyền 22:17", text: "Thánh Linh và Vợ Mới cùng nói: Hãy đến! Kẻ nào khát, khá đến. Kẻ nào muốn, khá nhận lấy nước sự sống cách nhưng không." }
    ],
    schedule: [
      { day: 1, passage: "Khải-huyền 1–2" },
      { day: 2, passage: "Khải-huyền 3–4" },
      { day: 3, passage: "Khải-huyền 5–6" },
      { day: 4, passage: "Khải-huyền 7–8" },
      { day: 5, passage: "Khải-huyền 9–10" },
      { day: 6, passage: "Khải-huyền 11–12" },
      { day: 7, passage: "Khải-huyền 13–14" },
      { day: 8, passage: "Khải-huyền 15–16" },
      { day: 9, passage: "Khải-huyền 17–18" },
      { day: 10, passage: "Khải-huyền 19–20" },
      { day: 11, passage: "Khải-huyền 21–22" }
    ]
  }
];

if (typeof window !== 'undefined') {
    window.WATV_12_MONTHS_PLAN = WATV_12_MONTHS_PLAN;
    window.CHRONOLOGICAL_12_MONTHS_PLAN = CHRONOLOGICAL_12_MONTHS_PLAN;
    window.FAST_6_MONTHS_PLAN = FAST_6_MONTHS_PLAN;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WATV_12_MONTHS_PLAN, CHRONOLOGICAL_12_MONTHS_PLAN, FAST_6_MONTHS_PLAN };
}
