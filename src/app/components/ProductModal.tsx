import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Product } from "../data/products";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [vol, setVol] = useState("30мл");

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
            <div className="relative aspect-square overflow-hidden" style={{ borderRadius: "24px 0 0 24px" }}>
              <ImageWithFallback
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Inner glow */}
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
                className="text-[#FF5733]/60 uppercase tracking-[0.3em] mb-3"
                style={{ fontSize: "10px" }}
              >
                {product.type} · №{product.id.toString().padStart(2, "0")}
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
                Eau de Parfum · Extrait
              </div>

              <p
                className="text-white/50 leading-relaxed mb-8"
                style={{ fontSize: "14px" }}
              >
                {product.desc}
              </p>

              {/* Notes pyramid as glass tubes */}
              <div className="mb-8">
                <div
                  className="text-white/40 uppercase tracking-[0.3em] mb-4"
                  style={{ fontSize: "10px" }}
                >
                  Пирамида аромата
                </div>
                <div className="space-y-3">
                  {product.notes.map((n, i) => {
                    const labels = ["Верхние", "Средние", "Базовые"];
                    const widths = ["100%", "75%", "50%"];
                    const opacities = [0.8, 0.5, 0.3];
                    return (
                      <div key={n} className="flex items-center gap-3">
                        <span
                          className="text-white/30 w-16 shrink-0"
                          style={{ fontSize: "11px" }}
                        >
                          {labels[i] || "Ноты"}
                        </span>
                        <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: widths[i] }}
                            transition={{
                              duration: 1,
                              delay: i * 0.2,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full"
                            style={{
                              background: `rgba(255,87,51,${opacities[i]})`,
                              boxShadow: `0 0 12px rgba(255,87,51,${opacities[i] * 0.5})`,
                            }}
                          />
                        </div>
                        <span
                          className="font-serif italic text-white shrink-0"
                          style={{ fontSize: "14px" }}
                        >
                          {n}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Volume selector - mercury drops */}
              <div className="mb-8">
                <div
                  className="text-white/40 uppercase tracking-[0.3em] mb-3"
                  style={{ fontSize: "10px" }}
                >
                  Объём
                </div>
                <div className="flex gap-3">
                  {["10мл", "30мл", "50мл"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVol(v)}
                      className={`mercury-btn font-sans ${
                        vol === v ? "mercury-btn-active" : ""
                      }`}
                      style={{ fontSize: "12px" }}
                    >
                      {v}
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
                  {product.price.toLocaleString()} ₸
                </span>
                {product.old && (
                  <span className="text-white/30 line-through">
                    {product.old.toLocaleString()} ₸
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <button
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
