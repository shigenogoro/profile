import { skills } from '../data/skills'
import Reveal from '../components/Reveal'

const Skills = () => (
  <section id="skills" className="scroll-mt-20 border-t border-line/10 py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tech stack</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-line/10 bg-surface p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-fg">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
