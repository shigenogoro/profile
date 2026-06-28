import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'

const Contact = () => (
  <section id="contact" className="scroll-mt-20 border-t border-line/10 py-24">
    <div className="section-shell text-center">
      <Reveal>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let us build something</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
          I am looking for ML/AI Engineer roles (open to Data Scientist and SWE). The
          fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <SocialLinks className="mt-8 justify-center" size="lg" />
      </Reveal>
    </div>
  </section>
)

export default Contact
