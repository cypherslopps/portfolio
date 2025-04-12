"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  animationType?: "wave" | "typewriter" | "bounce" | "fade"
  delay?: number
  duration?: number
  gradient?: boolean
  gradientColors?: string
}

export function AnimatedText({
  text,
  className,
  once = true,
  animationType = "wave",
  delay = 0,
  duration = 0.05,
  gradient = false,
  gradientColors = "from-purple-400 to-cyan-400",
}: AnimatedTextProps) {
  // Split text into words and characters
  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    wave: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
    typewriter: {
      hidden: {
        opacity: 0,
        x: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
    bounce: {
      hidden: {
        opacity: 0,
        y: 20,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 8,
          stiffness: 100,
        },
      },
    },
    fade: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    },
  }

  const selectedAnimation = child[animationType]

  return (
    <motion.div
      className="flex flex-wrap"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="mr-2 mb-2 inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={selectedAnimation}
              className={cn(
                gradient ? `bg-clip-text text-transparent bg-gradient-to-r ${gradientColors}` : "",
                className,
              )}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

