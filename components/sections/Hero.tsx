"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ElegantShape } from "@/components/ui/elegant-shape";
import { StarBorder } from "@/components/ui/star-border";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { FloatingGradient } from "@/components/ui/floating-gradient";
import { AnimatedText } from "@/components/ui/animated-text";
import { businessWhatsappLink, resumeLink } from "@/lib/constants";

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const subtitleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const buttonsOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#030303] pt-12 sm:pt-0"
    >
      {/* Particles Background */}
      <ParticlesBackground count={150} />

      {/* Floating Gradients */}
      <FloatingGradient
        colors={["#a855f7", "#06b6d4", "#7c3aed", "#0ea5e9"]}
        blur={120}
        opacity={0.07}
      />

      {/* Elegant Shapes with mouse parallax */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
      >
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-purple-500/15"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-cyan-500/[5]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl flex flex-col items-center"
        style={{
          y: titleY,
          opacity: titleOpacity,
        }}
      >
        <div className="mb-6 flex flex-col items-center">
          <AnimatedText
            text="Crafting Innovative"
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            animationType="wave"
            delay={0.1}
            duration={0.03}
          />
          <AnimatedText
            text="Digital Solutions"
            className="text-4xl sm:text-8xl font-bold tracking-tighter"
            animationType="wave"
            delay={0.3}
            duration={0.03}
            gradient={true}
            gradientColors="from-purple-300 via-white/90 to-cyan-300"
          />
        </div>

        <motion.p
          className="text-base sm:text-lg text-white/65 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto"
          style={{ opacity: subtitleOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I help teams automate workflows, integrate systems,
          <br />
          and build scalable software that reduces manual effort and accelerates
          business operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12 "
          style={{ opacity: buttonsOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <StarBorder
            color="#a855f7"
            speed="5s"
            className="group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            onClick={() => window.open(resumeLink, "_blank")}
          >
            <motion.span
              className="flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Resume
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.span>
          </StarBorder>

          <StarBorder
            color="#06b6d4"
            speed="7s"
            className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            btnClassName="bg-white text-black border-none"
            onClick={() => window.open(businessWhatsappLink, "_blank")}
          >
            <motion.span
              className="font-bold flex items-center gap-x-1.5"
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xl">👏</span>
              {"Let's"} connect
            </motion.span>
          </StarBorder>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}

export default Hero;
