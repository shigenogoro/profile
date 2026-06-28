/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Display / titles — keep Sono
        display: ['Sono', 'Helvetica', 'Arial', 'sans-serif'],
        // Body / content — Inter for readability
        sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Brand palette — echoes PuckAI's deep-navy / cyan system
        ink: {
          950: '#070b12',
          900: '#0b111c',
          800: '#111a2b',
          700: '#1b2740',
        },
        accent: {
          DEFAULT: '#22d3ee', // cyan-400
          soft: '#67e8f9',
          deep: '#0891b2',
        },
        // Semantic tokens — driven by CSS variables, swap with the `.dark` class
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        body: 'rgb(var(--c-body) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent2: 'rgb(var(--c-accent2) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 8px 40px -12px rgba(34,211,238,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
