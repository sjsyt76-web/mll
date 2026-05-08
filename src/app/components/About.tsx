import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";

export function About() {
  return (
    <section id="about" className="bg-black py-24 px-4 md:px-10 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(255,87,51,0.03), transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="aspect-[4/5] overflow-hidden glass"
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
          <div
            className="text-[#FF5733] uppercase tracking-[0.5em] mb-5 font-sans"
            style={{ fontSize: "11px" }}
          >
            Maison Dee&Abllo
          </div>
          <h2
            className="font-serif text-white mb-8 leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 400,
            }}
          >
            Парфюмерия,
            <br />
            <span className="italic">сделанная вручную</span>
          </h2>
          <div
            className="h-[2px] w-16 mb-8"
            style={{
              background:
                "linear-gradient(90deg, #FF5733, transparent)",
            }}
          />
          <p className="text-white/50 leading-relaxed mb-5 font-sans">
            Dee&Abllo — независимый парфюмерный дом из Алматы. Мы создаём
            только мужскую парфюмерию: каждая композиция собирается малыми
            партиями, без массового производства.
          </p>
          <p className="text-white/50 leading-relaxed font-sans">
            Наша эстетика — чистые линии, благородные ноты и тишина между
            ними. Минимум флакона, максимум характера.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-white/10 mt-10 pt-8">
            {[
              ["2021", "основан"],
              ["17", "ароматов"],
              ["3 500+", "клиентов"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  className="font-serif text-[#FF5733]"
                  style={{ fontSize: "28px" }}
                >
                  {n}
                </div>
                <div
                  className="text-white/40 uppercase tracking-[0.2em] font-sans"
                  style={{ fontSize: "10px" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
