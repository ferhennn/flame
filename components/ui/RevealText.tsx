"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type RevealTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion.create(Tag);

  return (
    <div className={`overflow-hidden ${className}`}>
      <MotionTag
        initial={{ y: reduceMotion ? 0 : "100%", opacity: reduceMotion ? 0 : 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
