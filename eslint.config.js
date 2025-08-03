// eslint.config.cjs
const js = require('@eslint/js');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    ...js.configs.recommended,
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
