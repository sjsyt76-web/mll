import { motion } from "motion/react";
import logoSrc from "/src/imports/logo4_transparent.png";

type Props = { size?: number; animate?: boolean };

export function Logo({ size = 260, animate = true }: Props) {
  return (
    <motion.img
      src={logoSrc}
      alt="Dee & Abllo Parfums"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
      initial={animate ? { opacity: 0, scale: 0.85 } : undefined}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export function LogoMark({ size = 72, animate = true }: Props) {
  return <Logo size={size} animate={animate} />;
}
