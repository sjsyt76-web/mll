import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [volIdx, setVolIdx] = useState(0);
  const cart = useCart();

  const selectedVol = product ? product.volumes[volIdx] : null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 font-sans"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong max-w-5xl w-full max-h-[90vh] overflow-auto grid md:grid-cols-2"
            style={{ borderRadius: 24 }}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-t-[24px] md:rounded-t-none md:rounded-l-[24px]">
              <ImageWithFallback
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div
                className="absolute inset-0 pointer-events-none pulse-glow"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 60%, rgba(255,87,51,0.1), transparent 70%)",
                }}
              />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/40 hover:text-[#FF5733] transition"
              >
                <X size={20} />
              </button>

              <div
                className="text-[#FF5733]/60 uppercase tracking-[0.3em] mb-1"
                style={{ fontSize: "10px" }}
              >
                {product.type} · {product.category === 1 ? "Premium" : "Classic"}
              </div>

              <div
                className="text-white/30 uppercase tracking-[0.2em] mb-3 font-sans"
                style={{ fontSize: "11px" }}
              >
                {product.brand}
              </div>

              <h3
                className="font-serif text-white mb-2"
                style={{ fontSize: "2.2rem", fontWeight: 400 }}
              >
                {product.name}
              </h3>

              <div
                className="font-serif italic text-white/40 mb-6"
                style={{ fontSize: "15px" }}
              >
                Масло · Eau de Parfum
              </div>

              <p
                className="text-white/50 leading-relaxed mb-8"
                style={{ fontSize: "14px" }}
              >
                {product.desc}
              </p>

              {/* Notes pyramid */}
              <div className="mb-8">
                <div
                  className="text-white/40 uppercase tracking-[0.3em] mb-4"
                  style={{ fontSize: "10px" }}
                >
                  Пирамида аромата
                </div>
                <div className="space-y-3">
                  {(
                    [
                      { label: "Верхние", items: product.notes.top, width: "100%", opacity: 0.8 },
                      { label: "Сердце", items: product.notes.heart, width: "75%", opacity: 0.5 },
                      { label: "Базовые", items: product.notes.base, width: "50%", opacity: 0.3 },
                    ] as const
                  ).map((row, i) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span
                        className="text-white/30 w-16 shrink-0"
                        style={{ fontSize: "11px" }}
                      >
                        {row.label}
                      </span>
                      <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: row.width }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `rgba(255,87,51,${row.opacity})`,
                            boxShadow: `0 0 12px rgba(255,87,51,${row.opacity * 0.5})`,
                          }}
                        />
                      </div>
                      <span
                        className="font-serif italic text-white shrink-0 max-w-[140px] text-right"
                        style={{ fontSize: "13px" }}
                      >
                        {row.items.slice(0, 3).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volume selector */}
              <div className="mb-8">
                <div
                  className="text-white/40 uppercase tracking-[0.3em] mb-3"
                  style={{ fontSize: "10px" }}
                >
                  Объём
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.volumes.map((v, idx) => (
                    <button
                      key={v.label}
                      onClick={() => setVolIdx(idx)}
                      className={`mercury-btn font-sans ${
                        volIdx === idx ? "mercury-btn-active" : ""
                      }`}
                      style={{ fontSize: "11px", padding: "6px 12px" }}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 border-t border-white/10 pt-6">
                <span
                  className="font-serif text-white"
                  style={{ fontSize: "1.75rem" }}
                >
                  {selectedVol?.price.toLocaleString()} ₸
                </span>
                <span className="text-white/30 font-sans" style={{ fontSize: "12px" }}>
                  {selectedVol?.label}
                </span>
              </div>

              {/* Add to cart */}
              <button
                onClick={() => {
                  if (product && selectedVol) {
                    cart.add(product, selectedVol.label, selectedVol.price);
                    onClose();
                  }
                }}
                className="w-full py-4 uppercase tracking-[0.3em] flex items-center justify-center gap-2 font-sans transition-all duration-500 mercury-btn mercury-btn-active"
                style={{ fontSize: "11px", borderRadius: 14 }}
              >
                <ShoppingBag size={14} /> Добавить в корзину
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
