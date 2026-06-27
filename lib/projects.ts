export interface Project {
  id: string
  title: string
  logo?: string | null
  logoInitial?: string
  subtitle: string
  description: string
  image: string
  gallery?: string[]
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
  client?: string
  date?: string
  stats?: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: "mahapos",
    title: "MahaPOS",
    logo: "/images/logo-mahapos.png",
    subtitle: "Modern Point of Sale for Retail & F&B",
    description: "A lightweight yet powerful POS system built for small to medium retail and F&B businesses. Features fast transaction processing, multi-payment support, shift management, and real-time sales reporting - all in a clean, intuitive interface.",
    image: "/images/project/project-mahapos.avif",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    features: ["Multi-payment Support", "Shift Management", "Sales Reporting", "Product Variants"],
    liveUrl: "https://mahapos.my.id",
    year: "2026",
    client: "Retail & F&B",
    date: "May 2026",
    stats: [
      { label: "Trans/Day", value: "500+" },
      { label: "Efficiency", value: "+180%" },
    ],
  },
  {
    id: "masjid",
    title: "Nurul Jannah",
    logo: "/images/logo-nuruljannah.webp",
    logoInitial: "NJ",
    subtitle: "Mosque Management & Community Platform",
    description: "A full-featured mosque management system covering donation tracking, prayer schedules, Islamic programs, and community announcements. Designed to digitize and modernize mosque administration for a better congregation experience.",
    image: "/images/project/project-nuruljannah.avif",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    features: ["Donation Management", "Prayer Schedule", "Program Announcements", "Admin Dashboard"],
    liveUrl: "https://nuruljannah.web.id",
    year: "2026",
    client: "Masjid Nurul Jannah",
    date: "Mar 2026",
    stats: [
      { label: "Active Users", value: "300+" },
      { label: "Donations Tracked", value: "Rp 50M+" },
    ],
  },
  {
    id: "kaspos",
    title: "KasPOS",
    logo: null,
    logoInitial: "KP",
    subtitle: "Web-Based F&B Point of Sale System",
    description: "A comprehensive POS application designed for restaurants and cafes, featuring fast transaction processing, kitchen display integration, table management, and real-time inventory tracking.",
    image: "/images/project/project-kaspos.webp",
    technologies: ["Laravel", "React", "MySQL", "REST API"],
    features: ["Kitchen Display System", "Table Management", "Inventory Tracking", "Split Bill"],
    liveUrl: "https://tokoelektronikmurah.com/",
    githubUrl: "https://github.com/afif23170si-ui",
    year: "2025",
    client: "F&B Sector",
    date: "2025",
    stats: [
      { label: "Efficiency", value: "+200%" },
      { label: "Trans/Day", value: "1000+" },
    ],
  },
  {
    id: "bookumkm",
    title: "BookUMKM",
    logo: null,
    logoInitial: "BU",
    subtitle: "Modernizing a Local UMKM Booking Platform",
    description: "A comprehensive booking solution designed for Indonesian UMKM, streamlining appointment management and increasing operational efficiency by 150%. Built with automated scheduling and integrated payment gateway.",
    image: "/images/project/project-bookumkm.webp",
    technologies: ["Laravel", "React", "MySQL", "Midtrans"],
    features: ["Automated Scheduling", "Payment Gateway", "Merchant Dashboard", "Customer Notifications"],
    liveUrl: "https://kelompokfwd4-sibm3.karyakreasi.id/",
    githubUrl: "https://github.com/Hasan2302/react-bookumkm.git",
    year: "2025",
    client: "BookUMKM Group",
    date: "Nov 12, 2025",
    stats: [
      { label: "Active Merchants", value: "500+" },
      { label: "Transactions", value: "15k+" },
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
