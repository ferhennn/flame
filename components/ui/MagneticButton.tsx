"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  cursor?: "default" | "view" | "arrow" | "drag";
  type?: "button" | "submit" | "reset";
};

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.25,
  cursor = "arrow",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref as never}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={className}
      data-cursor={cursor}
    >
      {children}
    </Tag>
  );
}
