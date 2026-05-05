import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Каталог", "О нас", "Контакты"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="sticky top-0 z-40"
    >
      <div className="mx-4 md:mx-8 mt-3">
        <div
          className="glass-strong"
          style={{ borderRadius: 60, padding: "0 8px" }}
        >
          <div className="h-16 flex items-center justify-between px-4 md:px-8">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white/70 hover:text-[#FF5733] transition"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <nav className="hidden md:flex gap-8 flex-1 font-sans">
              {links.map((l) => (
                <a
                  key={l}
                  href={l === "Каталог" ? "#catalog" : l === "О нас" ? "#about" : "#contacts"}
                  className="text-white/60 hover:text-[#FF5733] uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ fontSize: "12px" }}
                >
                  {l}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="font-serif text-white tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2"
              style={{ fontSize: "20px" }}
            >
              Dee<span className="italic text-[#FF5733]">&</span>Abllo
            </a>

            <div className="flex items-center gap-5 text-white/60 ml-6">
              <button className="hover:text-[#FF5733] transition-colors">
                <Search size={18} />
              </button>
              <button className="hover:text-[#FF5733] transition-colors relative">
                <ShoppingBag size={18} />
                <span
                  className="absolute -top-1.5 -right-1.5 bg-[#FF5733] text-white rounded-full w-4 h-4 flex items-center justify-center font-sans"
                  style={{ fontSize: "9px" }}
                >
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-4 mt-2 glass-strong px-6 py-5 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l}
              href={l === "Каталог" ? "#catalog" : l === "О нас" ? "#about" : "#contacts"}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-[#FF5733] uppercase tracking-[0.2em] transition font-sans"
              style={{ fontSize: "12px" }}
            >
              {l}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
