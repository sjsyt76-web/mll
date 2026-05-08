import { motion } from "motion/react";

const items = [
  { icon: "I", title: "Ручная сборка", desc: "Каждый флакон собирается лично в ателье" },
  { icon: "II", title: "Стойкость 10–12ч", desc: "Концентрация экстракта 25–30%" },
  { icon: "III", title: "Доставка", desc: "По Казахстану 1–3 рабочих дня" },
  { icon: "IV", title: "Подбор аромата", desc: "Бесплатная консультация онлайн" },
];

export function Features() {
  return (
    <section className="relative bg-black py-20 px-4 md:px-10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(255,87,51,0.5), transparent 50%)",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.icon}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass p-6 text-center group hover:glow-orange transition-all duration-500 cursor-default"
            >
              <div
                className="font-serif text-[#FF5733]/50 mb-3 group-hover:text-[#FF5733] transition-colors"
                style={{ fontSize: "28px" }}
              >
                {item.icon}
              </div>
              <div
                className="font-serif text-white mb-2"
                style={{ fontSize: "17px" }}
              >
                {item.title}
              </div>
              <div
                className="text-white/40 font-sans leading-relaxed"
                style={{ fontSize: "12px" }}
              >
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
