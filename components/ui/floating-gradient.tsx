"use client";

import { useMemo, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingGradientProps {
  className?: string;
  colors?: string[];
  blur?: number;
  speed?: number;
  opacity?: number;
}

const seededRange = (seed: number, min: number, max: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453123;
  const normalized = value - Math.floor(value);
  return min + normalized * (max - min);
};

export function FloatingGradient({
  className = "",
  colors = ["#a855f7", "#06b6d4", "#7c3aed", "#0ea5e9"],
  blur = 100,
  speed = 20,
  opacity = 0.15,
}: FloatingGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurVal = useMemo(() => `blur(${blur}px)`, [blur]);

  const gradients = useMemo(
    () =>
      colors.map((color, index) => ({
        color,
        x: [
          `${seededRange(index + 1, -25, 25)}%`,
          `${seededRange(index + 2, -25, 25)}%`,
          `${seededRange(index + 3, -25, 25)}%`,
          `${seededRange(index + 4, -25, 25)}%`,
        ],
        y: [
          `${seededRange(index + 5, -25, 25)}%`,
          `${seededRange(index + 6, -25, 25)}%`,
          `${seededRange(index + 7, -25, 25)}%`,
          `${seededRange(index + 8, -25, 25)}%`,
        ],
        initialX: `${seededRange(index + 9, -50, 50)}%`,
        initialY: `${seededRange(index + 10, -50, 50)}%`,
        initialWidth: `${seededRange(index + 11, 20, 60)}%`,
        initialHeight: `${seededRange(index + 12, 20, 60)}%`,
      })),
    [colors],
  );

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      ref={containerRef}
    >
      {gradients.map(
        (
          { color, x, y, initialX, initialY, initialWidth, initialHeight },
          index,
        ) => (
          <motion.div
            key={`${color}-${index}`}
            className="absolute rounded-full"
            style={{
              background: color,
              filter: blurVal,
              opacity,
            }}
            animate={{
              x,
              y,
              scale: [1, 1.1, 0.9, 1.2, 1],
            }}
            transition={{
              duration: speed + index * 5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            initial={{
              x: initialX,
              y: initialY,
              width: initialWidth,
              height: initialHeight,
            }}
          />
        ),
      )}
    </div>
  );
}
