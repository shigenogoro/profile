import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line/10 bg-bg/85 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="font-sans text-lg font-bold tracking-tight text-fg">
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-body transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-fg/5 text-body md:hidden"
          >
            <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line/10 bg-bg/95 md:hidden">
          <ul className="section-shell flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-body transition hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink-950"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
