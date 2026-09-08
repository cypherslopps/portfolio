"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { skillCategories } from "@/lib/constants";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const SkillsDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="w-full mt-6 mx-auto flex justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            View all skills
            <ChevronDown className="w-4 h-4" />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border scrollbar-hide">
          <div className="grid gap-8 mt-6">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(max-content,1fr))] md:grid-cols-[repeat(4,minmax(max-content,1fr))] gap-3">
                  {category.skills.map(({ title, Icon }) => (
                    <div
                      key={title}
                      className="flex items-center justify-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Image
                        src={Icon}
                        alt={title}
                        className="shrink-0 size-10 sm:size-12"
                      />
                      <span className="text-sm font-medium">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SkillsDialog;
