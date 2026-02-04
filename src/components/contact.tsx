"use client"

import React from "react"

import { useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "rubencho.dev@gmail.com",
    href: "mailto:rubencho.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Ubaté, Cundinamarca, Colormbia",
    href: null,
  },
]

const socialLinks = [
  { title: "Perfil de GitHub", name: "GitHub", href: "https://github.com/rubenchodev", icon: Github },
  { title: "Perfil de GitHub antiguo", name: "GitHub", href: "https://github.com/rubendariosanchez", icon: Github },
  { title: "Perfil de LinkedIn", name: "LinkedIn", href: "https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-s%C3%A1nchez-ram%C3%ADrez-6a3a606b/", icon: Linkedin },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    // Evita que el formulario recargue la página
    e.preventDefault()

    // Activa el estado de envío (deshabilita botón, muestra loading, etc.)
    setIsSubmitting(true)

    try {
      // Se realiza la petición POST al Web App de Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxaPxwBxbbihaXMUtR5A6tFIJoUYQxh89ojpXgyAwx7KF6_ipt25EnNsdykslz2OOcchQ/exec",
        {
          method: "POST",
          headers: {
            // Indicamos que enviamos datos en formato JSON
            "Content-Type": "text/plain;charset=utf-8",
          },
          // Enviamos la información del formulario al backend
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      )

      // Convertimos la respuesta del servidor a JSON
      const result = await response.json()

      // Validamos si el backend respondió con error
      if (!result.success) {
        throw new Error(result.message || "Error al enviar el mensaje")
      }

      // Limpiamos el formulario si todo fue exitoso
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Mensaje de confirmación al usuario
      alert("Mensaje enviado correctamente 🚀")

    } catch (error) {
      // Mostramos el error en consola para depuración
      console.error(error)

      // Mensaje de error para el usuario
      alert("Ocurrió un error al enviar el mensaje 😢")

    } finally {
      // Finaliza el estado de envío (habilita nuevamente el botón)
      setIsSubmitting(false)
    }
  }


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary font-medium mb-2">Hablemos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes
            en contactarme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Redes sociales
              </h3>
              <div className="flex gap-3">
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
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="¿De qué quieres hablar?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tu mensaje..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
