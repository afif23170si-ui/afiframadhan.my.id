import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import { getProjectById, getAllProjectIds } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const ids = getAllProjectIds()
  return ids.map((id) => ({ slug: id }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/#projects">
          <Button variant="outline" size="sm" className="gap-2 backdrop-blur-sm bg-background/80">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Year Badge */}
            <div className="flex justify-center">
              <Badge variant="secondary" className="gap-2">
                <Calendar className="w-3 h-3" />
                {project.year}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground">
              {project.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              {project.liveUrl && (
                <Button asChild className="gap-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white hover:shadow-xl hover:shadow-blue-500/25">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/30 p-4 md:p-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading">About this project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            {project.technologies.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.slice(1).map((img, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
