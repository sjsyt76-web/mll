import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const D = 2.6;

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1920&q=90",
    title: "Тёмная\nэлегантность",
    desc: "Obsidian Elixir — аромат обсидиана и пламени. Глубокий амбровый аккорд с ладаном, созданный для тех, кто правит в тишине.",
    cta: "Смотреть каталог",
    href: "#catalog",
  },
  {
    bg: "https://images.unsplash.com/photo-1594035910387-fea081ae7aec?w=1920&q=90",
    title: "Сила\nхарактера",
    desc: "Каждая композиция собирается вручную в нашем ателье в Алматы. Малые партии, никакого массового производства — только чистое мастерство.",
    cta: "О бренде",
    href: "#about",
  },
  {
    bg: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1920&q=90",
    title: "Найди свой\nаромат",
    desc: "32 уникальных аромата — от дымных восточных до свежих цитрусовых. Стойкость до 12 часов. Бесплатная консультация и подбор.",
    cta: "Открыть каталог",
    href: "#catalog",
  },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), D * 1000);
    return () => clearTimeout(t);
  }, []);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (!ready) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [ready, next]);

  const s = slides[idx];

  return (
    <section className="relative bg-black overflow-hidden h-screen">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={s.bg}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Orange bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)",
            }}
          />
          {/* Subtle orange atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,87,51,0.08), transparent)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Title + Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${idx}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 30 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1
              className="font-serif text-white leading-[1.05] mb-6 whitespace-pre-line"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                fontWeight: 400,
              }}
            >
              {s.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="italic">{line}</span>
                  ) : (
                    line
                  )}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            <p
              className="text-white/50 font-sans leading-relaxed mb-10 max-w-lg"
              style={{ fontSize: "15px" }}
            >
              {s.desc}
            </p>

            {/* CTA — circular button like selectparfums */}
            <a
              href={s.href}
              className="group inline-flex items-center gap-4"
            >
              <div
                className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-white/20 flex items-center justify-center text-white/70 font-sans uppercase tracking-[0.15em] transition-all duration-500 group-hover:border-[#FF5733] group-hover:text-[#FF5733] group-hover:shadow-[0_0_30px_rgba(255,87,51,0.2)]"
                style={{ fontSize: "11px" }}
              >
                {s.cta}
              </div>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Bottom bar: slide counter + nav arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 md:bottom-12 right-6 md:right-16 flex items-center gap-5"
        >
          {/* Counter */}
          <div className="flex items-baseline gap-1 font-serif">
            <span className="text-[#FF5733]" style={{ fontSize: "36px" }}>
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30" style={{ fontSize: "14px" }}>
              /{String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#FF5733] hover:text-[#FF5733] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-[#FF5733] hover:text-[#FF5733] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="h-[3px] rounded-full transition-all duration-500"
              style={{
                width: i === idx ? 32 : 12,
                background:
                  i === idx ? "#FF5733" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scrolling marquee — promo ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden bg-[#FF5733] py-2.5"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-sans uppercase tracking-[0.2em] text-white mx-8"
              style={{ fontSize: "12px" }}
            >
              Ручная сборка · Стойкость 12ч · Доставка по КЗ 1–3 дня · Бесплатный подбор аромата
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
