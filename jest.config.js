module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  "setupFilesAfterEnv": [
    "<rootDir>/src/setuptests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom"
}