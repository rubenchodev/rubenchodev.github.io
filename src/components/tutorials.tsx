"use client"

import { useState } from "react"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ["Todos", "React", "Next.js", "TypeScript", "CSS", "Backend"]

const tutorials = [
  {
    id: 1,
    title: "Introducción a React Hooks",
    description:
      "Aprende a usar useState, useEffect y hooks personalizados para crear aplicaciones React más eficientes y mantenibles.",
    category: "React",
    readTime: "10 min",
    date: "15 Ene 2024",
    featured: true,
  }
]

export function Tutorials() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredTutorials =
    activeCategory === "Todos"
      ? tutorials
      : tutorials.filter((t) => t.category === activeCategory)

  return (
    <section id="tutorials" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary font-medium mb-2">Aprende Conmigo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tutoriales
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Comparto mi conocimiento a través de tutoriales y artículos sobre
            desarrollo web, mejores prácticas y las últimas tecnologías.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
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

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <article
              key={tutorial.id}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
            >
              {tutorial.featured && (
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  Destacado
                </Badge>
              )}
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{tutorial.category}</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {tutorial.readTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {tutorial.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {tutorial.date}
                </span>
                <a
                  href="#"
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Leer más <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#">
              Ver Todos los Tutoriales
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
