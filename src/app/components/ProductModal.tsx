import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Product } from "../data/products";

export function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const [vol, setVol] = useState("30ml");
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 font-sans"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fafaf7] max-w-5xl w-full max-h-[90vh] overflow-auto grid md:grid-cols-2"
          >
            <div className="relative aspect-square bg-white">
              <ImageWithFallback src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 relative">
              <button onClick={onClose} className="absolute top-5 right-5 text-black/50 hover:text-black">
                <X size={20} />
              </button>
              <div className="text-black/40 uppercase tracking-[0.3em] mb-3" style={{fontSize:"10px"}}>{product.type} · №{product.id.toString().padStart(2,"0")}</div>
              <h3 className="font-serif text-black mb-2" style={{ fontSize: "2.5rem", fontWeight: 400 }}>{product.name}</h3>
              <div className="font-serif italic text-black/50 mb-8" style={{fontSize:"16px"}}>Eau de Parfum · Extrait</div>
              <p className="text-black/65 leading-relaxed mb-8" style={{fontSize:"14px"}}>{product.desc}</p>

              <div className="mb-8">
                <div className="text-black/40 uppercase tracking-[0.3em] mb-3" style={{fontSize:"10px"}}>Пирамида аромата</div>
                <div className="space-y-1.5">
                  {product.notes.map((n, i) => (
                    <div key={n} className="flex items-center gap-3">
                      <span className="text-black/40" style={{fontSize:"11px"}}>{["Верхние","Средние","Базовые"][i] || "Ноты"}</span>
                      <span className="flex-1 h-px bg-black/15" />
                      <span className="font-serif italic text-black" style={{fontSize:"15px"}}>{n}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="text-black/40 uppercase tracking-[0.3em] mb-3" style={{fontSize:"10px"}}>Объём</div>
                <div className="flex gap-2">
                  {["10ml","30ml","50ml"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVol(v)}
                      className={`px-5 py-2 border transition uppercase tracking-widest ${vol===v?"border-black bg-black text-white":"border-black/20 text-black/60 hover:border-black/60"}`}
                      style={{fontSize:"11px"}}
                    >{v}</button>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-6 border-t border-black/10 pt-6">
                <span className="font-serif text-black" style={{ fontSize: "1.75rem" }}>{product.price.toLocaleString()} ₸</span>
                {product.old && <span className="text-black/40 line-through">{product.old.toLocaleString()} ₸</span>}
              </div>
              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] hover:bg-black/85 transition flex items-center justify-center gap-2" style={{fontSize:"11px"}}>
                <ShoppingBag size={14} /> Добавить в корзину
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
