import { education } from '../data/education'
import Reveal from '../components/Reveal'

const Education = () => (
  <section id="education" className="scroll-mt-20 border-t border-line/10 py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic background</h2>
      </Reveal>

      <div className="mt-10 space-y-5">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.05}>
            <div className="flex items-start gap-4 rounded-2xl border border-line/10 bg-surface p-6">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-md bg-white/90 object-contain p-1"
                />
              )}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-sans text-lg font-bold text-fg">{edu.school}</h3>
                  <span className="font-mono text-xs text-muted">{edu.period}</span>
                </div>
                <p className="text-sm font-medium text-accent2">{edu.degree}</p>
                <ul className="mt-2 space-y-1">
                  {edu.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-body">
                      <span className="mt-1 text-accent" aria-hidden="true">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Education
