import type { ExperienceItem } from '../data/types'

const TimelineItem = ({ item, last }: { item: ExperienceItem; last: boolean }) => (
  <li className="relative pl-8">
    {/* line */}
    {!last && <span className="absolute left-[7px] top-3 h-full w-px bg-line/15" aria-hidden="true" />}
    {/* dot */}
    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />

    <div className="flex items-start gap-3 pb-10">
      {item.logo && (
        <img
          src={item.logo}
          alt={`${item.org} logo`}
          loading="lazy"
          className="h-11 w-11 shrink-0 rounded-md bg-white/90 object-contain p-1"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="font-display text-lg font-bold text-fg">{item.role}</h3>
          <span className="font-mono text-xs text-muted">{item.period}</span>
        </div>
        <p className="text-sm font-medium text-accent2">
          {item.org}
          {item.location ? ` · ${item.location}` : ''}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-body">{item.summary}</p>

        <ul className="mt-3 space-y-1.5">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-body">
              <span className="mt-1 text-accent" aria-hidden="true">▹</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {item.tech && item.tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}

        {item.links && item.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent2 transition hover:text-accent"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </li>
)

export default TimelineItem
