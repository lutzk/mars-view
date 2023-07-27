module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }],
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/component',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@api': './src/api',
          '@config': './src/config',
          '@styleguide': './src/styleguide',
          '@utils': './src/utils',
          '@i18n': './src/i18n'
        },
      },
    ],
  ],
};
