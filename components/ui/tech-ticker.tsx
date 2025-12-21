"use client"

import { motion } from "framer-motion"

const techs = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "PostgreSQL", "Prisma", "Figma"
]

export function TechTicker() {
  return (
    <div className="flex flex-col h-full justify-center gap-4">
      <div className="space-y-1 px-1">
        <h4 className="text-lg font-semibold text-foreground dark:text-white/90">Tech Stack</h4>
        <p className="text-muted-foreground dark:text-white/60 text-sm">Tools I use to build digital products.</p>
      </div>
      
      <div className="flex overflow-hidden relative w-full pt-4 mask-gradient-x">
        <motion.div 
          className="flex gap-3 pr-3 w-max"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 120, // Increased duration to make it slower (was 20)
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
            <span 
              key={`${tech}-${i}`}
              className="px-3 py-1.5 rounded-lg bg-secondary dark:bg-white/5 border border-border/50 dark:border-white/5 text-foreground/80 dark:text-white/70 text-xs font-medium hover:bg-secondary/80 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
