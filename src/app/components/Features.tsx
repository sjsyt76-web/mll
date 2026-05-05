import { motion } from "motion/react";

const items = [
  ["I", "Ручная сборка", "Каждый флакон собирается лично в ателье"],
  ["II", "Стойкость 10–12ч", "Концентрация экстракта 25–30%"],
  ["III", "Доставка", "По Казахстану 1–3 рабочих дня"],
  ["IV", "Подбор аромата", "Бесплатная консультация онлайн"],
];

export function Features() {
  return (
    <section className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4">
        {items.map(([n, t, d], i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`px-6 py-6 ${i < 2 ? "border-b md:border-b-0" : ""} ${i === 2 ? "border-b md:border-b-0" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i !== 3 ? "md:border-r" : ""} border-white/10`}
          >
            <div className="font-serif text-white/30 mb-3" style={{ fontSize: "28px" }}>{n}</div>
            <div className="font-serif text-white mb-2" style={{ fontSize: "18px" }}>{t}</div>
            <div className="text-white/50 font-sans leading-relaxed" style={{ fontSize: "13px" }}>{d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
