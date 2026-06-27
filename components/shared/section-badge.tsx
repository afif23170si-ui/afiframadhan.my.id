import { ReactNode } from "react"

interface SectionBadgeProps {
  children: ReactNode
  variant?: "default" | "light"
}

export function SectionBadge({ children, variant = "default" }: SectionBadgeProps) {
  if (variant === "light") {
    return (
      <div className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30">
        <span className="relative text-xs font-semibold text-white tracking-widest uppercase">
          {children}
        </span>
      </div>
    )
  }

  return (
    <div className="relative inline-flex items-center px-4 py-1.5 rounded-full overflow-hidden">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#44624a] via-[#8ba888] to-[#44624a] opacity-50" />
      <div className="absolute inset-[1px] rounded-full bg-white" />
      <span className="relative text-xs font-semibold text-[#8ba888] tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}
