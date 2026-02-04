"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectCategories = ["Todos", "Web Apps", "E-commerce", "APIs", "Open Source"]

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Panel de administración completo para tiendas en línea con análisis en tiempo real, gestión de inventario y reportes de ventas.",
    image: "/placeholder-project.jpg",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con tableros Kanban, colaboración en tiempo real y notificaciones.",
    image: "/placeholder-project.jpg",
    category: "Web Apps",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "REST API Starter",
    description:
      "Plantilla de API REST con autenticación JWT, validación, documentación Swagger y tests automatizados.",
    image: "/placeholder-project.jpg",
    category: "APIs",
    technologies: ["Express", "TypeScript", "PostgreSQL", "Jest"],
    liveUrl: null,
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "React Component Library",
    description:
      "Biblioteca de componentes UI reutilizables con accesibilidad incorporada y personalización mediante CSS variables.",
    image: "/placeholder-project.jpg",
    category: "Open Source",
    technologies: ["React", "Storybook", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "Plataforma de blogging con editor Markdown, sistema de comentarios y optimización SEO.",
    image: "/placeholder-project.jpg",
    category: "Web Apps",
    technologies: ["Next.js", "MDX", "Supabase", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Payment Gateway Integration",
    description:
      "Módulo de integración de pagos con múltiples proveedores incluyendo Stripe, PayPal y MercadoPago.",
    image: "/placeholder-project.jpg",
    category: "E-commerce",
    technologies: ["Node.js", "Stripe API", "PayPal SDK", "TypeScript"],
    liveUrl: null,
    githubUrl: "https://github.com",
    featured: false,
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portafolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary font-medium mb-2">Mi Trabajo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Portafolio
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Una selección de proyectos en los que he trabajado, desde aplicaciones
            web hasta contribuciones de código abierto.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl font-bold text-primary/30">
                  {project.title.charAt(0)}
                </div>
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Destacado
                  </Badge>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
