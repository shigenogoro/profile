import { experience } from '../data/experience'
import TimelineItem from '../components/TimelineItem'
import Reveal from '../components/Reveal'

const Experience = () => (
  <section id="experience" className="scroll-mt-20 border-t border-line/10 py-24">
    <div className="section-shell">
      <Reveal>
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where I have worked</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="mt-10">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.role}
              item={item}
              last={i === experience.length - 1}
            />
          ))}
        </ol>
      </Reveal>
    </div>
  </section>
)

export default Experience
