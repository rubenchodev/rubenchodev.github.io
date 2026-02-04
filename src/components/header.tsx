"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Definición del menú de navegación
// El href debe coincidir con el id de cada sección
const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  // { name: "Tutoriales", href: "#tutorials" },
  // { name: "Portafolio", href: "#portafolio" },
  { name: "Contacto", href: "#contact" }
]

export function Header() {
  // Controla si el menú móvil está abierto o cerrado
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Guarda la sección activa según el scroll
  const [activeSection, setActiveSection] = useState<string>("")

  /**
   * Detecta qué sección está visible en pantalla
   * y actualiza el estado para resaltar el menú
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      navigation.forEach((item) => {
        const section = document.querySelector(item.href)
        if (!section) return

        const offsetTop = (section as HTMLElement).offsetTop
        const offsetHeight = (section as HTMLElement).offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(item.href)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo / Marca */}
        <a href="#home" className="text-xl font-bold text-foreground">
          <span className="text-primary">{"<"}</span>
          Quality Code
          <span className="text-primary">{"/>"}</span>
        </a>

        {/* Navegación Desktop */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = activeSection === item.href

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground hover:text-primary"
                  }
                `}
              >
                {item.name}
              </a>
            )
          })}
        </div>

        {/* Botón menú móvil */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Navegación Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4">
            {navigation.map((item) => {
              const isActive = activeSection === item.href

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    block py-2 text-base font-medium transition-colors
                    ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
