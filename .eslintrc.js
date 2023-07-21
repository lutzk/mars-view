module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'react',
    'react-hooks',
    'react-native',
    '@react-native',
    'jest',
  ],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        'ts-check': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        minimumDescriptionLength: 10,
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 1,
    'no-undef': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 1,
    'react-native/no-inline-styles': 0,
    quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
