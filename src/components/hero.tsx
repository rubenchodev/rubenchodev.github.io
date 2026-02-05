import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// Enlaces a redes sociales
const socialLinks = [
  { title: "Perfil de GitHub", name: "GitHub", href: "https://github.com/rubenchodev", icon: Github },
  { title: "Perfil de GitHub antiguo", name: "GitHub", href: "https://github.com/rubendariosanchez", icon: Github },
  { title: "Perfil de LinkedIn", name: "LinkedIn", href: "https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-s%C3%A1nchez-ram%C3%ADrez-6a3a606b/", icon: Linkedin },
  { title: "Enviar correo", name: "Email", href: "mailto:rubencho.dev@gmail.com", icon: Mail },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2">Hola, soy</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Rubén Sánchez
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
              Desarrollador Full Stack
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Ingeniero de sistemas con experiencia en desarrollo web y aplicaciones móviles usando nuevas tecnologías, soy un profesional responsable, dedicado, amable, sencillo, facilidad para trabajar en equipo y compartir ideas.
              <br/><br/>
              Soy fiel creyente que compartir conocimiento y ayudar a los demás es una forma de mejorar el mundo y nuestras habilidades teniendo en cuenta diferentes puntos de vista.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Contáctame</a>
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <a href="#portafolio">Ver portafolio</a>
              </Button> */}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
                  {/* <span className="text-6xl sm:text-7xl font-bold text-primary">TN</span> */}
                  <img
                      src="/assets/images/ruben-sanchez.jpg" // coloca la imagen en /public
                      alt="Rubén Sánchez - Full Stack Developer"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/60" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/40" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
