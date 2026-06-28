import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'
import avatar from '../assets/photo/umass_hockey.jpg'

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-screen items-center overflow-hidden pt-16"
  >
    {/* background glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-deep/15 blur-[120px]" />
    </div>

    <div className="section-shell grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-accent2">
          Hi, I am
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <div className="mt-3 flex items-center gap-2 font-display text-2xl font-semibold text-accent2 sm:text-3xl">
          <Typewriter
            options={{
              strings: profile.typewriter,
              autoStart: true,
              loop: true,
              delay: 55,
              deleteSpeed: 30,
            }}
          />
        </div>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
          {profile.valueProp}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full border border-line/20 px-6 py-3 text-sm font-semibold text-body transition hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-body transition hover:text-accent"
          >
            Contact →
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </motion.div>

      <motion.div
        className="mx-auto md:ml-auto"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="relative w-56 sm:w-64 md:w-72">
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl" />
          <img
            src={avatar}
            alt={`Illustrated portrait of ${profile.name}`}
            className="aspect-square w-full rounded-full border-2 border-accent/40 object-cover object-top shadow-glow"
          />
        </div>
      </motion.div>
    </div>
  </section>
)

export default Hero
