import { motion } from "motion/react";

const D = 2.6;

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,87,51,0.06), transparent 70%)",
        }}
      />

      {/* Subtle horizontal lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.5) 60px, rgba(255,255,255,0.5) 61px)",
        }}
      />

      {/* Animated slow wave */}
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[-10%] right-[-10%] h-[35%] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(255,87,51,0.05), transparent)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: D, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <BrandLogo />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: D + 0.5, ease: "easeInOut" }}
          className="h-[1px] w-28 mx-auto mb-10 origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, #FF5733, transparent)",
          }}
        />

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: D + 0.7 }}
          className="font-serif text-white leading-[1.1] mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontWeight: 400,
          }}
        >
          Ароматы, которые{" "}
          <span className="italic text-[#FF5733]/80">говорят за вас</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: D + 1 }}
          className="text-white/40 font-sans leading-relaxed mb-6 max-w-xl mx-auto"
          style={{ fontSize: "15px" }}
        >
          Dee&Abllo — независимый парфюмерный дом из Алматы. Мы создаём
          исключительно мужскую парфюмерию: каждая композиция собирается
          вручную, малыми партиями, без массового производства.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: D + 1.2 }}
          className="text-white/30 font-sans leading-relaxed mb-12 max-w-md mx-auto"
          style={{ fontSize: "13px" }}
        >
          Чистые ноты. Выверенные пропорции. Стойкость до 12 часов.
          Минимум флакона — максимум характера.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: D + 1.4 }}
          className="flex justify-center gap-12 md:gap-16 mb-14"
        >
          {[
            ["32", "аромата"],
            ["2021", "основан"],
            ["12ч", "стойкость"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div
                className="font-serif text-[#FF5733]"
                style={{ fontSize: "28px" }}
              >
                {val}
              </div>
              <div
                className="text-white/30 uppercase tracking-[0.2em] font-sans mt-1"
                style={{ fontSize: "9px" }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: D + 1.6 }}
        >
          <a
            href="#catalog"
            className="mercury-btn mercury-btn-active inline-block font-sans uppercase tracking-[0.3em] transition-all duration-500"
            style={{ fontSize: "11px", padding: "14px 40px", borderRadius: 50 }}
          >
            Смотреть каталог
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: D + 2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/20 uppercase tracking-[0.5em] font-sans"
            style={{ fontSize: "9px" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Brand Logo SVG ── */
function BrandLogo() {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF5733" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF5733" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wreathGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="50%" stopColor="rgba(255,87,51,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="110" cy="110" r="100" fill="url(#logoGlow)" />

      {/* Outer ring */}
      <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="110" cy="110" r="83" fill="none" stroke="rgba(255,87,51,0.12)" strokeWidth="0.5" />

      {/* Wreath — left */}
      <path
        d="M55,155 Q32,132 38,105 Q42,82 55,65 Q60,58 66,53"
        fill="none"
        stroke="url(#wreathGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60,148 Q42,130 46,107 Q49,88 60,75"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      <ellipse cx="44" cy="115" rx="7" ry="2.5" transform="rotate(-30 44 115)" fill="rgba(255,87,51,0.13)" />
      <ellipse cx="49" cy="93" rx="5.5" ry="2" transform="rotate(-20 49 93)" fill="rgba(255,87,51,0.1)" />
      <ellipse cx="57" cy="76" rx="5" ry="2" transform="rotate(-10 57 76)" fill="rgba(255,87,51,0.08)" />

      {/* Wreath — right */}
      <path
        d="M165,155 Q188,132 182,105 Q178,82 165,65 Q160,58 154,53"
        fill="none"
        stroke="url(#wreathGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M160,148 Q178,130 174,107 Q171,88 160,75"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />
      <ellipse cx="176" cy="115" rx="7" ry="2.5" transform="rotate(30 176 115)" fill="rgba(255,87,51,0.13)" />
      <ellipse cx="171" cy="93" rx="5.5" ry="2" transform="rotate(20 171 93)" fill="rgba(255,87,51,0.1)" />
      <ellipse cx="163" cy="76" rx="5" ry="2" transform="rotate(10 163 76)" fill="rgba(255,87,51,0.08)" />

      {/* Brand text */}
      <text x="110" y="100" textAnchor="middle" fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="26" letterSpacing="6" fontWeight="400">
        DEE
      </text>
      <text x="110" y="118" textAnchor="middle" fill="#FF5733" fontFamily="'Cormorant Garamond', serif" fontSize="20" fontStyle="italic">
        &amp;
      </text>
      <text x="110" y="140" textAnchor="middle" fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="26" letterSpacing="6" fontWeight="400">
        ABLLO
      </text>

      {/* Tagline */}
      <text x="110" y="164" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="'Inter', sans-serif" fontSize="7" letterSpacing="3.5">
        MAISON DE PARFUM
      </text>

      {/* Bottom dot */}
      <circle cx="110" cy="178" r="2" fill="rgba(255,87,51,0.25)" />
    </svg>
  );
}
