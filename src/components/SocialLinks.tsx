import { profile } from '../data/profile'

interface SocialLinksProps {
  className?: string
  size?: 'md' | 'lg'
}

const SocialLinks = ({ className = '', size = 'md' }: SocialLinksProps) => {
  const sizeClass = size === 'lg' ? 'text-2xl h-12 w-12' : 'text-lg h-10 w-10'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer"
          aria-label={social.label}
          title={social.label}
          className={`flex items-center justify-center rounded-full border border-line/10 bg-fg/5 text-body transition hover:border-accent hover:text-accent ${sizeClass}`}
        >
          <i className={`fa fa-${social.icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
