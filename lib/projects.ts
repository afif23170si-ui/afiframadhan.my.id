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
}

export const projects: Project[] = [
  {
    id: "bookumkm",
    title: "BookUMKM",
    subtitle: "UMKM booking platform in Indonesia",
    description: "A comprehensive booking platform designed specifically for Indonesian SMEs (UMKM). features seasonal menus, event updates, and warm visual storytelling.",
    image: "/images/bookumkm.webp?v=3",
    gallery: [
      "/images/bookumkm.webp?v=3",
    ],
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "Inertia.js"],
    features: [
      "Online booking system",
      "Customer management",
      "UMKM dashboard",
      "Payment integration",
      "Responsive design",
    ],
    liveUrl: "https://kelompokfwd4-sibm3.karyakreasi.id/",
    githubUrl: "https://github.com/Hasan2302/react-bookumkm.git",
    year: "2025",
    client: "BookUMKM Group",
    date: "Nov 12, 2025"
  },
  {
    id: "project-2",
    title: "Project 2",
    subtitle: "project not yet available",
    description: "A cozy digital home for a neighborhood café, featuring seasonal menus, event updates, and warm visual storytelling",
    image: "/images/project.webp",
    technologies: [],
    features: [],
    year: "Coming Soon",
    client: "Coming Soon",
    date: "Dec 21, 2025"
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
