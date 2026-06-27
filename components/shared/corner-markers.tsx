import { cn } from "@/lib/utils"

/**
 * Individual crosshair (+) marker — the small "+" you see
 * at section/card corners in Vercel-style designs.
 */
function CrosshairIcon({ className }: { className?: string }) {
  return (
    <div className={cn("absolute w-3 h-3 z-10", className)}>
      {/* Horizontal arm */}
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-px bg-zinc-700" />
      {/* Vertical arm */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-px bg-zinc-700" />
    </div>
  )
}

interface CornerMarkersProps {
  className?: string
}

/**
 * Renders 4 crosshair (+) markers at the corners of the
 * nearest `position: relative` parent.
 * The parent must have `overflow-visible` (default) for
 * markers that sit on the border to be visible.
 */
export function CornerMarkers({ className }: CornerMarkersProps) {
  return (
    <>
      <CrosshairIcon className={cn("top-0 left-0 -translate-x-[5px] -translate-y-[5px]", className)} />
      <CrosshairIcon className={cn("top-0 right-0  translate-x-[5px] -translate-y-[5px]", className)} />
      <CrosshairIcon className={cn("bottom-0 left-0 -translate-x-[5px] translate-y-[5px]",  className)} />
      <CrosshairIcon className={cn("bottom-0 right-0  translate-x-[5px] translate-y-[5px]",  className)} />
    </>
  )
}

/**
 * Section-level grid + corner markers container.
 * Wraps content in a bordered, grid-backed container
 * with crosshair markers at each corner — Vercel style.
 */
export function GridCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative border border-white/[0.07] rounded-xl bg-grid overflow-hidden", className)}>
      <CornerMarkers />
      {children}
    </div>
  )
}
