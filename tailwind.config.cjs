/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: '1.9',
            color: '#1c1c1c',
            a: {
              color: '#1c1c1c',
              textUnderlineOffset: '3px',
            },
            'h2, h3': {
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
