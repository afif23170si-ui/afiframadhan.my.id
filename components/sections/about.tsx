"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function About() {
  return (
    <SectionWrapper id="about" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center">
        <div className="w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] translate-y-[-50px]" />
        <div className="w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px] absolute translate-x-[100px] translate-y-[50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-background/50 backdrop-blur-md rounded-full shadow-sm overflow-hidden ring-1 ring-border/50">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px] opacity-50">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="relative text-sm font-medium text-foreground">Hi, I am Afif Ramadhan</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading text-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I craft high-performance web applications that blend <span className="text-muted-foreground">robust engineering</span> with <span className="text-muted-foreground">premium design</span>, creating digital products that drive real business growth.
          </motion.h2>

          {/* Bottom Stats/Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "10+ Projects completed",
              "3+ Years of Experience",
              "Trusted by founders"
            ].map((text, i) => (
              <div key={i} className="group relative px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
                 <span className="text-xs md:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
