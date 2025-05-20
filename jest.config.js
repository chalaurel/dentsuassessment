module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  