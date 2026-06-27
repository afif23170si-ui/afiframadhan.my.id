"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { SectionBadge } from "@/components/shared/section-badge"

export function Contact() {
  return (
    <section id="contact" className="relative bg-white section-padding overflow-hidden">

      {/* Background geometry — desktop */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/background-geometri.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center -150px",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Background geometry — mobile */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/background-geometri.svg')",
          backgroundSize: "150%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <SectionBadge>Get In Touch</SectionBadge>

            {/* Heading */}
            <div className="space-y-5">
              <h2 className="heading-xl text-zinc-950">
                Let&apos;s work together.
              </h2>
              <p className="subtext max-w-lg mx-auto">
                Currently open to <span className="text-zinc-950 font-medium">freelance</span> and{" "}
                <span className="text-zinc-950 font-medium">full-time</span> opportunities.
                Have a project in mind or just want to chat? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Primary CTA */}
            <a
              href="https://wa.me/6285121597870"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 h-11 bg-[#44624a] hover:bg-[#8ba888] text-white text-[15px] font-medium rounded-full transition-all duration-200 shadow-none hover:scale-[1.02] active:scale-[0.98]"
            >
              <Image src="/images/medsos/wa.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain" />
              Let&apos;s chat
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </motion.div>
        </div>
      </div>

    </section>
  )
}
