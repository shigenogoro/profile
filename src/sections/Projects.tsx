import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

const Projects = () => {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line/10 py-24">
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">Work</p>
          <h2 className="section-title">Featured projects</h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {featured.map((project) => (
            <Reveal key={project.name}>
              <ProjectCard project={project} />
            </Reveal>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
