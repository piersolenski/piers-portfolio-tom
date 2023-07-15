module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
  },

  rules: {
    // No need to append .js extension to imports
    'class-methods-use-this': [0],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'jsx-a11y/media-has-caption': [0],
    'no-use-before-define': [0],
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': [0],
    'react/no-danger': [0],
    'react/require-default-props': [0],
    'global-require': [0],
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
      },
    ],
  },
};
