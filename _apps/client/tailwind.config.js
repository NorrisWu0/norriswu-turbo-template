module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      // => @media (min-width: 640px) { ... }

      tablet: "700px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1120px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      inter: "var(--font-inter)",
      mono: "var(--font-mono)",
    },
    gridTemplateColumns: {
      mobile: "1fr",
      tablet: "repeat(2, 50%)",
      desktop: "repeat(4, minmax(25%, auto))",
    },
  },
  plugins: [],
};
