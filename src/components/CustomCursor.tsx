"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const x = useSpring(0, { stiffness: 300, damping: 28 });
  const y = useSpring(0, { stiffness: 300, damping: 28 });
  const trailX = useSpring(0, { stiffness: 150, damping: 20 });
  const trailY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", checkHover, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [x, y, trailX, trailY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 48 : 20,
          height: hovering ? 48 : 20,
          background: "rgba(15, 240, 160, 0.08)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 16 : 8,
          height: hovering ? 16 : 8,
          background: "#0FF0A0",
          boxShadow: "0 0 12px rgba(15, 240, 160, 0.6)",
          transition: "width 0.15s, height 0.15s",
        }}
      />
    </>
  );
}
