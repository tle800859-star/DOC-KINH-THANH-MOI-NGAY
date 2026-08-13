// ========================================================
// NGÂN HÀNG TRÍCH DẪN KINH THÁNH KHÍCH LỆ BẢN DỊCH TRUYỀN THỐNG 1925
// PHÂN LOẠI THEO TÌNH TRẠNG NGUỜI CẦN GIÚP
// ========================================================

export const BIBLE_QUOTES_CATEGORIES = [
  { id: 'all', name: 'Tất Cả' },
  { id: 'weak_faith', name: '🛡️ Yếu Đức Tin' },
  { id: 'persecuted', name: '🔥 Bị Áp Lực, Bắt Bớ' },
  { id: 'hardship', name: '🌊 Khó Khăn, Hoạn Nạn' },
  { id: 'discouraged', name: '🌅 Nản Lòng, Mất Hy Vọng' },
  { id: 'anxious', name: '🕊️ Lo Sợ, Bất An' },
  { id: 'leaving_church', name: '🤝 Muốn Bỏ Nhóm / Bỏ Chúa' }
];

export const BIBLE_QUOTES_1925 = [
  // 1. YẾU ĐỨC TIN
  {
    id: 101,
    category: "weak_faith",
    text: "Đức Chúa Jêsus phán rằng: Sao? Ngươi nói: Nếu thầy có thể làm được! Kẻ nào tin thì mọi sự đều được cả. Liền lúc đó, cha đứa trẻ khóc lóc mà kêu lên rằng: Tôi tin; xin Chúa giúp đỡ sự không tin của tôi!",
    reference: "Mác 9:23-24",
    isVerseOfDay: true
  },
  {
    id: 102,
    category: "weak_faith",
    text: "Như vậy, đức tin đến bởi sự người ta nghe, mà người ta nghe là khi lời Đức Chúa Trời được rao giảng.",
    reference: "Rô-ma 10:17",
    isVerseOfDay: false
  },
  {
    id: 103,
    category: "weak_faith",
    text: "Các ngươi nhờ trái nó mà biết nó. Nào có ai hái trái nho nơi bụi gai, hay là trái smok nơi bụi tật lê bao giờ?",
    reference: "Ma-thi-ơ 7:20",
    isVerseOfDay: false
  },
  {
    id: 104,
    category: "weak_faith",
    text: "Nhưng Ngài phán rằng: Ân hiển Ta đủ cho ngươi rồi, vì sức mạnh của Ta nên trọn vẹn trong sự yếu đuối. Vậy, tôi sẽ rất vui lòng khoe mình về sự yếu đuối tôi, hầu cho sức mạnh của Đấng Cơ Đốc ở trong tôi.",
    reference: "2 Cô-rinh-tô 12:9-10",
    isVerseOfDay: false
  },
  {
    id: 105,
    category: "weak_faith",
    text: "Ví bằng trong anh em có kẻ thiếu sự khôn ngoan, hãy cầu xin Đức Chúa Trời, là Đấng ban cho mọi người cách rộng rãi, không trách móc ai, thì kẻ ấy sẽ được ban cho.",
    reference: "Gia-cơ 1:5a",
    isVerseOfDay: false
  },
  {
    id: 106,
    category: "weak_faith",
    text: "Vậy anh em chớ bỏ sự tin chắc mình, vốn có một phần thưởng lớn lao.",
    reference: "Hê-bơ-rơ 10:35",
    isVerseOfDay: false
  },

  // 2. BỊ ÁP LỰC, BẮT BỚ
  {
    id: 201,
    category: "persecuted",
    text: "Phước cho những kẻ chịu bắt bớ vì sự công bình, vì nước thiên đàng là của những kẻ ấy! Khi nào vì cớ Ta mà người ta mắng nhiếc, bắt bớ, và lấy mọi điều dữ khống chỉ cho các ngươi, thì các ngươi sẽ có phước.",
    reference: "Ma-thi-ơ 5:10-12",
    isVerseOfDay: false
  },
  {
    id: 202,
    category: "persecuted",
    text: "Nếu anh em vì danh Đấng Cơ Đốc chịu sỉ nhục, thì anh em có phước; vì Thần vinh hiển và Thần của Đức Chúa Trời đậu trên anh em.",
    reference: "1 Phi-e-rơ 4:14",
    isVerseOfDay: false
  },
  {
    id: 203,
    category: "persecuted",
    text: "Đừng sợ, vì Ta ở với ngươi; chớ kinh hãi, vì Ta là Đức Chúa Trời ngươi. Ta sẽ làm cho ngươi bền vững, phải, Ta sẽ giúp đỡ ngươi, lấy tay hữu công bình Ta mà nâng đỡ ngươi.",
    reference: "Ê-sai 41:10",
    isVerseOfDay: false
  },
  {
    id: 204,
    category: "persecuted",
    text: "Vì cớ Đấng Cơ Đốc, anh em đã được ân ban cho không những tin Ngài mà thôi, lại phải chịu khổ vì Ngài nữa.",
    reference: "Phi-líp 1:29-30",
    isVerseOfDay: false
  },
  {
    id: 205,
    category: "persecuted",
    text: "Hãy mang lấy mọi khí giới của Đức Chúa Trời, để anh em có thể địch lại trong ngày đốm gian, và giữ vững vị trí sau khi đã làm xong mọi sự.",
    reference: "Ê-phê-sô 6:12-14",
    isVerseOfDay: false
  },
  {
    id: 206,
    category: "persecuted",
    text: "Cho nên chúng ta có thể nói cách dạn dĩ rằng: Chúa giúp đỡ tôi, tôi không sợ chi ai; người đời làm chi tôi được?",
    reference: "Hê-bơ-rơ 13:6",
    isVerseOfDay: false
  },

  // 3. KHÓ KHĂN, HOẠN NẠN
  {
    id: 301,
    category: "hardship",
    text: "Này, Ta đã luyện ngươi, nhưng không phải như luyện bạc; Ta đã thử ngươi trong lò hoạn nạn.",
    reference: "Ê-sai 48:10",
    isVerseOfDay: false
  },
  {
    id: 302,
    category: "hardship",
    text: "Dầu khi tôi đi trong trũng bóng chết, tôi sẽ chẳng sợ tai họa nào; vì Chúa ở cùng tôi; gậy của Chúa và gậy tựa của Chúa an ủi tôi.",
    reference: "Thi-thiên 23:4",
    isVerseOfDay: false
  },
  {
    id: 303,
    category: "hardship",
    text: "Hỡi anh em tôi, hãy coi sự thử thách trăm bề thoạt đến cho anh em như là điều vui mừng trọn vẹn, vì biết rằng sự thử thách đức tin anh em sinh ra sự nhẫn nại.",
    reference: "Gia-cơ 1:2-4",
    isVerseOfDay: false
  },
  {
    id: 304,
    category: "hardship",
    text: "Ta đã bảo các ngươi những điều đó, hầu cho các ngươi có sự bình an trong Ta. Các ngươi sẽ có sự đau phản trong thế gian, nhưng hãy yên lòng, Ta đã thắng thế gian rồi!",
    reference: "Giăng 16:33",
    isVerseOfDay: false
  },
  {
    id: 305,
    category: "hardship",
    text: "Khi ngươi qua sông, Ta sẽ ở cùng; khi ngươi qua các sông, nước sẽ chẳng dìm ngập ngươi. Khi ngươi đi qua lửa, sẽ chẳng bị cháy, ngọn lửa chẳng đốt ngươi.",
    reference: "Ê-sai 43:2",
    isVerseOfDay: false
  },
  {
    id: 306,
    category: "hardship",
    text: "Vì sự hoạn nạn nhẹ và tạm của chúng ta sinh cho chúng ta một lượng vinh hiển cao trọng đời đời vô cùng.",
    reference: "2 Cô-rinh-tô 4:17-18",
    isVerseOfDay: false
  },
  {
    id: 307,
    category: "hardship",
    text: "Đức Giê-hô-va ở gần những người có lòng đau thương, và cứu vớt kẻ có tâm hồn tan vỡ.",
    reference: "Thi-thiên 34:18",
    isVerseOfDay: false
  },

  // 4. NẢN LÒNG, MẤT HY VỌNG
  {
    id: 401,
    category: "discouraged",
    text: "Nhưng ai trông cậy Đức Giê-hô-va thì chắc chắn được sức mới, cất cánh bay cao như chim ưng, chạy mà không mệt nhọc, đi mà không giòn giã.",
    reference: "Ê-sai 40:31",
    isVerseOfDay: false
  },
  {
    id: 402,
    category: "discouraged",
    text: "Hỡi tâm hồn tôi, sao ngươi sờn sờn? Sao ngươi bồn chồn trong mình tôi? Hãy hy vọng nơi Đức Chúa Trời; tôi sẽ còn ngợi khen Ngài nữa, là Đấng cứu giúp tôi và là Đức Chúa Trời tôi.",
    reference: "Thi-thiên 42:11",
    isVerseOfDay: false
  },
  {
    id: 403,
    category: "discouraged",
    text: "Thịt xương tôi và lòng tôi hao mòn; nhưng Đức Chúa Trời là sức mạnh của lòng tôi, và là phần của tôi đời đời.",
    reference: "Thi-thiên 73:26",
    isVerseOfDay: false
  },

  // 5. LO SỢ, BẤT AN
  {
    id: 501,
    category: "anxious",
    text: "Ta để sự bình an lại cho các ngươi; Ta ban sự bình an của Ta cho các ngươi; Ta ban cho các ngươi chẳng phải như thế gian ban. Lòng các ngươi chớ bối rối và đừng sợ hãi.",
    reference: "Giăng 14:27",
    isVerseOfDay: false
  },
  {
    id: 502,
    category: "anxious",
    text: "Chớ lo bối rối chi cả, nhưng trong mọi sự hãy dùng lời cầu nguyện, tạ ơn, và sự nài xin mà trình các sự cầu xin của mình cho Đức Chúa Trời. Sự bình an của Đức Chúa Trời vượt quá mọi sự hiểu biết, sẽ giữ giữ lòng và ý tưởng anh em trong Đức Chúa Jêsus Cơ Đốc.",
    reference: "Phi-líp 4:6-7",
    isVerseOfDay: false
  },
  {
    id: 503,
    category: "anxious",
    text: "Đừng sợ, vì Ta ở với ngươi; chớ kinh hãi, vì Ta là Đức Chúa Trời ngươi. Ta sẽ làm cho ngươi bền vững, phải, Ta sẽ giúp đỡ ngươi, lấy tay hữu công bình Ta mà nâng đỡ ngươi.",
    reference: "Ê-sai 41:10",
    isVerseOfDay: false
  },
  {
    id: 504,
    category: "anxious",
    text: "Khi nằm xuống, con chẳng sợ hãi; khi nằm ngủ, giấc ngủ con sẽ được êm đềm. Chớ sợ sự kinh hoàng đột ngột... Vì Đức Giê-hô-va sẽ là sự tin cậy của con.",
    reference: "Châm-ngôn 3:24-26",
    isVerseOfDay: false
  },

  // 6. MUỐN BỎ NHÓM / BỎ CHÚA
  {
    id: 601,
    category: "leaving_church",
    text: "Sự-môn Phi-e-rơ thưa rằng: Lạy Chúa, chúng tôi sẽ đi theo ai? Chúa có những lời của sự sống đời đời; chúng tôi đã tin và biết rằng Chúa là Đấng Thánh của Đức Chúa Trời.",
    reference: "Giăng 6:68-69",
    isVerseOfDay: false
  },
  {
    id: 602,
    category: "leaving_church",
    text: "Hãy giữ vững sự xưng xưng về hy vọng chúng ta không chuyển lay, vì Đấng đã hứa là trung tín. Ai nấy hãy coi sóc nhau để khuyên giục về lòng yêu thương và các việc lành. Chớ bỏ sự nhóm lại như mấy kẻ quen làm, nhưng hãy khuyên bảo nhau, và hễ anh em thấy ngày ấy đến chừng nào, thì càng phải làm như nấy chừng ấy.",
    reference: "Hê-bơ-rơ 10:23-25",
    isVerseOfDay: false
  },
  {
    id: 603,
    category: "leaving_church",
    text: "Ví bằng sau khi đã thoát khỏi sự ô uế của thế gian nhờ sự tri thức về Chúa và Đấng Cứu Thế chúng ta là Đức Chúa Jêsus Cơ Đốc, mà họ lại vướng mắc và phục nó, thì tình cảnh sau của họ còn xấu hơn tình cảnh trước.",
    reference: "2 Phi-e-rơ 2:20-21",
    isVerseOfDay: false
  },
  {
    id: 604,
    category: "leaving_church",
    text: "Vì cớ tội ác sẽ tăng thêm, nên lòng yêu thương của phần nhiều người sẽ nguội đi. Nhưng kẻ nào bền chí cho đến cuối cùng, thì sẽ được cứu.",
    reference: "Ma-thi-ơ 24:12-13",
    isVerseOfDay: false
  }
];
