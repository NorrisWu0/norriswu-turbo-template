export const parameters = {
  backgrounds: {
    default: "Dark",
    values: [
      {
        name: "Dark",
        value: "#1B181E",
      },
      {
        name: "Light",
        value: "#F8F5F1",
      },
      {
        name: "Accent",
        value: "#FF3F66",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
