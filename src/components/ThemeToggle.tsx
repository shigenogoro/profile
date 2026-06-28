import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
  return (localStorage.getItem('theme') as Theme) ?? 'dark'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-fg/5 text-body transition hover:border-accent hover:text-accent"
    >
      <i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`} aria-hidden="true" />
    </button>
  )
}

export default ThemeToggle
