"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface FloatingGradientProps {
  className?: string
  colors?: string[]
  blur?: number
  speed?: number
  opacity?: number
}

export function FloatingGradient({
  className = "",
  colors = ["#a855f7", "#06b6d4", "#7c3aed", "#0ea5e9"],
  blur = 100,
  speed = 20,
  opacity = 0.15,
}: FloatingGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blurVal = `blur(${blur}px)`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} ref={containerRef}>
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            background: color,
            filter: blurVal,
            opacity: opacity,
          }}
          animate={{
            x: [
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
            ],
            y: [
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
              `${Math.random() * 50 - 25}%`,
            ],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: speed + index * 5,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          initial={{
            x: `${Math.random() * 100 - 50}%`,
            y: `${Math.random() * 100 - 50}%`,
            width: `${Math.random() * 40 + 20}%`,
            height: `${Math.random() * 40 + 20}%`,
          }}
        />
      ))}
    </div>
  )
}

