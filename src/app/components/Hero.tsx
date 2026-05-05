import { motion } from "motion/react";
import { NotesChart } from "./NotesChart";

const D = 2.6;

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center">
      {/* Caustic light effect on floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] caustic-light pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,87,51,0.12), transparent)",
        }}
      />

      {/* Dark wave floor */}
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[-5%] right-[-5%] h-[30%] pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0,0,0,0.9), transparent), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 200\"><path d=\"M0,100 Q200,50 400,100 T800,100 L800,200 L0,200Z\" fill=\"rgba(255,87,51,0.05)\"/></svg>')",
          backgroundSize: "cover",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 md:py-28 w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: D }}
          className="text-center mb-6"
        >
          <div
            className="text-[#FF5733] uppercase tracking-[0.5em] mb-4 font-sans"
            style={{ fontSize: "13px" }}
          >
            Парфюмерный Магазин
          </div>
          <h1
            className="font-serif text-white leading-[0.95]"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: D + 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              Obsidian Collection
            </motion.span>
          </h1>
        </motion.div>

        {/* Main hero grid */}
        <div className="grid md:grid-cols-12 gap-6 items-center mt-12">
          {/* Left panel — Sample info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: D + 0.4 }}
            className="md:col-span-3 space-y-4"
          >
            <div className="glass px-5 py-4 cursor-pointer group hover:glow-orange transition-all duration-500">
              <div className="flex items-center justify-between">
                <span className="text-white/80 uppercase tracking-[0.15em] font-sans" style={{ fontSize: "13px" }}>
                  Название аромата
                </span>
                <span className="text-[#FF5733] group-hover:translate-x-1 transition-transform">&rsaquo;</span>
              </div>
            </div>
            <div className="glass px-5 py-4 cursor-pointer group hover:glow-orange transition-all duration-500">
              <div className="flex items-center justify-between">
                <span className="text-white/80 uppercase tracking-[0.15em] font-sans" style={{ fontSize: "13px" }}>
                  Пробный размер
                </span>
                <span className="text-[#FF5733] group-hover:translate-x-1 transition-transform">&rsaquo;</span>
              </div>
            </div>

            {/* Products Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: D + 0.7 }}
              className="glass p-5"
            >
              <div className="text-white uppercase tracking-[0.2em] font-sans mb-4" style={{ fontSize: "12px", fontWeight: 600 }}>
                Продукты
              </div>
              <NotesChart variant="warm" />
            </motion.div>
          </motion.div>

          {/* Center — Hero bottle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: D + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-6 flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Bottle glow */}
              <div
                className="absolute inset-0 pulse-glow rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,87,51,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  transform: "scale(1.5)",
                }}
              />
              {/* SVG Obsidian Bottle */}
              <ObsidianBottle />
            </div>
          </motion.div>

          {/* Right panel — Description & Notes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: D + 0.4 }}
            className="md:col-span-3 space-y-4"
          >
            <div className="glass p-5">
              <div className="text-white uppercase tracking-[0.2em] font-sans mb-3" style={{ fontSize: "12px", fontWeight: 600 }}>
                Описание
              </div>
              <p className="text-white/50 font-sans leading-relaxed" style={{ fontSize: "13px" }}>
                Ночная симфония пряностей и теней, созданная для тех, кто правит в темноте. Загадочный сплав специй и обсидиана.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-white uppercase tracking-[0.2em] font-sans mb-4" style={{ fontSize: "12px", fontWeight: 600 }}>
                Ноты
              </div>
              <NotesChart variant="cool" />
            </div>

            {/* Volume selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: D + 0.9 }}
              className="flex gap-3 justify-center"
            >
              {["30мл", "50мл", "100мл"].map((v, i) => (
                <button
                  key={v}
                  className={`mercury-btn font-sans ${i === 1 ? "mercury-btn-active" : ""}`}
                  style={{ fontSize: "13px", padding: "10px 22px" }}
                >
                  {v}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: D + 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/25 uppercase tracking-[0.5em] font-sans"
            style={{ fontSize: "10px" }}
          >
            Прокрутите ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ObsidianBottle() {
  return (
    <svg
      width="320"
      height="440"
      viewBox="0 0 320 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      <defs>
        <linearGradient id="bottleBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="30%" stopColor="#0a0a0a" />
          <stop offset="60%" stopColor="#1c1c1c" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="bottleHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="innerGlow" cx="50%" cy="55%" r="40%">
          <stop offset="0%" stopColor="#FF5733" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FF5733" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF5733" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cap */}
      <rect x="120" y="20" width="80" height="55" rx="6" fill="url(#capGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="126" y="26" width="68" height="8" rx="2" fill="rgba(255,255,255,0.06)" />

      {/* Neck */}
      <rect x="140" y="75" width="40" height="30" fill="#0d0d0d" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* Body */}
      <rect x="60" y="105" width="200" height="280" rx="12" fill="url(#bottleBody)" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />

      {/* Inner fire glow */}
      <rect x="70" y="115" width="180" height="260" rx="8" fill="url(#innerGlow)" filter="url(#glowFilter)">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
      </rect>

      {/* Glass highlight left edge */}
      <rect x="62" y="110" width="12" height="270" rx="4" fill="url(#bottleHighlight)" opacity="0.4" />

      {/* Glass highlight right */}
      <rect x="246" y="110" width="8" height="270" rx="4" fill="rgba(255,255,255,0.04)" />

      {/* Label area */}
      <rect x="100" y="200" width="120" height="80" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      <text x="160" y="232" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="'Cormorant Garamond', serif" fontSize="13" letterSpacing="3">DEE &amp; ABLLO</text>
      <text x="160" y="258" textAnchor="middle" fill="rgba(255,87,51,0.5)" fontFamily="'Cormorant Garamond', serif" fontSize="11" letterSpacing="2">OBSIDIAN</text>

      {/* Bottom reflection */}
      <ellipse cx="160" cy="400" rx="100" ry="15" fill="rgba(255,87,51,0.06)">
        <animate attributeName="rx" values="100;110;100" dur="6s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}
