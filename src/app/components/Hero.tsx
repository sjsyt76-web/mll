import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const D = 2.6;

const slides = [
  {
    gradient: `
      radial-gradient(ellipse 70% 60% at 70% 40%, rgba(255,87,51,0.12), transparent 70%),
      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(255,60,30,0.08), transparent),
      radial-gradient(ellipse 80% 80% at 50% 50%, rgba(15,10,8,1), #000)
    `,
    title: "Тёмная элегантность",
    subtitle: "коллекция 2025",
    desc: "Глубокий амбровый аккорд с ладаном и обсидианом. Создан для тех, кто правит в тишине.",
  },
  {
    gradient: `
      radial-gradient(ellipse 60% 50% at 30% 60%, rgba(255,100,40,0.1), transparent 60%),
      radial-gradient(ellipse 40% 60% at 80% 30%, rgba(255,87,51,0.06), transparent),
      radial-gradient(ellipse 90% 90% at 50% 50%, rgba(10,8,6,1), #000)
    `,
    title: "Сила характера",
    subtitle: "ручная сборка",
    desc: "Каждая композиция собирается вручную в нашем ателье в Алматы. Малые партии — чистое мастерство.",
  },
  {
    gradient: `
      radial-gradient(ellipse 50% 70% at 50% 30%, rgba(255,87,51,0.09), transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 70%, rgba(255,120,60,0.07), transparent),
      radial-gradient(ellipse 80% 80% at 50% 50%, rgba(12,8,5,1), #000)
    `,
    title: "Найди свой аромат",
    subtitle: "17 ароматов",
    desc: "От дымных восточных до свежих цитрусовых. Стойкость до 12 часов. Бесплатный подбор.",
  },
];

/* ── Floating embers ── */
function FloatingEmbers() {
  const embers = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: 100 + Math.random() * 20,
        size: 1.5 + Math.random() * 3,
        dur: 10 + Math.random() * 15,
        delay: Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.35,
        drift: -30 + Math.random() * 60,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.x}%`,
            width: e.size,
            height: e.size,
            background: `rgba(255,87,51,${e.opacity})`,
            boxShadow: `0 0 ${e.size * 3}px rgba(255,87,51,${e.opacity * 0.6})`,
          }}
          animate={{
            y: [`${e.startY}vh`, "-10vh"],
            x: [0, e.drift],
            opacity: [0, e.opacity, e.opacity * 0.8, 0],
          }}
          transition={{
            duration: e.dur,
            repeat: Infinity,
            delay: e.delay,
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
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 30% 40% at 30% 50%, rgba(255,87,51,0.5), transparent),
          radial-gradient(ellipse 25% 35% at 70% 30%, rgba(255,140,80,0.4), transparent),
          radial-gradient(ellipse 35% 25% at 50% 80%, rgba(255,87,51,0.3), transparent)
        `,
        backgroundSize: "200% 200%",
      }}
    />
  );
}

/* ── Animated obsidian orb ── */
function ObsidianOrb() {
  return (
    <div className="absolute right-[10%] top-1/2 -translate-y-[55%] hidden lg:block pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: D + 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
          <defs>
            <radialGradient id="orbCore" cx="45%" cy="40%" r="50%">
              <stop offset="0%" stopColor="rgba(255,87,51,0.15)" />
              <stop offset="40%" stopColor="rgba(255,60,30,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="orbSheen" cx="35%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,87,51,0.3)" />
              <stop offset="50%" stopColor="rgba(255,87,51,0.05)" />
              <stop offset="100%" stopColor="rgba(255,87,51,0.2)" />
            </linearGradient>
          </defs>

          {/* Outer rotating ring */}
          <motion.circle
            cx="180" cy="180" r="170"
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth="0.6"
            strokeDasharray="6 14"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />

          {/* Second ring */}
          <motion.circle
            cx="180" cy="180" r="145"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.4"
            strokeDasharray="3 20"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "180px 180px" }}
          />

          {/* Inner glass sphere */}
          <circle cx="180" cy="180" r="110" fill="url(#orbCore)" />
          <circle cx="180" cy="180" r="110" fill="url(#orbSheen)" />
          <circle cx="180" cy="180" r="110" fill="none" stroke="rgba(255,87,51,0.08)" strokeWidth="1" />

          {/* Highlight arc */}
          <path
            d="M120,130 Q150,90 200,100"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Inner pulse */}
          <motion.circle
            cx="180" cy="180" r="60"
            fill="none"
            stroke="rgba(255,87,51,0.1)"
            strokeWidth="0.8"
            animate={{ r: [58, 65, 58], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Core glow */}
          <motion.circle
            cx="180" cy="175" r="20"
            fill="rgba(255,87,51,0.08)"
            animate={{ r: [18, 24, 18], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating dots on ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={angle}
                cx={180 + 170 * Math.cos(rad)}
                cy={180 + 170 * Math.sin(rad)}
                r="1.5"
                fill={`rgba(255,87,51,${angle % 90 === 0 ? 0.35 : 0.15})`}
              />
            );
          })}
        </svg>

        {/* Center brand mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: D + 1.5 }}
            className="text-center"
          >
            <div
              className="font-serif text-white/[0.07] uppercase tracking-[0.6em]"
              style={{ fontSize: "10px" }}
            >
              Est. 2021
            </div>
          </motion.div>
        </div>
      </motion.div>
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
      {/* Gradient background per slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ backgroundImage: s.gradient }}
        />
      </AnimatePresence>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <CausticOverlay />
      <FloatingEmbers />
      <ObsidianOrb />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-28 px-5 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* Subtitle badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`sub-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: ready ? 1 : 0, x: ready ? 0 : -20 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block font-sans uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#FF5733]/70 mb-3 md:mb-5 border border-[#FF5733]/20 px-3 md:px-4 py-1 md:py-1.5"
              style={{ fontSize: "9px", borderRadius: 2 }}
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
            className="font-serif text-white leading-[1.05] mb-4 md:mb-6 max-w-xl"
            style={{
              fontSize: "clamp(2rem, 6.5vw, 5rem)",
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
          className="h-[2px] w-12 md:w-16 mb-4 md:mb-6 origin-left"
          style={{ background: "#FF5733" }}
        />

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ready ? 0.4 : 0, y: ready ? 0 : 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white font-sans leading-relaxed mb-6 md:mb-10 max-w-md"
            style={{ fontSize: "13px" }}
          >
            {s.desc}
          </motion.p>
        </AnimatePresence>

        {/* CTA + progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <a
            href="#catalog"
            className="group flex items-center gap-2 md:gap-3 mercury-btn mercury-btn-active font-sans uppercase tracking-[0.15em] md:tracking-[0.25em] transition-all duration-500"
            style={{ fontSize: "10px", padding: "12px 24px", borderRadius: 50 }}
          >
            Смотреть каталог
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Progress indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="relative h-[2px] transition-all duration-700 cursor-pointer"
                style={{
                  width: i === idx ? 48 : 16,
                  background: i === idx ? "transparent" : "rgba(255,255,255,0.12)",
                }}
              >
                {i === idx && (
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "#FF5733", transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={`p-${idx}`}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Side branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 pointer-events-none"
      >
        <div
          className="text-white/10 font-sans uppercase tracking-[0.5em]"
          style={{
            fontSize: "9px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Dee & Abllo · Parfum · Almaty
        </div>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.04] bg-black/50 backdrop-blur-sm py-2.5"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/15 mx-6 md:mx-10"
              style={{ fontSize: "9px" }}
            >
              <span className="text-[#FF5733]/30">◆</span>
              {" "}Ручная сборка{" "}
              <span className="text-[#FF5733]/30">◆</span>
              {" "}Стойкость 12ч{" "}
              <span className="text-[#FF5733]/30">◆</span>
              {" "}Доставка по КЗ{" "}
              <span className="text-[#FF5733]/30">◆</span>
              {" "}Бесплатный подбор{" "}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
