"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
    </svg>
  )
}

const brandLogos = [
  "/images/brand-logo/FDpxDa03ClBEByKBKP6iTL6llM.svg",
  "/images/brand-logo/UFPYtPkXrPSRPWO9O347rVFAc08.svg",
  "/images/brand-logo/g6mxoyC4FApR4PIFw8uo1NfZdA.svg",
  "/images/brand-logo/yDkZOVum39QSY48ocf7Wpsw.svg",
]

const marqueeItems = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos]

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-x-hidden overflow-y-hidden pt-52 pb-8 sm:pt-40 sm:pb-10 md:pt-44 md:pb-12"
    >
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-[2]" />



      <div className="container-custom relative z-10 w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* ─── MOBILE LAYOUT (< sm) ─────────────────────── */}
          <div className="flex flex-col items-start text-left sm:hidden space-y-5">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-2xl backdrop-saturate-200">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-zinc-300">Available for work</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-[2.6rem] leading-[1.08] font-bold font-heading tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Designing<br />
              Premium<br />
              Digital Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base text-zinc-300 leading-relaxed max-w-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Full Stack Developer focused on building fast, clean, and user-friendly web solutions.
            </motion.p>

            {/* CTA Buttons — 1 row on mobile */}
            <motion.div
              className="flex flex-row gap-2 w-full pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <button
                onClick={scrollToProjects}
                className="group flex-1 bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full h-11 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 hover:shadow-lg hover:shadow-[#44624a]/25"
              >
                View Projects
                <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-[#44624a]" />
                </span>
              </button>
              <a
                href="mailto:afifr5092@gmail.com"
                className="group flex-1 bg-white/5 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-2xl backdrop-saturate-200 hover:bg-white/10 text-zinc-300 hover:text-white rounded-full h-11 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <GmailIcon className="w-3.5 h-3.5" />
                Email Me
              </a>
            </motion.div>

            {/* Tech Ticker */}
            <motion.div
              className="w-full overflow-hidden mask-gradient-x mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex overflow-hidden select-none">
                <div className="flex gap-8 animate-marquee whitespace-nowrap py-4 items-center">
                  {marqueeItems.map((src, i) => (
                    <div key={i} className="flex-shrink-0 opacity-50 brightness-0 invert hover:opacity-100 transition-all duration-300">
                      <Image src={src} alt="Brand Logo" width={100} height={24} className="h-6 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── DESKTOP LAYOUT (sm+) ─────────────────────── */}
          <div className="hidden sm:flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-2xl backdrop-saturate-200">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-zinc-300">Available for work</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tighter leading-[1.05] text-white mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Designing Premium
              <br />
              Digital Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Full Stack Developer focused on building fast, clean, and user-friendly
              web solutions that drive real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <Button
                size="sm"
                onClick={scrollToProjects}
                className="group bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-6 h-11 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#44624a]/25"
              >
                View Projects
                <span className="flex items-center justify-center w-6 h-6 ml-1.5 bg-white rounded-full group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#44624a]" />
                </span>
              </Button>
              <Button
                size="sm"
                asChild
                className="group bg-white/5 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-2xl backdrop-saturate-200 hover:bg-white/10 text-zinc-300 hover:text-white rounded-full px-6 h-11 text-sm font-medium transition-all duration-200"
              >
                <a href="mailto:afifr5092@gmail.com">
                  <GmailIcon className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
            </motion.div>

            {/* Tech Stack Ticker */}
            <motion.div
              className="w-full max-w-2xl mx-auto overflow-hidden mask-gradient-x"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              <div className="flex overflow-hidden select-none">
                <div className="flex gap-12 animate-marquee whitespace-nowrap py-6 items-center">
                  {marqueeItems.map((src, i) => (
                    <div key={i} className="flex-shrink-0 opacity-50 brightness-0 invert hover:opacity-100 transition-all duration-300">
                      <Image src={src} alt="Brand Logo" width={120} height={28} className="h-7 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
