/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        background: "var(--color-background)",
        'purpule': '#644ed7',
      },
      fontFamily: {
        body: "var(--font-inter), sans-serif",
        heading: "var(--font-cousine), serif",
        manrope: "var(--font-manrope), sans-serif"
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
        "custom": "-0.8rem"
      },
      fontSize: {
        xs: "1.05rem",
        sm: "1.4rem",
        md: "1.575rem",
        lg: "1.7rem",
        xl: "2.1rem",
        "2xl": "4.2rem",
        "3xl": "8.3rem",
        "small": "2.3rem",
        
      },
    },
  },
  plugins: [],
};