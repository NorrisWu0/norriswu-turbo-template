module.exports = {
  ...require("@norriswu/config-eslint/next.js"),
  root: true,
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
