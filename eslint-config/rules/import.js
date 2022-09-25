module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    /**
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
     */
    'import/named': 'error',
    'import/no-relative-packages': 'warn',
    'import/no-import-module-exports': 'warn',
    'import/no-cycle': 'warn',
  },
}
