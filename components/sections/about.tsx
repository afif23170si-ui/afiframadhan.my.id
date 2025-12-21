"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function About() {
  return (
    <SectionWrapper id="about" className="pt-28 pb-20 md:py-32 bg-muted/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Bio Card */}
          <motion.div 
            className="lg:col-span-5 bg-black dark:bg-[#0a0a0a] rounded-2xl p-5 md:p-6 flex flex-col justify-between lg:min-h-[500px] text-white relative overflow-hidden group shadow-[15px_20px_50px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <div className="space-y-4 relative z-10">
               <div>
                 <h3 className="text-xl md:text-2xl font-heading font-bold">I'm Afif Ramadhan</h3>

               </div>
               
               <p className="text-white/80 leading-normal text-base md:text-lg font-light">
                 A full stack developer with a passion for crafting digital experiences that are functional, beautiful, and human. With a background in design and engineering, I bring a thoughtful balance of creativity and technical skill to every project.
               </p>
             </div>

             <div className="relative z-10 pt-10">
               <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 text-base font-semibold transition-transform active:scale-95 shadow-none border-none">
                 About me
               </Button>
             </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Stat 1 */}
            <motion.div 
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col min-h-[200px] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">3+</span>
                <span className="text-muted-foreground font-medium text-lg">years</span>
              </div>
              <div>
                <div className="w-full h-px bg-border/50 mb-4" />
                <p className="text-muted-foreground text-sm md:text-base leading-normal">
                  Experience designing and building websites for startups and businesses.
                </p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col min-h-[200px] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">20+</span>
                <span className="text-muted-foreground font-medium text-lg">projects</span>
              </div>
              <div>
                <div className="w-full h-px bg-border/50 mb-4" />
                <p className="text-muted-foreground text-sm md:text-base leading-normal">
                  Successfully launched, from clean landing pages to complex web apps.
                </p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col min-h-[200px] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">10+</span>
                <span className="text-muted-foreground font-medium text-lg">happy clients</span>
              </div>
              <div>
                <div className="w-full h-px bg-border/50 mb-4" />
                <p className="text-muted-foreground text-sm md:text-base leading-normal">
                  Many of whom return for new collaborations and ongoing support.
                </p>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              className="bg-card rounded-2xl p-5 md:p-6 flex flex-col min-h-[200px] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">100%</span>
                <span className="text-muted-foreground font-medium text-lg">satisfaction</span>
              </div>
              <div>
                <div className="w-full h-px bg-border/50 mb-4" />
                <p className="text-muted-foreground text-sm md:text-base leading-normal">
                  Based on client feedback collected over the last 3 years.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
