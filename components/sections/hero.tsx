"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-[auto] md:min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 pb-8 md:py-0 pt-32 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Layout - Left on mobile, Center on desktop */}
        <motion.div
          className="flex flex-col items-center text-center space-y-5 md:space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge - Stacked Vertically */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm hover:bg-background/80 transition-colors duration-300">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-muted-foreground/90">Available for new projects</span>
            </div>
          </motion.div>




          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading tracking-tighter leading-[1.1] text-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            I design & build digital products people actually
            <span className="text-muted-foreground/80 font-normal italic ml-3">enjoy using.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Full Stack Developer focused on building fast, clean, and user-friendly web solutions that drive results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-full px-6 md:px-8 shadow-lg h-12"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 rounded-full px-6 md:px-8 h-12 shadow-lg"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Tech Stack Slider */}
          <motion.div
            className="w-full pt-8 md:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Tech Stack</p> */}
            <div className="relative overflow-hidden w-full max-w-md md:max-w-lg mx-auto md:mx-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
              
              {/* Sliding container */}
              <motion.div
                className="flex gap-8 items-center"
                animate={{ x: [0, -600] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-8 items-center shrink-0">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-8 h-8 opacity-50 hover:opacity-100 transition-all duration-300 dark:invert" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-8 h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
