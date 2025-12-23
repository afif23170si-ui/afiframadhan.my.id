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
    id: "bookumkm",
    title: "BookUMKM",
    subtitle: "Modernizing a Local SME Booking Platform",
    description: "A comprehensive booking solution designed for Indonesian UMKM, streamlining appointment management and increasing operational efficiency by 150%.",
    image: "/images/bookumkm.webp?v=3",
    gallery: ["/images/bookumkm.webp?v=3"],
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
  },
  {
    id: "luxe-fashion",
    title: "Luxe Fashion",
    subtitle: "Redefining Luxury E-Commerce Experience",
    description: "A complete visual and UX overhaul for a high-end fashion retailer, focusing on storytelling, seamless checkout, and mobile-first performance.",
    image: "/images/project.webp",
    technologies: ["Next.js", "Shopify Headless", "Framer Motion"],
    features: ["3D Product View", "AI Recommendations"],
    year: "2024",
    client: "Luxe Retail",
    date: "Dec 10, 2024",
    stats: [
      { label: "Conversion", value: "+45%" },
      { label: "Avg Order Val", value: "$320" }
    ]
  },
  {
    id: "orbital-ai",
    title: "Orbital AI",
    subtitle: "Next-Gen AI Workspace for Teams",
    description: "An intelligent collaborative workspace that uses generative AI to automate documentation, summarize meetings, and organize project workflows in real-time.",
    image: "/images/project.webp",
    technologies: ["React", "Python", "OpenAI API"],
    features: ["Real-time Collab", "Smart Summaries"],
    year: "2024",
    client: "Orbital Tech",
    date: "Jan 15, 2024",
    stats: [
      { label: "Active Users", value: "50k+" },
      { label: "Time Saved", value: "12hrs/wk" }
    ]
  },
  {
    id: "nova-finance",
    title: "Nova Finance",
    subtitle: "Real-Time Institutional Wealth Dashboard",
    description: "A high-performance financial analytics platform processing millions of transactions with sub-millisecond latency for institutional investors.",
    image: "/images/bookumkm.webp?v=3",
    technologies: ["Next.js", "Go", "ClickHouse"],
    features: ["Live Market Data", "Risk Analysis"],
    year: "2024",
    client: "Nova Capital",
    date: "Feb 20, 2024",
    stats: [
      { label: "Data Processed", value: "5TB/day" },
      { label: "Latency", value: "<20ms" }
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
