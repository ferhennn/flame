"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type CursorState = "default" | "view" | "arrow" | "drag";

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch || reduceMotion) return;

    document.documentElement.classList.add("cursor-none");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      setState((cursorTarget?.dataset.cursor as CursorState) || "default");
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [x, y, reduceMotion]);

  if (isTouch || reduceMotion) return null;

  const labels: Record<CursorState, string> = {
    default: "",
    view: "VIEW",
    arrow: "→",
    drag: "DRAG",
  };

  const label = labels[state];

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: state === "default" ? 1 : 1.6 }}
      transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="pointer-events-none fixed left-0 top-0 z-[70] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <div
        className={`flex items-center justify-center rounded-full border border-ink/70 bg-bg/40 backdrop-blur-[1px] transition-[width,height] duration-200 ${
          label ? "h-12 w-12" : "h-2.5 w-2.5"
        }`}
      >
        {label && (
          <span className="font-mono text-[9px] tracking-[0.15em] text-ink">{label}</span>
        )}
      </div>
    </motion.div>
  );
}
