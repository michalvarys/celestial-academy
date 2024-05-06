


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "390px",
      // => @media (min-width: 390px) { ... }

      sm: "576px",
      // => @media (min-width: 575px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1366px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        whitee: "#FFF",
        blackee: "#020013",
        supcream: "#E2E2E2",
        lightyellow: "#DBF77E",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Cormorant: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ],
}