import { Briefcase, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useExperienceData } from "@/hooks/useExperienceData"

export function Experience() {
  const { workExperience, education, loading } = useExperienceData()

  if (loading) {
    return (
      <section id="experience" className="py-24 text-center">
        <p className="text-muted-foreground">Cargando experiencia...</p>
      </section>
    )
  }

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-primary font-medium mb-2">Mi trayectoria</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experiencia y educación
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ================= Datos de experiencia ================= */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Experiencia laboral
              </h3>
            </div>

            <div className="space-y-10">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />

                  <h4 className="text-lg font-semibold text-foreground">
                    {job.title}
                  </h4>

                  <p className="text-primary font-medium">
                    {job.company}
                  </p>

                  <p className="text-sm text-muted-foreground mb-3">
                    {job.period}
                  </p>

                  <p
                    className="text-muted-foreground mb-4 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: job.description,
                    }}
                  />

                  {job.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= Datos de educación ================= */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Educación
              </h3>
            </div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-border"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />

                  <h4 className="text-lg font-semibold text-foreground">
                    {edu.title}
                  </h4>

                  <p className="text-primary font-medium">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.period}
                  </p>

                  <p className="text-muted-foreground mb-4 text-justify">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
