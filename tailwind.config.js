/** @type {import('tailwindcss').Config} */

const color = {
  primary: {
    light: "#F0F8FF",
    DEFAULT: "#095494"
  }
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [{ pattern: /(bg|text|border)-(primary|secondary|white|primary-light)/ }],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F0F8FF",
          DEFAULT: "#095494"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
