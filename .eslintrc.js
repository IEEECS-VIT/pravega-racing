module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off', // Turn off no-console warnings
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'off', // Turn off unused imports warnings
    'unused-imports/no-unused-vars': 'off', // Turn off unused vars warnings
    'simple-import-sort/exports': 'off', // Turn off import sort warnings
    'simple-import-sort/imports': 'off', // Turn off import sort warnings
  },
  globals: {
    React: true,
    JSX: true,
  },
};
