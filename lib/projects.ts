export interface Project {
  id: string
  title: string
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
    id: "kaspos",
    title: "KasPOS",
    subtitle: "Web-Based F&B Point of Sale System",
    description: "A comprehensive POS application designed for restaurants and cafes, featuring fast transaction processing, kitchen display integration, and real-time inventory management.",
    image: "/images/kaspos.webp",
    technologies: ["Web Platform", "Real-time POS", "F&B Management"],
    features: ["Kitchen Display System", "Inventory Tracking"],
    liveUrl: "https://tokoelektronikmurah.com/",
    githubUrl: "https://github.com/afif23170si-ui",
    year: "2024",
    client: "F&B Sector",
    date: "Dec 20, 2024",
    stats: [
      { label: "Efficiency", value: "+200%" },
      { label: "Trans/Day", value: "1000+" }
    ]
  },
  {
    id: "bookumkm",
    title: "BookUMKM",
    subtitle: "Modernizing a Local UMKM Booking Platform",
    description: "A comprehensive booking solution designed for Indonesian UMKM, streamlining appointment management and increasing operational efficiency by 150%.",
    image: "/images/bookumkm.webp",
    technologies: ["Laravel", "React", "MySQL"],
    features: ["Automated Scheduling", "Payment Gateway"],
    liveUrl: "https://kelompokfwd4-sibm3.karyakreasi.id/",
    githubUrl: "https://github.com/Hasan2302/react-bookumkm.git",
    year: "2025",
    client: "BookUMKM Group",
    date: "Nov 12, 2025",
    stats: [
      { label: "Active Merchants", value: "500+" },
      { label: "Transactions", value: "15k+" }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
