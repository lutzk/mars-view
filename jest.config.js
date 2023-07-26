module.exports = {
  clearMocks: true,
  preset: 'react-native',
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)'
  ],
};
