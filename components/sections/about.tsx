"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { TechTicker } from "@/components/ui/tech-ticker"
import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <SectionWrapper id="about" className="pt-20 pb-20 md:py-32 bg-muted/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:auto-rows-[220px]">
          
          {/* 1. Main Bio Card (Large) - Profile Style */}
          <motion.div 
            className="md:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-black dark:bg-[#0a0a0a] flex flex-col relative overflow-hidden group shadow-2xl border border-white/5 p-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-5 sm:p-6 md:p-10 flex flex-col items-start gap-5 sm:gap-6">
               
               {/* Profile Info */}
               <div className="space-y-2">
                 <div className="flex items-center gap-2">
                   <h3 className="text-2xl sm:text-3xl md:text-3xl font-heading font-bold text-white tracking-tight">
                     Afif Ramadhan
                   </h3>
                   <svg viewBox="0 0 24 24" aria-label="Verified" className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-blue-500 fill-current">
                      <g fillRule="evenodd">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.114-1.335.325C14.686 2.68 13.18 1.5 11.5 1.5c-1.7 0-3.2 1.16-3.937 2.327-.41-.212-.866-.33-1.337-.33-2.097 0-3.8 1.8-3.8 3.997 0 .495.084.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.58.875 2.95 2.147 3.6-.154.435-.238.9-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.114 1.335-.325.737 1.166 2.242 2.33 3.922 2.33 1.7 0 3.18-1.16 3.937-2.327.41.21.866.328 1.337.328 2.097 0 3.8-1.79 3.8-3.997 0-.495-.084-.965-.238-1.4 1.272-.65 2.147-2.018 2.147-3.6z" />
                        <path d="M10 16.5l-3.5-3.5 1.414-1.414L10 13.672l6.086-6.086 1.414 1.414z" fill="white" />
                      </g>
                   </svg>
                 </div>
                 <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg">Full Stack Designer & Developer</p>
                 
                 <p className="text-white/80 leading-relaxed text-sm sm:text-base font-light max-w-lg pt-2">
                   I craft digital experiences that blend <span className="text-white font-medium">functional engineering</span> with <span className="text-white font-medium">beautiful design</span>. Bringing a thoughtful approach to every pixel and line of code.
                 </p>
               </div>

               {/* CTA */}
               <div className="pt-2 sm:pt-4 w-full md:w-auto">
                 <Button asChild className="w-full md:w-auto bg-white text-black hover:bg-white/90 rounded-full h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-white/5 active:scale-95">
                   <Link href="/about">More about me</Link>
                 </Button>
               </div>
            </div>
          </motion.div>

          {/* 3. Available for Work (Right Column) */}
           <motion.div 
            className="md:col-span-1 lg:col-span-1 lg:row-span-2 rounded-3xl bg-blue-600 p-0 relative overflow-hidden group cursor-pointer h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact" className="block p-6 h-full w-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2 text-white">Available for work</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Open for freelance projects.
                </p>
              </div>
              <div className="relative z-10 mt-4 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
