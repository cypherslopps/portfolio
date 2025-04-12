"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  )
}

