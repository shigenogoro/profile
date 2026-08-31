import type { Project } from '../data/types'
import ShowcaseFrame from './ShowcaseFrame'

const ProjectCard = ({ project }: { project: Project }) => {
  const featured = project.featured
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line/10 bg-surface transition hover:border-accent/40 hover:shadow-glow ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      {project.showcase && <ShowcaseFrame showcase={project.showcase} />}

      {!project.showcase && project.image && (
        <div
          className={`overflow-hidden ${
            featured
              ? 'flex items-center justify-center bg-ink-950 p-2 md:w-1/2'
              : 'aspect-[1.9/1]'
          }`}
        >
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className={
              featured
                ? 'max-h-[34rem] w-full rounded-lg object-contain'
                : 'h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]'
            }
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="mb-1 flex items-center gap-2">
          <h3 className="font-display text-xl font-bold text-fg">{project.name}</h3>
          {featured && (
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
              Featured
            </span>
          )}
        </div>
        <p className="mb-3 text-sm font-medium text-accent2">{project.tagline}</p>
        <p className="mb-4 text-sm leading-relaxed text-body">{project.description}</p>

        {project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-body">
                <span className="mt-1 text-accent" aria-hidden="true">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mb-5 mt-auto flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent2 transition hover:text-accent"
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
