import { Github, Linkedin } from "lucide-react"

const socialLinks = [
  { title: "Perfil de GitHub", name: "GitHub", href: "https://github.com/rubenchodev", icon: Github },
  { title: "Perfil de GitHub antiguo", name: "GitHub", href: "https://github.com/rubendariosanchez", icon: Github },
  { title: "Perfil de LinkedIn", name: "LinkedIn", href: "https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-s%C3%A1nchez-ram%C3%ADrez-6a3a606b/", icon: Linkedin },
]

const footerLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  // { name: "Tutoriales", href: "#tutorials" },
  // { name: "Portafolio", href: "#portafolio" },
  { name: "Contacto", href: "#contact" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="text-xl font-bold text-foreground">
              <span className="text-primary">{"<"}</span>
              Quality Code
              <span className="text-primary">{"/>"}</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Transformando ideas en soluciones digitales de alto impacto.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Sígueme
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} @RubénSánchez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
