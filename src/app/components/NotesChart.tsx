import { motion } from "motion/react";

const warmBars = [
  { h: 85, color: "rgba(255,87,51,0.8)", label: "" },
  { h: 60, color: "rgba(255,120,51,0.5)", label: "" },
  { h: 45, color: "rgba(255,160,51,0.35)", label: "" },
  { h: 70, color: "rgba(255,87,51,0.65)", label: "" },
  { h: 55, color: "rgba(255,140,51,0.45)", label: "" },
  { h: 40, color: "rgba(255,87,51,0.3)", label: "" },
];

const coolBars = [
  { h: 50, color: "rgba(200,200,220,0.25)", label: "" },
  { h: 75, color: "rgba(200,200,220,0.15)", label: "" },
  { h: 40, color: "rgba(200,200,220,0.2)", label: "" },
  { h: 65, color: "rgba(255,87,51,0.35)", label: "" },
  { h: 55, color: "rgba(200,200,220,0.12)", label: "" },
  { h: 80, color: "rgba(255,87,51,0.25)", label: "" },
];

const labels = ["Верхние ноты", "Ноты сердца", "Базовые ноты"];

type Props = { variant: "warm" | "cool" };

export function NotesChart({ variant }: Props) {
  const bars = variant === "warm" ? warmBars : coolBars;

  return (
    <div>
      <div className="flex items-end justify-center gap-2 h-[100px]">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: b.h }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-3 rounded-t-sm relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${b.color}, rgba(255,255,255,0.03))`,
              border: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{
                background: variant === "warm"
                  ? "rgba(255,87,51,0.6)"
                  : "rgba(200,200,220,0.3)",
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-3">
        {labels.map((l) => (
          <span
            key={l}
            className="text-white/30 uppercase tracking-wider font-sans"
            style={{ fontSize: "8px" }}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
