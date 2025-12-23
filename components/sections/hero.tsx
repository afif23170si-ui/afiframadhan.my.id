"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { ArrowRight, Mail, Atom, Zap, Palette, FileCode, Server, Database, Globe, Cpu, Layers } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

const techStack = [
  { name: "Next.js", icon: Zap },
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: FileCode },
  { name: "Tailwind", icon: Palette },
  { name: "Node.js", icon: Server },
  { name: "Database", icon: Database },
  { name: "Cloud", icon: Globe },
  { name: "AI/ML", icon: Cpu },
  { name: "Laravel", icon: Layers },
]

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-32 pb-8 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Layout - Left on mobile, Center on desktop */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4 md:space-y-5 max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto"
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
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/[0.05] hover:bg-zinc-900 hover:border-white/[0.1] transition-all duration-300 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-white tracking-wide">Available for Work</span>
            </div>
          </motion.div>




          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 max-w-4xl lg:max-w-6xl 2xl:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Designing Premium Digital <br className="hidden md:block" /> Products That Matter
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
              className="group bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-500 hover:to-blue-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-full px-8 h-12 font-medium"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="group bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] text-foreground hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-full px-8 h-12 backdrop-blur-sm"
              asChild
            >
              <a href="mailto:afifr5092@gmail.com">
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Email Me
              </a>
            </Button>
          </motion.div>

          {/* Tech Stack Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 md:mt-20 w-full max-w-5xl mx-auto overflow-hidden"
          >

             
             <div className="relative flex overflow-hidden group select-none mask-gradient-x">
                <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
                   {[...techStack, ...techStack].map((tech, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                         <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-zinc-400 group-hover/item:text-white group-hover/item:bg-white/10 transition-colors">
                            <tech.icon className="w-5 h-5" />
                         </div>
                         <span className="text-sm font-medium text-zinc-400 group-hover/item:text-white transition-colors">{tech.name}</span>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>


          
          
          {/* Hero Project Slider & Profile Card */}
          {/* Moved outside this container specifically in the full return below */}


        </motion.div>


      </div>
    </section>
  )
}
