"use client";

import { useEffect, useRef } from "react";

/** Tracks 0..1 scroll progress across the full document, written into a ref to avoid re-renders. */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}
