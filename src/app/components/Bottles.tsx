import { motion } from "motion/react";

const sizes = [
  {
    ml: "5мл",
    title: "Pocket",
    desc: "Компактный флакон с серебристым колпачком. Помещается в карман, идеально для пробы аромата.",
    price: "от 4 900 ₸",
    h: 120,
    color: "rgba(255,87,51,0.3)",
  },
  {
    ml: "10мл",
    title: "Travel",
    desc: "Высокий матовый флакон-роллер. Удобный формат на каждый день, хватает на 2–3 месяца.",
    price: "от 7 900 ₸",
    h: 180,
    color: "rgba(255,87,51,0.5)",
  },
  {
    ml: "30мл",
    title: "Maison",
    desc: "Авторский флакон с шариковой крышкой. Полноразмерный объём для тех, кто нашёл свой аромат.",
    price: "от 14 900 ₸",
    h: 220,
    color: "rgba(255,87,51,0.7)",
  },
];

export function Bottles() {
  return (
    <section
      id="bottles"
      className="bg-black py-24 px-4 md:px-10 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,87,51,0.03), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="text-[#FF5733] uppercase tracking-[0.5em] mb-4 font-sans"
            style={{ fontSize: "11px" }}
          >
            Объёмы · Миллилитраж
          </div>
          <h2
            className="font-serif text-white"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              fontWeight: 400,
            }}
          >
            Три формата <span className="italic">флакона</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="h-[2px] w-16 mx-auto mt-6 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FF5733, transparent)",
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {sizes.map((s, i) => (
            <motion.div
              key={s.ml}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass p-8 flex flex-col items-center text-center group hover:glow-orange transition-all duration-500 cursor-default"
            >
              {/* Stylized bottle SVG */}
              <div className="h-[260px] flex items-end justify-center mb-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    width="80"
                    height={s.h}
                    viewBox={`0 0 80 ${s.h}`}
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`bottle-${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="50%" stopColor="#0a0a0a" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                    </defs>
                    {/* Cap */}
                    <rect
                      x="28"
                      y="0"
                      width="24"
                      height="18"
                      rx="4"
                      fill="#1a1a1a"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />
                    {/* Neck */}
                    <rect
                      x="34"
                      y="18"
                      width="12"
                      height="12"
                      fill="#0d0d0d"
                    />
                    {/* Body */}
                    <rect
                      x="8"
                      y="30"
                      width="64"
                      height={s.h - 30}
                      rx="6"
                      fill={`url(#bottle-${i})`}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                    {/* Inner glow */}
                    <rect
                      x="12"
                      y={s.h - 60}
                      width="56"
                      height="50"
                      rx="4"
                      fill={s.color}
                      opacity="0.4"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.5;0.3"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    {/* Highlight */}
                    <rect
                      x="10"
                      y="32"
                      width="6"
                      height={s.h - 40}
                      rx="3"
                      fill="rgba(255,255,255,0.06)"
                    />
                  </svg>
                </motion.div>
              </div>

              <div
                className="text-[#FF5733]/70 font-sans mb-2 tracking-[0.3em] uppercase"
                style={{ fontSize: "11px" }}
              >
                {s.ml}
              </div>
              <div
                className="font-serif text-white mb-2"
                style={{ fontSize: "22px" }}
              >
                {s.title}
              </div>
              <p
                className="text-white/40 font-sans leading-relaxed mb-4"
                style={{ fontSize: "13px" }}
              >
                {s.desc}
              </p>
              <div
                className="text-white/60 font-sans tracking-wider"
                style={{ fontSize: "14px" }}
              >
                {s.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
