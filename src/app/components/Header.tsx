import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Каталог", "Новинки", "Бестселлеры", "О бренде", "Доставка"];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-white/10"
    >
      <div className="bg-white text-black text-center py-1.5 tracking-[0.3em] uppercase font-sans" style={{ fontSize: "11px" }}>
        Бесплатная доставка по Казахстану от 20 000 ₸
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between relative">
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className="hidden md:flex gap-8 flex-1 font-sans">
          {links.slice(0, 3).map((l) => (
            <a key={l} href="#" className="text-white/70 hover:text-white uppercase tracking-[0.2em]" style={{ fontSize: "12px" }}>{l}</a>
          ))}
        </nav>
        <a href="#" className="font-serif text-white tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2" style={{ fontSize: "22px" }}>
          Dee<span className="italic">&</span>Abllo
        </a>
        <nav className="hidden md:flex gap-8 flex-1 justify-end font-sans">
          {links.slice(3).map((l) => (
            <a key={l} href="#" className="text-white/70 hover:text-white uppercase tracking-[0.2em]" style={{ fontSize: "12px" }}>{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-white ml-6">
          <button className="hover:opacity-60"><Search size={18} /></button>
          <button className="hover:opacity-60 relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-black rounded-full w-3.5 h-3.5 flex items-center justify-center font-sans" style={{ fontSize: "9px" }}>0</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-white/10 px-4 py-5 flex flex-col gap-4 bg-black font-sans">
          {links.map((l) => (
            <a key={l} href="#" className="text-white/70 uppercase tracking-[0.2em]" style={{ fontSize: "12px" }}>{l}</a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
