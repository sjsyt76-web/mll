import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Intro() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative text-center font-serif text-white">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="uppercase"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              Dee<span className="italic">&</span>Abllo
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="h-px bg-white/50 mx-auto mt-4 origin-center"
              style={{ width: "60%" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="uppercase tracking-[0.5em] text-white/50 mt-4 font-sans"
              style={{ fontSize: "10px" }}
            >
              Maison de Parfum
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
