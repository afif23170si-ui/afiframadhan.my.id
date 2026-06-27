"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Wrench } from "lucide-react"

interface ComingSoonProps {
  title: string
  description?: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-5 relative overflow-hidden">

      {/* Ambient glow — centered */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#44624a]/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >

        {/* Icon */}
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950/[0.05] border border-zinc-950/[0.08]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Wrench className="w-5 h-5 text-zinc-500" />
        </motion.div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#44624a]/[0.08] border border-[#44624a]/20 text-[#8ba888] text-xs font-medium">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8ba888] opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8ba888]" />
          </span>
          Sedang dalam pengembangan
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-[2.5rem] font-bold font-heading text-zinc-950 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
            {description ?? "Halaman ini sedang dalam tahap pengembangan dan akan segera hadir. Terima kasih atas kesabarannya!"}
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-zinc-700"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-950/[0.1] bg-zinc-950/[0.04] text-sm font-medium text-zinc-600 hover:bg-zinc-950/[0.08] hover:text-zinc-950 hover:border-zinc-950/[0.15] transition-all duration-200 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Kembali ke Beranda
        </Link>

      </motion.div>
    </main>
  )
}
