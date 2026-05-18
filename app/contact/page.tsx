import { ComingSoon } from "@/components/shared/coming-soon"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — Afif Ramadhan",
  description: "Halaman contact sedang dalam tahap pengembangan.",
}

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Page"
      description="Halaman kontak sedang disiapkan. Sementara itu, kamu bisa hubungi saya langsung via email di bagian bawah halaman utama."
    />
  )
}
