module.exports = {
  resetMocks: true,
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@norriswu/config-jest/jest.setup.js"],
  testMatch: ["<rootDir>/**/**/*.spec.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
  },
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  coveragePathIgnorePatterns: [],
};
