import React from 'react'
import { Button } from '../ui/button'
import Icons from '../Icons'
import GrainImage from "@/assets/grain.jpg";

const Contact = () => {
  return (
    <section className="py-8 wrapper">
      <div className="w-11/12 mx-auto">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-black py-8 px-10 rounded-3xl relative z-0 overflow-hidden text-center md:text-left">
          <div 
            className="absolute inset-0 opacity-10 -z-10" 
            style={{
              backgroundImage: `url(${GrainImage.src})`
            }}
          />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold">Let's create something amazing together</h2>
              <p className="text-sm md:text-base mt-2 opacity-90">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <Button className="bg-gray-900 w-max px-6 border border-gray-950 h-12 rounded-xl gap-2">
              <span className="font-semibold">Contact Me</span>
              <Icons.arrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact