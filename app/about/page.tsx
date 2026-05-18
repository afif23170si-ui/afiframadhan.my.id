import { ComingSoon } from "@/components/shared/coming-soon"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Afif Ramadhan",
  description: "Halaman about sedang dalam tahap pengembangan.",
}

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Page"
      description="Halaman tentang saya sedang disiapkan dengan sepenuh hati. Segera hadir!"
    />
  )
}
