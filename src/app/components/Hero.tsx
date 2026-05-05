import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const D = 2.6;

const slides = [
  {
    bg: "/images/hero1.jpg",
    accent: "rgba(255,87,51,0.10)",
    title: "Тёмная элегантность",
    subtitle: "коллекция 2025",
    desc: "Глубокий амбровый аккорд с ладаном и обсидианом. Создан для тех, кто правит в тишине.",
  },
  {
    bg: "/images/hero2.jpg",
    accent: "rgba(255,120,50,0.08)",
    title: "Сила характера",
    subtitle: "ручная сборка",
    desc: "Каждая композиция собирается вручную в нашем ателье в Алматы. Малые партии — чистое мастерство.",
  },
  {
    bg: "/images/hero3.jpg",
    accent: "rgba(255,87,51,0.06)",
    title: "Найди свой аромат",
    subtitle: "32 аромата",
    desc: "От дымных восточных до свежих цитрусовых. Стойкость до 12 часов. Бесплатный подбор.",
  },
];

/* ── Floating glass particles ── */
function GlassParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        dur: 12 + Math.random() * 18,
        delay: Math.random() * 8,
        opacity: 0.08 + Math.random() * 0.15,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255,87,51,${p.opacity}), transparent)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,87,51,${p.opacity * 0.5})`,
          }}
          animate={{
            y: [p.y * 6, p.y * 6 - 600],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── Caustic light overlay ── */
function CausticOverlay() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 30% 40% at 30% 50%, rgba(255,87,51,0.4), transparent),
          radial-gradient(ellipse 25% 35% at 70% 30%, rgba(255,140,80,0.3), transparent),
          radial-gradient(ellipse 35% 25% at 50% 80%, rgba(255,87,51,0.2), transparent)
        `,
        backgroundSize: "200% 200%",
      }}
    />
  );
}

/* ── Animated decorative ring ── */
function GlowRing() {
  return (
    <div className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
      <motion.svg
        width="340"
        height="340"
        viewBox="0 0 340 340"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, delay: D + 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <linearGradient id="ringGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,87,51,0.35)" />
            <stop offset="50%" stopColor="rgba(255,87,51,0.05)" />
            <stop offset="100%" stopColor="rgba(255,87,51,0.25)" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <motion.circle
          cx="170" cy="170" r="160"
          fill="none"
          stroke="url(#ringGrad1)"
          strokeWidth="0.8"
          strokeDasharray="8 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "170px 170px" }}
        />

        {/* Middle ring */}
        <motion.circle
          cx="170" cy="170" r="130"
          fill="none"
          stroke="url(#ringGrad2)"
          strokeWidth="0.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "170px 170px" }}
        />

        {/* Inner pulsing glow */}
        <motion.circle
          cx="170" cy="170" r="80"
          fill="none"
          stroke="rgba(255,87,51,0.12)"
          strokeWidth="1"
          animate={{ r: [78, 84, 78], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center dot */}
        <motion.circle
          cx="170" cy="170" r="3"
          fill="rgba(255,87,51,0.4)"
          animate={{ r: [2.5, 4, 2.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cardinal dots */}
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={angle}
              cx={170 + 160 * Math.cos(rad)}
              cy={170 + 160 * Math.sin(rad)}
              r="2"
              fill="rgba(255,87,51,0.3)"
            />
          );
        })}

        {/* Brand text around ring */}
        <text
          x="170" y="170"
          textAnchor="middle"
          dominantBaseline="central"
          fill="rgba(255,255,255,0.06)"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="11"
          letterSpacing="8"
        >
          DEE & ABLLO
        </text>
      </motion.svg>
    </div>
  );
}

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), D * 1000);
    return () => clearTimeout(t);
  }, []);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    if (!ready) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [ready, next]);

  const s = slides[idx];

  return (
    <section className="relative bg-black overflow-hidden h-screen">
      {/* BG image with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={s.bg} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.8) 85%, #000 100%),
                radial-gradient(ellipse 60% 50% at 25% 75%, ${s.accent}, transparent)
              `,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Caustic light */}
      <CausticOverlay />

      {/* Floating particles */}
      <GlassParticles />

      {/* Decorative ring */}
      <GlowRing />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* Subtitle label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`sub-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : -20 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block font-sans uppercase tracking-[0.4em] text-[#FF5733]/70 mb-5 border border-[#FF5733]/20 px-4 py-1.5"
              style={{ fontSize: "10px", borderRadius: 2 }}
            >
              {s.subtitle}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${idx}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 40 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-[1.0] mb-6 max-w-xl"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
              fontWeight: 400,
            }}
          >
            {s.title}
          </motion.h1>
        </AnimatePresence>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: ready ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] w-16 mb-6 origin-left"
          style={{ background: "#FF5733" }}
        />

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ready ? 0.45 : 0, y: ready ? 0 : 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white font-sans leading-relaxed mb-10 max-w-md"
            style={{ fontSize: "14px" }}
          >
            {s.desc}
          </motion.p>
        </AnimatePresence>

        {/* CTA + slide counter row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-8"
        >
          {/* CTA button — mercury style */}
          <a
            href="#catalog"
            className="group flex items-center gap-3 mercury-btn mercury-btn-active font-sans uppercase tracking-[0.25em] transition-all duration-500"
            style={{ fontSize: "11px", padding: "14px 32px", borderRadius: 50 }}
          >
            Смотреть каталог
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Slide progress */}
          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="relative h-[2px] transition-all duration-700 cursor-pointer"
                style={{
                  width: i === idx ? 48 : 20,
                  background: i === idx ? "#FF5733" : "rgba(255,255,255,0.15)",
                }}
              >
                {i === idx && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "#FF5733", transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={`progress-${idx}`}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Side vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6"
      >
        <div
          className="text-white/15 font-sans uppercase tracking-[0.5em] writing-vertical"
          style={{
            fontSize: "9px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Dee & Abllo · Maison de Parfum · Almaty
        </div>
      </motion.div>

      {/* Scrolling marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.04] bg-black/40 backdrop-blur-sm py-2.5"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-sans uppercase tracking-[0.3em] text-white/20 mx-10"
              style={{ fontSize: "10px" }}
            >
              <span className="text-[#FF5733]/40">◆</span>
              {" "}Ручная сборка{" "}
              <span className="text-[#FF5733]/40">◆</span>
              {" "}Стойкость 12ч{" "}
              <span className="text-[#FF5733]/40">◆</span>
              {" "}Доставка по КЗ{" "}
              <span className="text-[#FF5733]/40">◆</span>
              {" "}Бесплатный подбор{" "}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
