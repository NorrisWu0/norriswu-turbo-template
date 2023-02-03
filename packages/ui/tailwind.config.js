const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "ui-",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        "tile-start-rgb": "rgba(2, 13, 46,1)",
        "tile-end-rgb": "rgba(2, 5, 19,1))",
        light: {
          500: "rgba(var(--text-color-primary), 1)",
        },
      },
      backgroundImage: {
        description:
          "linear-gradient(to bottom, transparent 0%, rgb(var(--background-end-rgb)) 40%)",
        "primary-glow": `radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))`,
        "secondary-glow": `linear-gradient(
          to bottom right,
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0.3)
          )`,
        "tile-border": `conic-gradient(
            #ffffff80,
            #ffffff40,
            #ffffff30,
            #ffffff20,
            #ffffff10,
            #ffffff10,
            #ffffff80
          )`,
        tile: `linear-gradient(
          to bottom right,
          rgba(var(--tile-start-rgb), 1),
          rgba(var(--tile-end-rgb), 1)
        )`,
      },
      animation: {
        rotate: "6s rotate linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
