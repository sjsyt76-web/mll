import { motion } from "motion/react";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Slow wave overlay */}
      <motion.div
        animate={{ x: [-30, 30, -30], y: [-10, 10, -10] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 600px 400px at 30% 20%, #FF5733, transparent), radial-gradient(ellipse 500px 300px at 70% 80%, #FF5733, transparent)",
        }}
      />

      {/* Floating micro-particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${5 + Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255, ${60 + Math.random() * 80}, 51, ${0.15 + Math.random() * 0.25})`,
          }}
          animate={{
            y: [0, -600 - Math.random() * 400],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 12,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
