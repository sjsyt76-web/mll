import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Intro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(255,87,51,0.4), transparent 60%)",
            }}
          />

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.1em", scale: 0.9 }}
              animate={{ opacity: 1, letterSpacing: "0.5em", scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="uppercase font-serif text-white"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Dee<span className="italic text-[#FF5733]">&</span>Abllo
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="h-[2px] mx-auto mt-5 origin-center"
              style={{
                width: "60%",
                background: "linear-gradient(90deg, transparent, #FF5733, transparent)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="uppercase tracking-[0.6em] text-white/40 mt-5 font-sans"
              style={{ fontSize: "11px" }}
            >
              Maison de Parfum
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
