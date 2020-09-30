/* global module */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['eslint:recommended', 'prettier'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['prettier'],

  overrides: [
    Object.assign(
      {
        files: ['**/*.test.js'],
        env: { jest: true },
        plugins: ['jest'],
      },
      // eslint-disable-next-line no-undef
      require('eslint-plugin-jest').configs.recommended
    ),
  ],

  rules: {
    'prettier/prettier': ['error'],
  },
};
