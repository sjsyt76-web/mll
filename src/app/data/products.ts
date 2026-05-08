export type VolumeOption = {
  label: string;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  type: string;
  category: 1 | 2;
  notes: { top: string[]; heart: string[]; base: string[] };
  volumes: VolumeOption[];
  img: string;
  desc: string;
};

const CAT1_VOLUMES: VolumeOption[] = [
  { label: "3мл (масло)", price: 6000 },
  { label: "6мл (масло)", price: 12000 },
  { label: "5мл (парфюм)", price: 6000 },
  { label: "10мл (парфюм)", price: 10000 },
  { label: "20мл (парфюм)", price: 18000 },
  { label: "30мл (парфюм)", price: 27000 },
  { label: "50мл (парфюм)", price: 39000 },
];

const CAT2_VOLUMES: VolumeOption[] = [
  { label: "3мл (масло)", price: 4500 },
  { label: "6мл (масло)", price: 8000 },
  { label: "5мл (парфюм)", price: 5500 },
  { label: "10мл (парфюм)", price: 8500 },
  { label: "20мл (парфюм)", price: 15000 },
  { label: "30мл (парфюм)", price: 21000 },
  { label: "50мл (парфюм)", price: 35000 },
];

type RawProduct = Omit<Product, "id" | "volumes"> & { category: 1 | 2 };

const raw: RawProduct[] = [
  // ── Категория 1 ──
  {
    name: "Tygar Le Gemme",
    brand: "Bvlgari",
    type: "Цитрусовый",
    category: 1,
    notes: {
      top: ["Грейпфрут"],
      heart: ["Имбирь", "Амбретта"],
      base: ["Амброксан", "Мускус", "Пачули", "Ветивер"],
    },
    img: "https://images.unsplash.com/photo-1772191399367-91ed8d95664b?w=900",
    desc: "Контрастный цитрусово-древесный аккорд: сияющий грейпфрут встречает глубокую амбру.",
  },
  {
    name: "Afternoon Swim",
    brand: "Louis Vuitton",
    type: "Цитрусовый",
    category: 1,
    notes: {
      top: ["Мандарин", "Сицилийский апельсин", "Бергамот"],
      heart: ["Имбирь"],
      base: ["Амбра"],
    },
    img: "https://images.unsplash.com/photo-1774682060992-4ae4fb77e73f?w=900",
    desc: "Энергичный всплеск цитрусов — солнечное послеполуденное купание в аромате.",
  },
  {
    name: "Imagination",
    brand: "Louis Vuitton",
    type: "Цитрусовый",
    category: 1,
    notes: {
      top: ["Бергамот", "Сицилийский апельсин", "Цитрон"],
      heart: ["Нероли", "Имбирь", "Корица"],
      base: ["Амброксан", "Чёрный чай", "Ладан", "Гваяковое дерево"],
    },
    img: "https://images.unsplash.com/photo-1774682060997-f8959850a7d4?w=900",
    desc: "Щедрый амброксан и китайский чай — воображение, обращённое в аромат.",
  },
  {
    name: "L'Immensité",
    brand: "Louis Vuitton",
    type: "Свежий",
    category: 1,
    notes: {
      top: ["Грейпфрут", "Имбирь", "Бергамот"],
      heart: ["Водные ноты", "Розмарин", "Шалфей", "Герань"],
      base: ["Амброксан", "Амбра", "Лабданум"],
    },
    img: "https://images.unsplash.com/photo-1759794108525-94ff060da692?w=900",
    desc: "Бескрайний горизонт: свежий грейпфрут и имбирь над тёплой амброй.",
  },
  {
    name: "Aventus",
    brand: "Creed",
    type: "Древесный",
    category: 1,
    notes: {
      top: ["Лимон", "Розовый перец", "Яблоко", "Бергамот", "Чёрная смородина"],
      heart: ["Ананас", "Жасмин", "Пачули"],
      base: ["Берёза", "Амброксан", "Кедр", "Дубовый мох", "Мускус"],
    },
    img: "https://images.unsplash.com/photo-1774682061055-3bfe402e5a12?w=900",
    desc: "Культовый аромат силы и успеха: ананас, берёза и дымный кедр.",
  },
  {
    name: "Interlude Man",
    brand: "Amouage",
    type: "Восточный",
    category: 1,
    notes: {
      top: ["Бергамот", "Орегано", "Перец пименто"],
      heart: ["Амбра", "Ладан", "Цистус", "Опопонакс"],
      base: ["Кожа", "Уд", "Пачули", "Сандал"],
    },
    img: "https://images.unsplash.com/photo-1758871992965-836e1fb0f9bc?w=900",
    desc: "Хаос и гармония: дымный ладан, жжёная кожа и удовое дерево.",
  },
  {
    name: "Black Afgano",
    brand: "Nasomatto",
    type: "Восточный",
    category: 1,
    notes: {
      top: ["Зелёные ноты", "Шафран", "Тимьян"],
      heart: ["Смолы", "Табак", "Кофе", "Корица"],
      base: ["Уд", "Ладан", "Амбра", "Мускус", "Бобы тонка"],
    },
    img: "https://images.unsplash.com/photo-1554948419-1939083b12cf?w=900",
    desc: "Тёмный, смолистый и гипнотический — наркотическая глубина уда и дыма.",
  },
  {
    name: "The Hedonist",
    brand: "Ex Nihilo",
    type: "Древесный",
    category: 1,
    notes: {
      top: ["Имбирь", "Бергамот"],
      heart: ["Акигаловуд", "Кедр"],
      base: ["Ветивер", "Мускус", "Бобы тонка"],
    },
    img: "https://images.unsplash.com/photo-1709294993903-f6d8ef544e55?w=900",
    desc: "Путешествие без конечного пункта: кедр и ветивер — первозданная сила земли.",
  },
  {
    name: "Megamare",
    brand: "Orto Parisi",
    type: "Свежий",
    category: 1,
    notes: {
      top: ["Бергамот", "Лимон"],
      heart: ["Морские водоросли", "Калон", "Гедион"],
      base: ["Мускус", "Амброксан", "Кедр"],
    },
    img: "https://images.unsplash.com/photo-1769625310883-6c87ed402d6f?w=900",
    desc: "Бесконечное дыхание океана: солёная сила моря в концентрированной форме.",
  },
  // ── Категория 2 ──
  {
    name: "Madawi Gold",
    brand: "Arabian Oud",
    type: "Восточный",
    category: 2,
    notes: {
      top: ["Кардамон", "Фруктовые ноты"],
      heart: ["Ананас", "Жасмин", "Бобы тонка"],
      base: ["Ваниль", "Пачули"],
    },
    img: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=900",
    desc: "Гурманский восточный шедевр: кардамон, тонка и бархатная ваниль.",
  },
  {
    name: "Ombré Leather",
    brand: "Tom Ford",
    type: "Кожаный",
    category: 2,
    notes: {
      top: ["Кардамон"],
      heart: ["Жасмин самбак", "Чёрная кожа"],
      base: ["Пачули", "Белый мох", "Амбра"],
    },
    img: "https://images.unsplash.com/photo-1594035910387-fea081ae7215?w=900",
    desc: "Сердце американского запада: богатая чёрная кожа с дикой красотой жасмина.",
  },
  {
    name: "Tobacco Vanille",
    brand: "Tom Ford",
    type: "Табачный",
    category: 2,
    notes: {
      top: ["Табачный лист", "Специи"],
      heart: ["Бобы тонка", "Табачный цвет", "Ваниль", "Какао"],
      base: ["Сухофрукты", "Древесные ноты"],
    },
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=900",
    desc: "Тёплая иконическая смесь табака, ванили и сладкого древесного сока.",
  },
  {
    name: "Ganymede",
    brand: "Marc-Antoine Barrois",
    type: "Кожаный",
    category: 2,
    notes: {
      top: ["Мандарин", "Шафран"],
      heart: ["Фиалка", "Китайский османтус"],
      base: ["Акигаловуд", "Бессмертник"],
    },
    img: "https://images.unsplash.com/photo-1595425964272-fc617fa19dfa?w=900",
    desc: "Минеральная элегантность: фиалка и замша на орбите спутника Юпитера.",
  },
  {
    name: "Kirke",
    brand: "Tiziana Terenzi",
    type: "Фруктовый",
    category: 2,
    notes: {
      top: ["Маракуйя", "Персик", "Малина", "Смородина", "Груша"],
      heart: ["Ландыш"],
      base: ["Гелиотроп", "Сандал", "Ваниль", "Пачули", "Мускус"],
    },
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900",
    desc: "Пьянящий фруктовый коктейль: маракуйя и персик на бархатном сандале.",
  },
  {
    name: "Angels' Share",
    brand: "Kilian",
    type: "Восточный",
    category: 2,
    notes: {
      top: ["Коньяк"],
      heart: ["Дуб", "Корица"],
      base: ["Бобы тонка", "Сандал", "Ваниль", "Пралине"],
    },
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900",
    desc: "Доля ангелов: выдержанный коньяк, дубовая бочка и бархатная ваниль.",
  },
  {
    name: "Le Beau",
    brand: "Jean Paul Gaultier",
    type: "Свежий",
    category: 2,
    notes: {
      top: ["Бергамот", "Ананас"],
      heart: ["Кокос", "Кипарис", "Ирис"],
      base: ["Кедр", "Сандал", "Бобы тонка"],
    },
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900",
    desc: "Тропическая свежесть: ананас и кокос на базе тёплого сандала.",
  },
  {
    name: "Arabians Tonka",
    brand: "Montale",
    type: "Восточный",
    category: 2,
    notes: {
      top: ["Бергамот", "Шафран"],
      heart: ["Роза", "Уд", "Кожа"],
      base: ["Амбра", "Дубовый мох", "Бобы тонка", "Коричневый сахар", "Белый мускус"],
    },
    img: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?w=900",
    desc: "Бестселлер Montale: обволакивающий уд, роза и тонка в восточном шлейфе.",
  },
];

export const products: Product[] = raw.map((p, i) => ({
  ...p,
  id: i + 1,
  volumes: p.category === 1 ? CAT1_VOLUMES : CAT2_VOLUMES,
}));
