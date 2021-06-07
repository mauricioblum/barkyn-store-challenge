module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
  ]
};