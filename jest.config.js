module.exports = {
  "verbose": true,
  "setupFilesAfterEnv": [
    "<rootDir>test/config.js"
  ],
  "testEnvironment": "node",
  // "collectCoverage": true,
  "collectCoverageFrom": [
    "client/src/*.{js,jsx}"
  ]
};