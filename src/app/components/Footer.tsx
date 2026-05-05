import { Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="font-serif text-white tracking-[0.2em] uppercase mb-4" style={{fontSize:"22px"}}>Dee<span className="italic">&</span>Abllo</div>
          <p className="text-white/55 leading-relaxed" style={{fontSize:"13px"}}>Парфюмерный дом из Алматы. Мужские ароматы ручной сборки.</p>
        </div>
        <div>
          <div className="uppercase tracking-[0.3em] text-white/40 mb-4" style={{fontSize:"11px"}}>Магазин</div>
          <ul className="space-y-2.5 text-white/75" style={{fontSize:"13px"}}>
            {["Каталог","Новинки","Бестселлеры","Подарочные наборы"].map(x => (
              <li key={x}><a href="#" className="hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="uppercase tracking-[0.3em] text-white/40 mb-4" style={{fontSize:"11px"}}>Помощь</div>
          <ul className="space-y-2.5 text-white/75" style={{fontSize:"13px"}}>
            {["Доставка","Оплата","Возврат","Подбор аромата"].map(x => (
              <li key={x}><a href="#" className="hover:text-white">{x}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="uppercase tracking-[0.3em] text-white/40 mb-4" style={{fontSize:"11px"}}>Контакты</div>
          <ul className="space-y-2.5 text-white/75" style={{fontSize:"13px"}}>
            <li>Алматы, ул. Абая 38</li>
            <li>+7 (700) 000-00-00</li>
            <li>hello@deeabllo.kz</li>
          </ul>
          <div className="flex gap-2 mt-5">
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center"><Instagram size={15} /></a>
            <a href="#" className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center"><Send size={15} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/40 px-4 uppercase tracking-[0.3em]" style={{fontSize:"10px"}}>
        © 2026 Dee&Abllo Maison de Parfum
      </div>
    </footer>
  );
}
