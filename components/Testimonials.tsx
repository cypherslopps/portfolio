"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/constants"


function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section id="testimonials" className="wrapper wrapper-overlay">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">
            Client Testimonials
          </h2>
          <p className="subHeaderText">What people say about working with me.</p>
        </motion.header>

        <div className="relative">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] shadow-md text-white/60 hover:text-white"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] shadow-md text-white/60 hover:text-white"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <Card className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-sm border-white/[0.08]">
                  <CardContent className="pt-6 px-6 pb-8">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <Avatar className="h-20 w-20 border-4 border-[#030303]">
                          <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                            {testimonials[activeIndex].name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    <blockquote className="text-center mb-6 italic text-white/60">
                      {`"${testimonials[activeIndex].content}"`}
                    </blockquote>

                    <div className="text-center">
                      <h4 className="font-semibold text-white/90">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-white/60">{testimonials[activeIndex].role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-gradient-to-r from-purple-500 to-cyan-500/20" : "w-2 bg-white/10"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;