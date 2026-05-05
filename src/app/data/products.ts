export type Product = {
  id: number;
  name: string;
  type: string;
  notes: string[];
  price: number;
  old?: number;
  img: string;
  desc: string;
};

const IMGS = [
  "https://images.unsplash.com/photo-1772191399367-91ed8d95664b?w=900",
  "https://images.unsplash.com/photo-1774682060992-4ae4fb77e73f?w=900",
  "https://images.unsplash.com/photo-1774682060997-f8959850a7d4?w=900",
  "https://images.unsplash.com/photo-1759794108525-94ff060da692?w=900",
  "https://images.unsplash.com/photo-1774682061055-3bfe402e5a12?w=900",
  "https://images.unsplash.com/photo-1758871992965-836e1fb0f9bc?w=900",
  "https://images.unsplash.com/photo-1554948419-1939083b12cf?w=900",
  "https://images.unsplash.com/photo-1709294993903-f6d8ef544e55?w=900",
];

const raw: Omit<Product, "id" | "img">[] = [
  { name: "Noir Ambré", type: "Восточный", notes: ["Амбра", "Ладан", "Ваниль"], price: 14900, old: 18900, desc: "Тёмный амбровый аккорд с ладаном и тёплой ванилью." },
  { name: "Tabac Doré", type: "Табачный", notes: ["Табак", "Ваниль", "Кожа"], price: 13400, desc: "Сладкий табак, обожжённая ваниль и нотка выдержанной кожи." },
  { name: "Oud Inferno", type: "Древесный", notes: ["Уд", "Кожа", "Шафран"], price: 19900, old: 23000, desc: "Густой уд с дымной кожей и пряным шафраном." },
  { name: "Citrus Noir", type: "Цитрусовый", notes: ["Бергамот", "Дым", "Кедр"], price: 11900, desc: "Холодный бергамот, дымный кедр, графитовая чистота." },
  { name: "Amber Luxe", type: "Амбровый", notes: ["Амбра", "Мускус", "Бензоин"], price: 14200, desc: "Тёплый янтарный шлейф для холодных вечеров." },
  { name: "Vetiver Steel", type: "Свежий", notes: ["Ветивер", "Грейпфрут", "Перец"], price: 12800, desc: "Серый ветивер с перцем — деловой и чистый." },
  { name: "Smoke Cedar", type: "Древесный", notes: ["Кедр", "Дым", "Иней"], price: 13200, desc: "Холодный кедр и сухой дым." },
  { name: "Black Leather 09", type: "Кожаный", notes: ["Кожа", "Берёзовый дёготь", "Мускус"], price: 16400, desc: "Брутальный кожаный аккорд с берёзовым дёгтем." },
  { name: "Iron Musk", type: "Мускусный", notes: ["Белый мускус", "Металл", "Лаванда"], price: 12100, desc: "Чистый металлический мускус, как стальной утренний воздух." },
  { name: "Whiskey Blonde", type: "Гурманский", notes: ["Виски", "Мёд", "Сандал"], price: 15200, desc: "Бочковой виски, мёд и сухой сандал." },
  { name: "Graphite", type: "Минеральный", notes: ["Графит", "Перец", "Ирис"], price: 13900, desc: "Сухая минеральность, как затёртый карандаш." },
  { name: "Storm 47", type: "Озоновый", notes: ["Озон", "Соль", "Полынь"], price: 11500, desc: "Запах грозы над морем." },
  { name: "Black Vanilla", type: "Гурманский", notes: ["Ваниль", "Кофе", "Какао"], price: 14600, desc: "Тёмная ваниль с горьким эспрессо." },
  { name: "Pepper & Iron", type: "Пряный", notes: ["Чёрный перец", "Железо", "Кедр"], price: 12700, desc: "Острый чёрный перец и металл." },
  { name: "Saffron Royal", type: "Пряный", notes: ["Шафран", "Роза", "Уд"], price: 16800, desc: "Восточный шафран на удовой подложке." },
  { name: "Cuir 12", type: "Кожаный", notes: ["Замша", "Ирис", "Бобы тонка"], price: 14800, desc: "Мягкая замша и тёплая тонка." },
  { name: "Midnight Oak", type: "Древесный", notes: ["Дуб", "Виски", "Мох"], price: 15500, desc: "Старый дуб и мшистая дорожка." },
  { name: "Black Coffee", type: "Гурманский", notes: ["Кофе", "Какао", "Ваниль"], price: 13100, desc: "Запах свежесваренного эспрессо." },
  { name: "Steel Vetiver", type: "Свежий", notes: ["Ветивер", "Лимон", "Мята"], price: 11800, desc: "Холодный лимон по графиту." },
  { name: "Ash & Salt", type: "Минеральный", notes: ["Пепел", "Соль", "Можжевельник"], price: 13700, desc: "Холодный пепел после костра у моря." },
  { name: "Black Fig", type: "Фруктовый", notes: ["Инжир", "Кедр", "Молоко"], price: 12900, desc: "Зелёный инжир и сливочный кедр." },
  { name: "Dark Suede", type: "Кожаный", notes: ["Замша", "Ваниль", "Перец"], price: 15900, desc: "Бархатная замша с тёплой ванилью." },
  { name: "Frost Iris", type: "Пудровый", notes: ["Ирис", "Фиалка", "Мускус"], price: 14400, desc: "Холодный ирис в минималистичной оправе." },
  { name: "Tobacco Hour", type: "Табачный", notes: ["Табак", "Ром", "Корица"], price: 14000, desc: "Тёплая трубка и стакан рома." },
  { name: "Obsidian", type: "Минеральный", notes: ["Камень", "Лаванда", "Уд"], price: 17200, desc: "Чёрный обсидиан и сухая лаванда." },
  { name: "Cardamom Black", type: "Пряный", notes: ["Кардамон", "Кофе", "Ладан"], price: 12600, desc: "Зелёный кардамон с горьким кофе." },
  { name: "Patchouli 03", type: "Землистый", notes: ["Пачули", "Какао", "Кедр"], price: 13800, desc: "Минималистичный пачули и тёмное какао." },
  { name: "White Smoke", type: "Дымный", notes: ["Берёза", "Соль", "Мускус"], price: 12300, desc: "Лёгкий белый дым на коже." },
  { name: "Concrete", type: "Минеральный", notes: ["Бетон", "Перец", "Ирис"], price: 14100, desc: "Сухой бетон после дождя." },
  { name: "Black Tea Noir", type: "Чайный", notes: ["Чёрный чай", "Бергамот", "Мёд"], price: 11600, desc: "Крепкий чёрный чай с бергамотом." },
  { name: "Iron Wood", type: "Древесный", notes: ["Железное дерево", "Дым", "Перец"], price: 15300, desc: "Плотное дерево и металл." },
  { name: "Velvet Night", type: "Восточный", notes: ["Амбра", "Уд", "Шоколад"], price: 16100, desc: "Густая бархатная ночь." },
];

export const products: Product[] = raw.map((p, i) => ({
  ...p,
  id: i + 1,
  img: IMGS[i % IMGS.length],
}));
