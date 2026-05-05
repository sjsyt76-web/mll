import { motion } from "motion/react";

const sizes = [
  {
    ml: "5",
    title: "Pocket",
    desc: "Компактный флакон с серебристым колпачком. Помещается в карман, идеально для пробы аромата или поездок.",
    price: "от 4 900 ₸",
    h: 140,
    w: 46,
    cap: "silver",
    shape: "rect",
  },
  {
    ml: "10",
    title: "Travel",
    desc: "Высокий матовый флакон-роллер. Удобный формат на каждый день, хватает на 2–3 месяца ежедневного использования.",
    price: "от 7 900 ₸",
    h: 200,
    w: 44,
    cap: "matte",
    shape: "tall",
  },
  {
    ml: "30",
    title: "Maison",
    desc: "Авторский флакон с шариковой крышкой. Полноразмерный объём для тех, кто нашёл свой аромат.",
    price: "от 14 900 ₸",
    h: 220,
    w: 90,
    cap: "ball",
    shape: "wide",
  },
];

function Flacon({ s }: { s: (typeof sizes)[number] }) {
  return (
    <svg width={s.w + 30} height={s.h + 40} viewBox={`0 0 ${s.w + 30} ${s.h + 40}`}>
      <defs>
        <linearGradient id={`glass-${s.ml}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="0.4" stopColor="#0a0a0a" />
          <stop offset="0.6" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id={`silver-${s.ml}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9a9a9a" />
          <stop offset="0.5" stopColor="#e8e8e8" />
          <stop offset="1" stopColor="#6a6a6a" />
        </linearGradient>
      </defs>
      {(() => {
        const cx = (s.w + 30) / 2;
        const bodyY = 30;
        if (s.shape === "rect") {
          return (
            <>
              <rect x={cx - 7} y={6} width="14" height="14" fill={`url(#silver-${s.ml})`} />
              <rect x={cx - 5} y={20} width="10" height="10" fill="#222" />
              <rect x={cx - s.w / 2} y={bodyY} width={s.w} height={s.h - 30} fill={`url(#glass-${s.ml})`} stroke="#fff" strokeOpacity="0.08" />
              <rect x={cx - s.w / 2 + 6} y={bodyY + 32} width={s.w - 12} height={s.h - 90} fill="#f5f3ee" />
            </>
          );
        }
        if (s.shape === "tall") {
          return (
            <>
              <rect x={cx - 10} y={6} width="20" height="22" rx="2" fill="#1a1a1a" stroke="#fff" strokeOpacity="0.1" />
              <rect x={cx - s.w / 2} y={bodyY} width={s.w} height={s.h - 30} rx="2" fill="#0d0d0d" stroke="#fff" strokeOpacity="0.08" />
              <rect x={cx - s.w / 2 + 5} y={bodyY + s.h / 2 - 30} width={s.w - 10} height="60" fill="#f5f3ee" />
            </>
          );
        }
        return (
          <>
            <circle cx={cx} cy={20} r="18" fill="#0d0d0d" stroke="#fff" strokeOpacity="0.1" />
            <rect x={cx - 5} y={36} width="10" height="6" fill="#0d0d0d" />
            <rect x={cx - s.w / 2} y={bodyY + 12} width={s.w} height={s.h - 42} rx="3" fill={`url(#glass-${s.ml})`} stroke="#fff" strokeOpacity="0.1" />
            <rect x={cx - s.w / 2 + 10} y={bodyY + 50} width={s.w - 20} height="80" fill="#f5f3ee" />
          </>
        );
      })()}
    </svg>
  );
}

export function Bottles() {
  return (
    <section id="bottles" className="bg-black py-24 px-4 md:px-10 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, #fff, transparent 70%)"
      }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-white/40 uppercase tracking-[0.4em] mb-4 font-sans" style={{ fontSize: "11px" }}>Объёмы · Миллилитраж</div>
          <h2 className="font-serif text-white" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 400 }}>
            Три формата <span className="italic">флакона</span>
          </h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="h-px w-16 bg-white/40 mx-auto mt-6 origin-center" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {sizes.map((s, i) => (
            <motion.div
              key={s.ml}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-black p-10 flex flex-col items-center text-center group"
            >
              <div className="h-[260px] flex items-end justify-center mb-6 relative">
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.4 }}>
                  <Flacon s={s} />
                </motion.div>
                <div className="absolute -right-2 top-4 font-serif text-white/15" style={{ fontSize: "70px", lineHeight: 1 }}>
                  {s.ml}
                </div>
              </div>
              <div className="text-white/40 uppercase tracking-[0.3em] font-sans mb-2" style={{ fontSize: "10px" }}>
                {s.ml} ml · {s.title}
              </div>
              <h3 className="font-serif text-white mb-4" style={{ fontSize: "1.75rem", fontWeight: 400 }}>
                {s.ml}<span className="italic text-white/60"> ml</span>
              </h3>
              <p className="text-white/55 leading-relaxed font-sans mb-6 max-w-xs" style={{ fontSize: "13px" }}>
                {s.desc}
              </p>
              <div className="border-t border-white/15 pt-5 w-full">
                <div className="text-white font-sans" style={{ fontSize: "13px" }}>{s.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
