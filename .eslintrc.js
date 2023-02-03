module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@norriswu/config-eslint`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
