"use client"

import Image from "next/image"

/**
 * Full-width infinite scrolling image strip shown between
 * the Hero and Projects sections.
 *
 * Images scroll right → left continuously using a pure CSS
 * animation (no JS). The strip is duplicated so the loop
 * is seamless. Left/right edges fade out with a mask so
 * cards blend smoothly into the page background.
 */

// Use all available project screenshots, some variants included
// for visual variety so the strip looks full and continuous.
const images = [
  { src: "/images/project-linipos.webp",   alt: "LiniPOS - Point of Sale System",   priority: true  },
  { src: "/images/project-masjid.webp",   alt: "Nurul Jannah - Mosque Management",  priority: false },
  { src: "/images/project-kaspos.webp",   alt: "KasPOS - F&B Point of Sale",        priority: false },
  { src: "/images/project-bookumkm.webp", alt: "BookUMKM - UMKM Booking Platform",  priority: false },
]

export function ImageStrip() {
  // Duplicate for seamless loop
  const strip = [...images, ...images]

  return (
    <div className="relative w-full bg-zinc-950 pt-4 md:pt-0 pb-6 md:pb-10 overflow-hidden">

      {/* Left + right fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #09090b, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #09090b, transparent)" }}
      />

      {/* Scrolling row */}
      <div className="flex gap-4 w-max animate-strip-scroll">
        {strip.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[340px] sm:w-[360px] md:w-[440px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.07] bg-zinc-900"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 640px) 340px, (max-width: 768px) 360px, 440px"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
