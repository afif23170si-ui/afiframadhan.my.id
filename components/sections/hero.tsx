"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { ArrowRight, Mail } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-28 pb-8 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Layout - Left on mobile, Center on desktop */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4 md:space-y-5 max-w-3xl mx-auto"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-foreground">Available for new projects</span>
            </div>
          </motion.div>




          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading tracking-tighter leading-[1.1] text-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Designing Digital Products
            <span className="text-muted-foreground/80 font-normal italic ml-3">That Matter</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
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
              className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-full px-6 md:px-8 h-12"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="group bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 rounded-full px-6 md:px-8 h-12 shadow-none"
              asChild
            >
              <a href="mailto:afifr5092@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </motion.div>


          
          
          {/* Hero Project Slider & Profile Card */}
          {/* Moved outside this container specifically in the full return below */}


        </motion.div>

        {/* Hero Project Slider & Profile Card */}
        <motion.div 
          className="w-full relative mt-40 md:mt-52 mb-52 md:mb-56 select-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Background Infinite Slider */}
          <div className="relative flex overflow-hidden w-full mask-gradient">
            {/* Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

              <motion.div
                className="flex gap-6 md:gap-8 items-center"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
              {/* Triple the list for smoother infinite loop */}
              {[...projects, ...projects, ...projects].map((project, i) => (
                <div 
                  key={`${project.id}-${i}`} 
                  className="relative w-[280px] h-[180px] md:w-[380px] md:h-[250px] shrink-0 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 280px, 380px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Foreground Central Card - Profile/Album */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              className="relative group"
              initial={{ scale: 1.1 }} // Slightly larger initially
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              
              {/* Card Container */}
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[520px] rounded-[20px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black">
                  <video 
                    src="/videos/mockup-album.webm" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full"
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 8) {
                        e.currentTarget.currentTime = 0
                      }
                    }}
                  />
                  
                  {/* Optional overlay text/content inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    {/* <span className="text-white font-bold text-lg">Afif R.</span> */}
                    {/* <span className="text-white/70 text-xs">Portfolio 2025</span> */}
                  </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
