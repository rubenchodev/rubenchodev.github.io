import { Code2, Layers, Rocket, Users, Cloud, Lightbulb } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    description: "JavaScript, TypeScript, HTML, CSS, Angular, React, QWeb, Tailwind CSS",
  },
  {
    icon: Rocket,
    title: "Desarrollo Backend",
    description: "Python, Odoo, Google Apps Script, Node.js, PostgreSQL, MySQL, APIs REST",
  },
  {
    icon: Layers,
    title: "ERP & Productos Digitales",
    description: "Odoo, Desarrollo de módulos, Personalización, Localización, People One, Arquitectura funcional",
  },
  {
    icon: Cloud,
    title: "Cloud & Automatización",
    description: "Google Cloud Platform, Automatización de procesos, Integración de APIs, No-Code, Low-Code",
  },
  {
    icon: Lightbulb,
    title: "Innovación & Productividad",
    description: "Extensiones, Optimización de flujos, Mejora continua, Herramientas internas",
  },
  {
    icon: Users,
    title: "Liderazgo & Colaboración",
    description: "Gestión de producto, Análisis de requerimientos, Transferencia de conocimiento, Metodologías ágiles, Git",
  },
];


export function About() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary font-medium mb-2">Conóceme</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre mí
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
              Soy un desarrollador apasionado por crear e innovar en soluciones digitales de alta calidad, donde la eficiencia técnica y la experiencia de usuario van de la mano. El desarrollo web y móvil es una pasión que me impulsa a mejorar continuamente y explorar nuevas tecnologías.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
              Tengo experiencia construyendo aplicaciones, automatizaciones y herramientas que optimizan procesos y aumentan la productividad, especialmente mediante la creación de extensiones, módulos y soluciones no-code y low-code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Me motiva compartir conocimiento y contribuir al crecimiento de otros desarrolladores. Fuera del código, disfruto el fútbol, el microfútbol y compartir tiempo con mi familia y mis hijas.
            </p>
          </div>


          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
