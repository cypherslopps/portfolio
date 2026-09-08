"use client";

import React from "react";

import Image from "next/image";
import { motion } from "motion/react";
import { skillCategories } from "@/lib/constants";

const SkillsTicker = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex items-center gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {skillCategories.map(({ title, skills }) => (
            <React.Fragment key={title}>
              {skills
                .filter((_, id) => id < 4)
                .map(({ title: skillTitle, Icon }) => (
                  <figure
                    key={skillTitle}
                    className="w-max flex flex-col gap-y-1 items-center"
                  >
                    <Image
                      src={Icon}
                      alt={skillTitle}
                      className="shrink-0 size-10 sm:size-12"
                    />
                    <span className="font-medium select-none">
                      {skillTitle}
                    </span>
                  </figure>
                ))}
            </React.Fragment>
          ))}

          {/* Second set of skills */}
          {skillCategories.map(({ title, skills }) => (
            <React.Fragment key={title}>
              {skills
                .filter((_, id) => id < 4)
                .map(({ title: skillTitle, Icon }) => (
                  <figure
                    key={skillTitle}
                    className="w-max flex flex-col gap-y-1 items-center"
                  >
                    <Image
                      src={Icon}
                      alt={skillTitle}
                      className="shrink-0 size-10 sm:size-12"
                    />
                    <span className="font-medium select-none">
                      {skillTitle}
                    </span>
                  </figure>
                ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsTicker;
