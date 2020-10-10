module.exports = {
  extends: [
    'airbnb-base/whitespace'
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'no-nested-ternary': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off'
  }
}