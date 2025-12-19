"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const staticText = "I develop modern web applications with a simple, clean, and effective approach."
const typingText = " I focus on a neat user interface and a reliable backend."

export function About() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let index = 0
    const typingSpeed = 25 // milliseconds per character

    const timer = setInterval(() => {
      if (index < typingText.length) {
        setDisplayedText(typingText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsTypingComplete(true)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [hasStarted])

  return (
    <SectionWrapper id="about" className="relative">
      {/* Ultra-Smooth Gradient Transition from Hero Section */}
      <div className="absolute top-0 left-0 right-0 h-[20vh] md:h-[30vh] -mt-10 md:-mt-20 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-background/10 via-20% via-background/25 via-35% via-background/45 via-50% via-background/65 via-65% via-background/85 via-80% to-background to-100%" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="space-y-2 md:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-muted/50 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="relative text-sm font-medium text-foreground">Hi, I am Afif Ramadhan</span>
            </div>
          </div>
        </motion.div>

        {/* Bio with Typing Animation */}
        <motion.div
          className="max-w-4xl md:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setHasStarted(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-foreground">
            {staticText}
            {displayedText}
            {/* Blue Blinking Cursor */}
            <span 
              className={`inline-block w-[3px] h-[1em] ml-1 align-middle bg-blue-500 ${
                isTypingComplete ? 'animate-pulse' : ''
              }`}
              style={{ 
                animation: isTypingComplete ? 'cursor-blink 1s infinite' : 'none'
              }}
            />
          </p>
        </motion.div>

        {/* Tech Stack Slider */}
        <motion.div
          className="w-full pt-4 md:pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
      </div>

      {/* Cursor Blink Animation */}
      <style jsx>{`
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </SectionWrapper>
  )
}
