"use client";

import React from 'react'


import Image from "next/image";
import { motion } from "motion/react";
import { skills } from '@/lib/constants';

const SkillsTicker = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div 
          className="flex items-center gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%"
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {skills.map(({ title, Icon }) => (
            <figure 
              key={title}
              className="w-max flex flex-col gap-y-1 items-center"
            >
                <Image 
                  src={Icon}
                  alt={title}
                  className="shrink-0 size-10 sm:size-12" 
                />
                <span className="font-medium select-none">{title}</span>
            </figure>
          ))}

          {/* Second set of skills */}
          {skills.map(({ title, Icon }) => (
            <figure 
              key={title}
              className="w-max flex flex-col gap-y-1 items-center"
            >
                <Image 
                  src={Icon}
                  alt={title}
                  className="shrink-0 size-10 sm:size-12" 
                />
                <span className="font-medium select-none">{title}</span>
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsTicker