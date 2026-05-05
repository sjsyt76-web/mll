import { motion } from "motion/react";
import { LogoMark } from "./Logo";

export function CornerLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-30 hidden md:block"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
        className="rounded-full overflow-hidden"
      >
        <LogoMark size={110} />
      </motion.div>
    </motion.div>
  );
}
