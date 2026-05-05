import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProductModal } from "./ProductModal";
import { products, type Product } from "../data/products";

export function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [filter, setFilter] = useState("Все");

  const types = useMemo(() => ["Все", ...Array.from(new Set(products.map((p) => p.type)))], []);
  const list = filter === "Все" ? products : products.filter((p) => p.type === filter);

  return (
    <section id="catalog" className="bg-black py-24 px-4 md:px-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="text-white/40 uppercase tracking-[0.4em] mb-4 font-sans" style={{ fontSize: "11px" }}>
            Каталог · {products.length} ароматов
          </div>
          <h2 className="font-serif text-white" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 400 }}>
            Мужская <span className="italic">коллекция</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="h-px w-16 bg-white/40 mx-auto mt-6 origin-center"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 font-sans">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`uppercase tracking-[0.2em] pb-1 border-b transition ${
                filter === t ? "border-white text-white" : "border-transparent text-white/50 hover:text-white"
              }`}
              style={{ fontSize: "11px" }}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {list.map((p, i) => (
            <motion.button
              key={p.id}
              layout
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group text-left"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                <ImageWithFallback
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
                />
                {p.old && (
                  <div className="absolute top-3 left-3 bg-white text-black px-2.5 py-1 uppercase tracking-[0.25em] font-sans" style={{ fontSize: "9px" }}>
                    Sale
                  </div>
                )}
                <div className="absolute bottom-3 left-3 right-3 bg-black/90 text-white text-center py-2 uppercase tracking-[0.25em] font-sans opacity-0 group-hover:opacity-100 transition" style={{ fontSize: "10px" }}>
                  Подробнее
                </div>
              </div>
              <div className="text-center">
                <div className="text-white/40 uppercase tracking-[0.3em] mb-1.5 font-sans" style={{ fontSize: "10px" }}>{p.type}</div>
                <div className="font-serif text-white mb-1" style={{ fontSize: "19px" }}>{p.name}</div>
                <div className="text-white/55 font-sans" style={{ fontSize: "13px" }}>{p.price.toLocaleString()} ₸</div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
