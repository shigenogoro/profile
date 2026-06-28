import { profile } from '../data/profile'
import Reveal from '../components/Reveal'

const About = () => (
  <section id="about" className="scroll-mt-20 py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">About</p>
        <h2 className="section-title">Research-to-product ML engineering</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-body">
          {profile.about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.quickFacts.map((fact) => (
            <span key={fact} className="chip">
              {fact}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

export default About
