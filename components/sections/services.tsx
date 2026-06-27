"use client"

import { motion } from "framer-motion"
import { SectionBadge } from "@/components/shared/section-badge"
import {
  Globe,
  Layers,
  Server,
  Plug,
  Database,
  Smartphone,
  Palette,
  Gauge,
  Cloud,
  GitBranch,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react"

const row1 = [
  { icon: Globe,           label: "Full Stack Dev" },
  { icon: Layers,          label: "Frontend Dev" },
  { icon: Server,          label: "Backend Dev" },
  { icon: Plug,            label: "REST API" },
  { icon: Database,        label: "Database Design" },
  { icon: LayoutDashboard, label: "Web Apps" },
]

const row2 = [
  { icon: Smartphone,   label: "Responsive Design" },
  { icon: Palette,      label: "UI / UX Design" },
  { icon: Gauge,        label: "Performance" },
  { icon: Cloud,        label: "Deployment" },
  { icon: GitBranch,    label: "Version Control" },
  { icon: ShieldCheck,  label: "Clean Code" },
]

function ServiceTag({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="group flex items-center gap-2 md:gap-2.5 px-3.5 py-2 md:px-5 md:py-2.5 rounded-full bg-zinc-950/[0.03] hover:bg-[#44624a]/10 transition-all duration-300 cursor-default select-none flex-shrink-0 border-0 shadow-none">
      <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#8ba888] flex-shrink-0" />
      <span className="text-sm md:text-[15px] font-medium text-zinc-800 group-hover:text-zinc-950 whitespace-nowrap transition-colors duration-300">
        {label}
      </span>
    </div>
  )
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 30,
}: {
  items: { icon: React.ElementType; label: string }[]
  direction?: "left" | "right"
  duration?: number
}) {
  // Triple for seamless loop
  const tripled = [...items, ...items, ...items]
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right"

  return (
    <div
      className="flex overflow-hidden w-full"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className={`flex gap-3 w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {tripled.map((item, i) => (
          <ServiceTag key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-28 lg:py-36 overflow-hidden">
      <div className="container-custom">

        {/* Header — centered */}
        <motion.div
          className="text-left md:text-center space-y-5 mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-start md:justify-center">
            <SectionBadge>What I Do</SectionBadge>
          </div>
          <h2 className="heading-lg text-zinc-950 md:mx-auto max-w-2xl">
            Everything you need,<br />built right.
          </h2>
        </motion.div>

        {/* Marquee rows — pure CSS, no JS animation loop */}
        <div className="space-y-3">
          <MarqueeRow items={row1} direction="left" duration={28} />
          <MarqueeRow items={row2} direction="right" duration={32} />
        </div>

      </div>
    </section>
  )
}
