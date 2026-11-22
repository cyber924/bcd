export const MEAL_KITS = [
  {
    id: "mk-01",
    name: "프리미엄 블랙앵거스 찹스테이크 & 트러플 파스타",
    category: "gourmet",
    categoryLabel: "셰프 스페셜",
    badge: "🔥 인기 BEST 1위",
    image: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790057722907",
    price: 24900,
    originalPrice: 29900,
    rating: 4.9,
    reviewsCount: 1420,
    cookTime: "12분",
    difficulty: "쉬움 (★★☆☆☆)",
    servings: "2인분",
    calories: "680 kcal (1인당)",
    tagline: "미슐랭 레스토랑의 깊은 풍미를 집에서 12분만에 완벽 재현!",
    description: "육즙이 풍부한 블랙앵거스 부채살과 진한 은은한 트러플 향의 풍미가 감도는 파르페잔 치즈 파스타 킷입니다. 특별한 기념일과 파티에 어울리는 최상급 구성입니다.",
    ingredients: [
      "미국산 블랙앵거스 부채살 300g",
      "이탈리아산 트러플 오일 15ml",
      "링귀니 파스타면 200g",
      "신선 아스파라거스 & 미니양배추",
      "셰프 수제 시즈닝 & 특제 데미글라스 소스"
    ],
    steps: [
      { time: 2, title: "재료 핏물 제거 & 시즈닝", desc: "소고기의 핏물을 키친타월로 누르고 수제 시즈닝을 앞뒤로 골고루 발라줍니다." },
      { time: 5, title: "고기 팬프라잉 & 가니쉬 볶기", desc: "강불로 달군 팬에 올리브오일을 두르고 부채살을 겉바속촉으로 3분간 시어링한 후 채소를 볶습니다." },
      { time: 5, title: "파스타 면 삶기 및 트러플 조화", desc: "면을 4분간 삶은 후 셰프 특제 트러플 크림 소스에 자작하게 볶아 완성합니다." }
    ],
    nutrition: { carbs: "48g", protein: "42g", fat: "26g", sodium: "720mg" },
    isFeatured: true,
    isNew: false,
    forSolo: false,
    forCamping: true,
    forDiet: false
  },
  {
    id: "mk-02",
    name: "캠핑 & 오프로드 불맛 우삼겹 감바스 & 통마늘 찌개 킷",
    category: "camping",
    categoryLabel: "캠핑/여행",
    badge: "🏕️ 여행/캠핑 강추",
    image: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790057732669",
    price: 19800,
    originalPrice: 23500,
    rating: 4.95,
    reviewsCount: 980,
    cookTime: "10분",
    difficulty: "초간단 (★☆☆☆☆)",
    servings: "2~3인분",
    calories: "550 kcal (1인당)",
    tagline: "야외에서도 손전등 켜고 10분만에 만드는 진한 훈제 감성 캠핑 요리!",
    description: "바베큐장에서 가장 인기 높은 직화 우삼겹 감바스와 매콤달콤 알마늘 버터 구이 킷. 알루미늄 일회용 직화 냄비가 동봉되어 있어 야외에서 씻을 필요 없이 바로 끓여 드실 수 있습니다.",
    ingredients: [
      "우삼겹 250g",
      "엑스트라 버진 올리브유 100ml",
      "통마늘 & 페퍼론치노 50g",
      "통새우 8미",
      "바삭한 바게트 빵 4조각",
      "캠핑용 손쉬운 알루미늄 직화 용기 포함"
    ],
    steps: [
      { time: 2, title: "직화 용기 세팅", desc: "제공된 은박 냄비에 올리브유와 편마늘, 페퍼론치노를 넣고 센 불로 가열합니다." },
      { time: 5, title: "새우 & 우삼겹 퐁당", desc: "마늘 향이 올라오면 탱글탱글한 새우와 우삼겹을 넣어 노릇하게 익힙니다." },
      { time: 3, title: "바게트 구이 및 와인 곁들이기", desc: "오일에 바게트를 적셔 고소한 우삼겹 육즙과 마늘 오일을 만끽하세요!" }
    ],
    nutrition: { carbs: "32g", protein: "38g", fat: "31g", sodium: "680mg" },
    isFeatured: true,
    isNew: true,
    forSolo: true,
    forCamping: true,
    forDiet: false
  },
  {
    id: "mk-03",
    name: "헬시 클렌즈 그린 밸런스 & 닭가슴살 수비드 샐러드 킷",
    category: "health",
    categoryLabel: "건강/다이어트",
    badge: "🥗 영양사 1등 추천",
    image: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790052412177",
    price: 13900,
    originalPrice: 16000,
    rating: 4.88,
    reviewsCount: 2150,
    cookTime: "3분 (노오븐)",
    difficulty: "초간단 (★☆☆☆☆)",
    servings: "1인분",
    calories: "340 kcal",
    tagline: "당독소 낮추고 단백질 35g 채우는 프리미엄 클렌즈 헬스 케어 밀키트!",
    description: "저온 수비드로 부드럽게 익힌 국산 닭가슴살과 아보카도, 와일드 루콜라, 리코타 치즈, 레몬 오리엔탈 드레싱이 완벽한 영양 밸런스를 이룹니다. 직장인 점심 및 다이어터들의 필수 아이템!",
    ingredients: [
      "국산 촉촉 수비드 닭가슴살 150g",
      "유기농 와일드 루콜라 & 로메인 100g",
      "생 아보카도 1/2개",
      "수제 리코타 치즈 40g",
      "무설탕 레몬 허브 오리엔탈 드레싱 45g",
      "구운 병아리콩 & 견과류 믹스"
    ],
    steps: [
      { time: 1, title: "채소 세척 및 진공 해제", desc: "이미 3차 세척된 친환경 채소를 볼에 담습니다." },
      { time: 1, title: "수비드 닭가슴살 결대로 찢기", desc: "따뜻한 물에 1분간 담가 둔 수비드 닭가슴살을 찢어 올립니다." },
      { time: 1, title: "드레싱 드롭 & 완성", desc: "무설탕 오리엔탈 드레싱과 견과류 토핑을 얹어 가볍게 믹스합니다." }
    ],
    nutrition: { carbs: "22g", protein: "36g", fat: "11g", sodium: "410mg" },
    isFeatured: true,
    isNew: false,
    forSolo: true,
    forCamping: false,
    forDiet: true
  },
  {
    id: "mk-04",
    name: "아시안 퓨전 테이스팅 동남아 똠얌 쌀국수 & 새우 스페셜",
    category: "asian",
    categoryLabel: "글로벌 특선",
    badge: "✈️ 이색 테이스팅",
    image: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790052237762",
    price: 17500,
    originalPrice: 21000,
    rating: 4.91,
    reviewsCount: 840,
    cookTime: "15분",
    difficulty: "보통 (★★★☆☆)",
    servings: "2인분",
    calories: "510 kcal (1인당)",
    tagline: "방콕 현지 5성급 호텔 셰프의 비법 페이스트로 만든 깊고 새콤매콤한 맛!",
    description: "갈랑갈, 레몬그라스, 라임즙이 오묘하게 어우러진 특제 똠얌 육수에 통통한 왕새우와 쫄깃한 쌀국수 면, 느타리버섯이 가득 들어간 현지 스타일 똠얌꿍 쌀국수입니다.",
    ingredients: [
      "현지 직수입 똠얌 페이스트 & 코코넛 밀크",
      "블랙타이거 왕새우 6미",
      "베트남 쌀국수 면 200g",
      "신선한 고수 & 라임 슬라이스",
      "느타리버섯 & 방울토마토"
    ],
    steps: [
      { time: 3, title: "육수 베이스 끓이기", desc: "물 800ml에 똠얌 페이스트와 레몬그라스를 넣고 3분간 매콤한 향을 우려냅니다." },
      { time: 7, title: "해산물 & 야채 투하", desc: "왕새우와 버섯, 방울토마토를 넣고 풍미가 우러나도록 팔팔 끓여줍니다." },
      { time: 5, title: "코코넛밀크 & 쌀국수 완성", desc: "불을 줄인 후 코코넛 밀크와 불린 쌀국수 면을 넣어 2분간 마무리를 짓습니다." }
    ],
    nutrition: { carbs: "56g", protein: "28g", fat: "16g", sodium: "890mg" },
    isFeatured: true,
    isNew: true,
    forSolo: false,
    forCamping: true,
    forDiet: false
  },
  {
    id: "mk-05",
    name: "1인 가구 솔로 킷: 우삼겹 순두부찌개 & 계란말이 세트",
    category: "korean",
    categoryLabel: "1인 가구/한식",
    badge: "🍚 1인 가구 꿀조합",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    price: 11900,
    originalPrice: 13900,
    rating: 4.85,
    reviewsCount: 3100,
    cookTime: "8분",
    difficulty: "초간단 (★☆☆☆☆)",
    servings: "1인분",
    calories: "490 kcal",
    tagline: "퇴근 후 8분이면 끝! 얼큰칼칼한 우삼겹 순두부찌개와 부드러운 단짠 계란말이",
    description: "혼자서도 푸짐하고 든든하게 먹을 수 있는 한식 혼밥 베스트 세트입니다. 대파기름 다대기와 몽글몽글 순두부, 우삼겹이 조화를 이룹니다.",
    ingredients: [
      "몽글몽글 국산 순두부 1팩",
      "고소한 우삼겹 120g",
      "특제 대파 고추기름 다대기",
      "신선 팽이버섯 & 호박",
      "무항생제 계란 2알 & 야채 믹스"
    ],
    steps: [
      { time: 2, title: "우삼겹 파기름 볶기", desc: "냄비에 우삼겹과 대파 다대기를 넣고 고기 기름을 냅니다." },
      { time: 4, title: "육수 & 순두부 퐁당", desc: "물 300ml와 채소를 넣고 순두부를 큼직하게 넣어 끓입니다." },
      { time: 2, title: "계란말이 부치기", desc: "팬에 계란물을 둘러 계란말이를 완성합니다." }
    ],
    nutrition: { carbs: "28g", protein: "30g", fat: "22g", sodium: "820mg" },
    isFeatured: false,
    isNew: false,
    forSolo: true,
    forCamping: false,
    forDiet: false
  },
  {
    id: "mk-06",
    name: "정통 이탈리안 해산물 토마토 짬뽕 바질 리조또",
    category: "western",
    categoryLabel: "양식 다이닝",
    badge: "🍷 홈파티 스페셜",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    price: 21900,
    originalPrice: 26000,
    rating: 4.89,
    reviewsCount: 620,
    cookTime: "15분",
    difficulty: "보통 (★★★☆☆)",
    servings: "2인분",
    calories: "610 kcal (1인당)",
    tagline: "가리비, 오징어, 홍합이 아낌없이 들어간 감칠맛 폭발 리조또!",
    description: "이탈리안 셰프가 직가공한 진한 산마르자노 토마토 베이스에 생 바질 향과 신선한 해산물이 어우러진 홈파티 메인 다이닝 요리입니다.",
    ingredients: [
      "국산 가리비 & 오징어 & 홍합 250g",
      "이탈리아산 산마르자노 토마토 소스",
      "알보리오 리조또 쌀 180g",
      "생 바질 잎 & 그라나파다노 치즈",
      "화이트 와인 쿠킹 베이스"
    ],
    steps: [
      { time: 3, title: "해산물 와인 플람베", desc: "팬에 올리브유를 둘러 해산물을 볶다가 화이트 와인을 넣어 비린내를 잡습니다." },
      { time: 8, title: "리조또 쌀 볶아 육수 붓기", desc: "토마토 베이스와 스톡을 조금씩 자작하게 부어가며 알덴테 상태로 익힙니다." },
      { time: 4, title: "바질 & 치즈 마무리", desc: "생 바질잎을 찢어 넣고 치즈 파우더를 얹어 풍미를 완성합니다." }
    ],
    nutrition: { carbs: "65g", protein: "29g", fat: "14g", sodium: "750mg" },
    isFeatured: false,
    isNew: true,
    forSolo: false,
    forCamping: false,
    forDiet: false
  }
];

export const REVIEWS = [
  {
    id: "r1",
    author: "김*진 님",
    rating: 5,
    date: "2025.02.20",
    kitName: "프리미엄 블랙앵거스 찹스테이크",
    comment: "사진이랑 똑같이 정말 푸짐하고 고급스러워요! 남편이랑 기념일에 와인 한잔하면서 먹었는데 12분만에 근사한 홈파티 분위기 냈네요. 트러플 파스타 향도 예술입니다.",
    badge: "구매 확정",
    avatar: "👩‍🍳"
  },
  {
    id: "r2",
    author: "이*민 님",
    rating: 5,
    date: "2025.02.19",
    kitName: "캠핑 & 오프로드 우삼겹 감바스",
    comment: "지난 주말 글램핑 가서 끓여 먹었는데 은박 냄비가 포함되어 있어서 설거지 걱정 없이 싹 먹었습니다! 우삼겹 고기 기름이랑 마늘 오일에 바게트 찍어 먹으니 최고예요.",
    badge: "캠핑 마니아",
    avatar: "🏕️"
  },
  {
    id: "r3",
    author: "최*우 님",
    rating: 5,
    date: "2025.02.18",
    kitName: "헬시 클렌즈 그린 밸런스 샐러드",
    comment: "다이어트 중인데 닭가슴살이 수비드라 전혀 뻑뻑하지 않고 야채도 배송받자마자 너무 싱싱해요! 정기구독으로 신청해서 매주 3팩씩 받아보고 있습니다.",
    badge: "정기구독 고객",
    avatar: "🥗"
  },
  {
    id: "r4",
    author: "박*아 님",
    rating: 5,
    date: "2025.02.16",
    kitName: "아시안 퓨전 똠얌 쌀국수",
    comment: "동남아 여행 다녀온 기분이에요! 방콕에서 먹던 얼큰하고 새콤한 똠얌국물 맛을 그대로 집에서 구현할 수 있어서 너무 놀랐습니다. 재구매 의사 200%!",
    badge: "미식가 리포트",
    avatar: "🍜"
  }
];

export const SUBSCRIPTION_PLANS = [
  {
    id: "starter",
    name: "싱글 밸런스 (1인용)",
    mealsPerWeek: "주 3식",
    target: "바쁜 직장인, 1인 가구 추천",
    pricePerMeal: 8900,
    originalPricePerMeal: 11900,
    discountRate: "25% OFF",
    perks: ["전 상품 무료 새벽배송", "매달 셰프 신메뉴 1종 사은품", "언제든 정지/배송일 변경 가능"]
  },
  {
    id: "family",
    name: "더블 다이닝 (2~3인용)",
    badge: "👑 가장 인기있는 구독",
    mealsPerWeek: "주 4식",
    target: "신혼부부, 2~3인 가구 추천",
    pricePerMeal: 14500,
    originalPricePerMeal: 19800,
    discountRate: "27% OFF",
    perks: ["VIP 전용 무료 새벽배송", "정기구독 전용 10% 추가 쿠폰", "디저트 킷 웰컴 기프트 증정"]
  },
  {
    id: "gourmet",
    name: "프리미엄 셰프 파티 (4인용)",
    mealsPerWeek: "주 2회 홈파티",
    target: "주말 홈파티, 캠핑족, 대가족",
    pricePerMeal: 18900,
    originalPricePerMeal: 24900,
    discountRate: "24% OFF",
    perks: ["무료 프리미엄 보냉백 제공", "1:1 영양사 식단 맞춤 조율", "스테이크 킷 전용 가니쉬 서비스"]
  }
];
