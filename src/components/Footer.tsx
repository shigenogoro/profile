import { profile } from '../data/profile'

const Footer = () => (
  <footer className="border-t border-line/10 py-8">
    <div className="section-shell flex flex-col items-center justify-between gap-3 text-center text-sm text-muted sm:flex-row sm:text-left">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs">Built with React, Vite &amp; Tailwind CSS</p>
    </div>
  </footer>
)

export default Footer
