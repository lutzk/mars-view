module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': './src/component',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@strings': './src/strings',
          '@store': './src/store',
          '@api': './src/api',
          '@config': './src/config',
          '@styleguide': './src/styleguide',
          '@utils': './src/utils'
        },
      },
    ],
  ],
};
