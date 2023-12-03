/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(var(--soft-red))",
        yellow: "hsl(var(--yellow))",
        textGraphicDesign: "hsl(var(--text-graphic-design))",
        textPhotography: "hsl(var(--text-photography))",
        footer: "hsl(var(--footer))",
        veryDarkDesaturatedBlue: "hsl(var(--very-dark-desaturated-blue))",
        veryDarkGrayishBlue: "hsl(var(--very-dark-grayish-blue))",
        darkGrayishBlue: "hsl(var(--dark-grayish-blue))",
        grayishBlue: "hsl(var(--grayish-blue))",
        white: "hsl(var(--white))",
      },
      fontFamily: {
        barlow: "Barlow, sans-serif",
        fraunces: "Fraunces, serif",
      },
    },
  },
  plugins: [],
};
