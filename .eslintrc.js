module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/core/components'],
          ['services', './src/core/services'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-new': 'off',
    'no-underscore-dangle': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
