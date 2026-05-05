import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Logo } from "./Logo";

const D = 2.6;

export function Hero() {
  return (
    <section className="relative bg-black border-b border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: D - 0.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center relative">
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: D }}
            className="text-white/40 uppercase tracking-[0.4em] mb-8 font-sans"
            style={{ fontSize: "11px" }}
          >
            Maison de Parfum · Алматы
          </motion.div>
          <h1 className="font-serif text-white leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 400 }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: D + 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Искусство
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: D + 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              <span className="italic text-white/70">тонкого</span> аромата
            </motion.span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: D + 0.5 }}
            className="h-px w-20 bg-white/40 mb-8 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: D + 0.7 }}
            className="text-white/60 max-w-md leading-relaxed mb-10 font-sans"
          >
            Коллекция мужских парфюмов ручной сборки. Чистые ноты, выверенные пропорции, стойкость до 12 часов.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: D + 0.9 }}
            className="flex flex-wrap gap-3 font-sans"
          >
            <a href="#catalog" className="px-9 py-3.5 bg-white text-black uppercase tracking-[0.25em] hover:bg-white/85 transition" style={{ fontSize: "11px" }}>
              Открыть каталог
            </a>
            <a href="#about" className="px-9 py-3.5 border border-white/30 text-white uppercase tracking-[0.25em] hover:border-white transition" style={{ fontSize: "11px" }}>
              О бренде
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: D, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: D + 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-white"
            >
              <Logo size={620} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: D + 1.2 }}
        className="flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30 uppercase tracking-[0.4em] font-sans"
          style={{ fontSize: "10px" }}
        >
          Прокрутите ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
