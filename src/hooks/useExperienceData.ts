"use client"

import { useEffect, useState } from "react"
import type { WorkExperience, Education } from "@/types/experience"

const BASE_URL =
  "https://script.google.com/macros/s/AKfycbxaPxwBxbbihaXMUtR5A6tFIJoUYQxh89ojpXgyAwx7KF6_ipt25EnNsdykslz2OOcchQ/exec"

type ExperienceData = {
  workExperience: WorkExperience[]
  education: Education[]
  loading: boolean
}

export function useExperienceData(): ExperienceData {
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [workRes, eduRes] = await Promise.all([
          fetch(`${BASE_URL}?action=experience`).then((r) => r.json()),
          fetch(`${BASE_URL}?action=education`).then((r) => r.json()),
        ])

        setWorkExperience(workRes)
        setEducation(eduRes)
      } catch (error) {
        console.error("Error cargando experiencia/educación", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { workExperience, education, loading }
}