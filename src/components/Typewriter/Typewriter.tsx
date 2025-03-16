"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./BlinkingCursor";

export default function TypeWriter({typedText, className}: {typedText: string, className?: string}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    typedText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, typedText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <div className={`subtitle text-black ${className}`}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </div>
  );
}
