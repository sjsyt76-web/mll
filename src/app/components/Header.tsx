import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Каталог", "О нас", "Контакты"];
  const cart = useCart();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="fixed top-0 left-0 right-0 z-40"
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

            {/* Logo — monogram D&A */}
            <a
              href="#"
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3"
            >
              <HeaderLogo />
            </a>

            <div className="flex items-center gap-5 text-white/60 ml-6">
              <button className="hover:text-[#FF5733] transition-colors">
                <Search size={18} />
              </button>
              <button
                onClick={() => cart.setOpen(true)}
                className="hover:text-[#FF5733] transition-colors relative"
              >
                <ShoppingBag size={18} />
                {cart.count > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 bg-[#FF5733] text-white rounded-full w-4 h-4 flex items-center justify-center font-sans"
                    style={{ fontSize: "9px" }}
                  >
                    {cart.count}
                  </span>
                )}
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
          style={{ borderRadius: 20 }}
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

function HeaderLogo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hLogoRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,87,51,0.5)" />
          <stop offset="100%" stopColor="rgba(255,87,51,0.15)" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="22" cy="22" r="20" fill="none" stroke="url(#hLogoRing)" strokeWidth="1.2" />
      {/* Inner ring */}
      <circle cx="22" cy="22" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* D */}
      <text x="15" y="21" textAnchor="middle" fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="11" fontWeight="500" letterSpacing="1">
        D
      </text>
      {/* & */}
      <text x="22" y="27" textAnchor="middle" fill="#FF5733" fontFamily="'Cormorant Garamond', serif" fontSize="8" fontStyle="italic">
        &amp;
      </text>
      {/* A */}
      <text x="29" y="31" textAnchor="middle" fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="11" fontWeight="500" letterSpacing="1">
        A
      </text>
    </svg>
  );
}
