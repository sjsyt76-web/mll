import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { ProductModal } from "./ProductModal";
import { products, type Product } from "../data/products";
import { useSearch } from "../context/SearchContext";

export function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [filter, setFilter] = useState("Все");
  const { query } = useSearch();

  const types = useMemo(
    () => ["Все", ...Array.from(new Set(products.map((p) => p.type)))],
    []
  );

  const list = useMemo(() => {
    let filtered = filter === "Все" ? products : products.filter((p) => p.type === filter);
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [filter, query]);

  return (
    <section id="catalog" className="bg-black py-24 px-4 md:px-10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(255,87,51,0.04), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div
            className="text-[#FF5733] uppercase tracking-[0.5em] mb-4 font-sans"
            style={{ fontSize: "11px" }}
          >
            Каталог · {products.length} ароматов
          </div>
          <h2
            className="font-serif text-white"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
            }}
          >
            Мужская <span className="italic">коллекция</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="h-[2px] w-16 mx-auto mt-6 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FF5733, transparent)",
            }}
          />
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-12 font-sans">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full uppercase tracking-[0.15em] transition-all duration-400 ${
                filter === t
                  ? "mercury-btn-active text-white"
                  : "glass text-white/50 hover:text-white hover:glow-orange"
              }`}
              style={{ fontSize: "10px", borderRadius: 50 }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {list.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="font-serif text-white/30" style={{ fontSize: "18px" }}>
                Ничего не найдено
              </p>
              <p className="font-sans text-white/20 mt-2" style={{ fontSize: "12px" }}>
                Попробуйте другой запрос
              </p>
            </div>
          )}
          {list.map((p, i) => (
            <motion.button
              key={p.id}
              layout
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden glass mb-4 transition-all duration-500 group-hover:glow-orange-strong">
                <ImageWithFallback
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
                />
                {/* Orange glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5733]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {p.old && (
                  <div
                    className="absolute top-3 left-3 bg-[#FF5733] text-white px-3 py-1 uppercase tracking-[0.25em] font-sans rounded-full"
                    style={{ fontSize: "9px" }}
                  >
                    Sale
                  </div>
                )}
                {/* Price reveal on hover */}
                <div
                  className="absolute bottom-3 left-3 right-3 text-center py-2.5 glass uppercase tracking-[0.25em] font-sans opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ fontSize: "10px", color: "rgba(220,220,220,0.9)" }}
                >
                  {p.price.toLocaleString()} ₸
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-[#FF5733]/50 uppercase tracking-[0.3em] mb-1.5 font-sans"
                  style={{ fontSize: "10px" }}
                >
                  {p.type}
                </div>
                <div
                  className="font-serif text-white mb-1"
                  style={{ fontSize: "18px" }}
                >
                  {p.name}
                </div>
                <div className="text-white/40 font-sans" style={{ fontSize: "13px" }}>
                  {p.price.toLocaleString()} ₸
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
