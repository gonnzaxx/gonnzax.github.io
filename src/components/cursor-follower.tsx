"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorFollower() {
  const [visible, setVisible] = useState(false);

  const x = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
      style={{ x, y }}
    >
      <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/25 blur-[3px]" />
    </motion.div>
  );
}
