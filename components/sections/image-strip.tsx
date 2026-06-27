"use client"


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
  { src: "/images/image-stripe/1.avif", alt: "Project Showcase 1", priority: true  },
  { src: "/images/image-stripe/2.avif", alt: "Project Showcase 2", priority: true  },
  { src: "/images/image-stripe/3.avif", alt: "Project Showcase 3", priority: false },
  { src: "/images/image-stripe/4.avif", alt: "Project Showcase 4", priority: false },
  { src: "/images/image-stripe/5.avif", alt: "Project Showcase 5", priority: false },
  { src: "/images/image-stripe/6.avif", alt: "Project Showcase 6", priority: false },
]

export function ImageStrip() {
  // Duplicate for seamless loop
  const strip = [...images, ...images]

  return (
    <div className="relative w-full bg-white pt-4 md:pt-0 pb-6 md:pb-10 overflow-hidden">



      {/* Scrolling row */}
      <div className="flex gap-4 w-max animate-strip-scroll">
        {strip.map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 h-[240px] sm:h-[280px] md:h-[340px] rounded-xl overflow-hidden bg-zinc-50"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
