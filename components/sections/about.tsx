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
      <div className="absolute top-0 left-0 right-0 h-[40vh] md:h-[70vh] -mt-20 md:-mt-56 pointer-events-none">
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
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a creative soul.
          </p>
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
