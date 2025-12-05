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
}

export const projects: Project[] = [
  {
    id: "bookumkm",
    title: "BookUMKM",
    subtitle: "UMKM booking platform in Indonesia",
    description: "A comprehensive booking platform designed specifically for Indonesian SMEs (UMKM). The platform enables small businesses to manage their bookings, customers, and services efficiently with an intuitive dashboard and seamless user experience.",
    image: "/images/bookumkm.png",
    gallery: [
      "/images/bookumkm.png",
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
  },
  {
    id: "project-2",
    title: "Project 2",
    subtitle: "project not yet available",
    description: "This project is currently under development. Check back soon for updates!",
    image: "/images/project.png",
    technologies: [],
    features: [],
    year: "Coming Soon",
  },
  {
    id: "project-3",
    title: "Project 3",
    subtitle: "project not yet available",
    description: "This project is currently under development. Check back soon for updates!",
    image: "/images/project.png",
    technologies: [],
    features: [],
    year: "Coming Soon",
  },
  {
    id: "project-4",
    title: "Project 4",
    subtitle: "project not yet available",
    description: "This project is currently under development. Check back soon for updates!",
    image: "/images/project.png",
    technologies: [],
    features: [],
    year: "Coming Soon",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
