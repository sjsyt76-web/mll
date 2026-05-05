import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="bg-black py-24 px-4 md:px-10 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="aspect-[4/5] bg-zinc-950"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759794108525-94ff060da692?w=1200"
            alt="Atelier Dee&Abllo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="text-white/40 uppercase tracking-[0.4em] mb-5 font-sans" style={{ fontSize: "11px" }}>Maison Dee&Abllo</div>
          <h2 className="font-serif text-white mb-8 leading-[1.05]" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400 }}>
            Парфюмерия,<br/>
            <span className="italic">сделанная вручную</span>
          </h2>
          <div className="h-px w-16 bg-white/40 mb-8" />
          <p className="text-white/65 leading-relaxed mb-5 font-sans">
            Dee&Abllo — независимый парфюмерный дом из Алматы. Мы создаём только мужскую парфюмерию: каждая композиция собирается малыми партиями, без массового производства.
          </p>
          <p className="text-white/65 leading-relaxed font-sans">
            Наша эстетика — чистые линии, благородные ноты и тишина между ними. Минимум флакона, максимум характера.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 mt-10 pt-8">
            {[["2021","основан"],["32","аромата"],["3 500+","клиентов"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-serif text-white" style={{ fontSize: "28px" }}>{n}</div>
                <div className="text-white/45 uppercase tracking-[0.2em] font-sans" style={{ fontSize: "10px" }}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
