import { Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="bg-black text-white font-sans relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,87,51,0.03), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-4 gap-10 relative">
        <div className="md:col-span-1">
          <div
            className="font-serif text-white tracking-[0.2em] uppercase mb-4"
            style={{ fontSize: "22px" }}
          >
            Dee<span className="italic text-[#FF5733]">&</span>Abllo
          </div>
          <p
            className="text-white/40 leading-relaxed"
            style={{ fontSize: "13px" }}
          >
            Парфюмерный дом из Алматы. Мужские ароматы ручной сборки.
          </p>
        </div>
        <div>
          <div
            className="uppercase tracking-[0.3em] text-[#FF5733]/50 mb-4"
            style={{ fontSize: "11px" }}
          >
            Каталог
          </div>
          <ul className="space-y-2.5 text-white/50" style={{ fontSize: "13px" }}>
            {["Все ароматы", "Новинки", "Бестселлеры", "Подарочные наборы"].map(
              (x) => (
                <li key={x}>
                  <a href="#catalog" className="hover:text-[#FF5733] transition-colors">
                    {x}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <div
            className="uppercase tracking-[0.3em] text-[#FF5733]/50 mb-4"
            style={{ fontSize: "11px" }}
          >
            Помощь
          </div>
          <ul className="space-y-2.5 text-white/50" style={{ fontSize: "13px" }}>
            {["Доставка", "Оплата", "Возврат", "Подбор аромата"].map((x) => (
              <li key={x}>
                <a href="#" className="hover:text-[#FF5733] transition-colors">
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className="uppercase tracking-[0.3em] text-[#FF5733]/50 mb-4"
            style={{ fontSize: "11px" }}
          >
            Контакты
          </div>
          <ul className="space-y-2.5 text-white/50" style={{ fontSize: "13px" }}>
            <li>Алматы, ул. Абая 38</li>
            <li>+7 (700) 000-00-00</li>
            <li>hello@deeabllo.kz</li>
          </ul>
          <div className="flex gap-2 mt-5">
            <a
              href="#"
              className="w-10 h-10 glass flex items-center justify-center text-white/40 hover:text-[#FF5733] hover:glow-orange transition-all duration-300"
              style={{ borderRadius: 12 }}
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              className="w-10 h-10 glass flex items-center justify-center text-white/40 hover:text-[#FF5733] hover:glow-orange transition-all duration-300"
              style={{ borderRadius: 12 }}
            >
              <Send size={15} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="border-t border-white/5 py-5 text-center text-white/25 px-4 uppercase tracking-[0.3em]"
        style={{ fontSize: "10px" }}
      >
        © 2026 Dee&Abllo Maison de Parfum
      </div>
    </footer>
  );
}
