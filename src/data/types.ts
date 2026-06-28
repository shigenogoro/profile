export interface SocialLink {
  label: string
  href: string
  /** Font Awesome 4 icon class suffix, e.g. "github" -> "fa fa-github" */
  icon: string
}

export interface Profile {
  name: string
  shortName: string
  headline: string
  /** Rotating phrases for the typewriter in the hero. */
  typewriter: string[]
  valueProp: string
  about: string[]
  quickFacts: string[]
  location: string
  email: string
  phone: string
  resumeUrl: string
  socials: SocialLink[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  links: { label: string; href: string }[]
  image?: string
  featured?: boolean
}

export interface ExperienceItem {
  role: string
  org: string
  location?: string
  period: string
  summary: string
  points: string[]
  tech?: string[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  details: string[]
  logo?: string
}
