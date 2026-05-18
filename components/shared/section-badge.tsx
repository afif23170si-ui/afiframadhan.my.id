import { ReactNode } from "react"

interface SectionBadgeProps {
  children: ReactNode
}

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <div className="relative inline-flex items-center px-3 py-1 rounded-full overflow-hidden">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#44624a] via-[#8ba888] to-[#44624a] opacity-50" />
      <div className="absolute inset-[1px] rounded-full bg-zinc-950" />
      <span className="relative text-xs font-semibold text-[#8ba888] tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}
