import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'atomic-tangerine': {
          hex: '#EE9962ff',
          hsl: 'hsla(24, 80%, 66%, 1)',
          rgb: 'rgba(238, 153, 98, 1)',
        },
        'black': {
          hex: '#030203ff',
          hsl: 'hsla(300, 20%, 1%, 1)',
          rgb: 'rgba(3, 2, 3, 1)',
        },
        'charcoal': {
          hex: '#3D4E60ff',
          hsl: 'hsla(211, 22%, 31%, 1)',
          rgb: 'rgba(61, 78, 96, 1)',
        },
        'champagne-pink': {
          hex: '#D7C8BDff',
          hsl: 'hsla(25, 25%, 79%, 1)',
          rgb: 'rgba(215, 200, 189, 1)',
        },
        'charcoal-2': {
          hex: '#3F4C5Aff',
          hsl: 'hsla(211, 18%, 30%, 1)',
          rgb: 'rgba(63, 76, 90, 1)',
        },
      },
      fontFamily: {
        'nova-square': ['"Nova Square"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
