const defaultConfig = require("@norriswu/config-jest/next");

module.exports = {
  ...defaultConfig,
  rootDir: ".",
  moduleNameMapper: {
    ...defaultConfig.moduleNameMapper,
    "^@src/(.*)$": ["<rootDir>/src/$1"],
  },
};
