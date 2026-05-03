/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chocolat: {
          bg: '#faf8f5',        // Off-white paper
          surface: '#ffffff',    // White card
          fg: '#1a1a1a',        // Rich dark
          muted: '#6b6b6b',     // Warm gray
          border: '#e8e4df',    // Warm border
          accent: '#8B4513',    // Saddle brown
          gold: '#c9a962',      // Gold accent
          cream: '#f5f0e8',     // Cream
          dark: '#2c1810',      // Dark chocolate
        }
      },
      fontFamily: {
        serif: ['"Iowan Old Style"', 'Charter', 'Georgia', 'serif'],
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '0.95', letterSpacing: '-3.6px' }],
        'heading': ['48px', { lineHeight: '1.0', letterSpacing: '-2.4px' }],
        'subheading': ['32px', { lineHeight: '1.25', letterSpacing: '-1.28px' }],
        'body-lg': ['20px', { lineHeight: '1.8' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
        'micro': ['12px', { lineHeight: '1.33', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}