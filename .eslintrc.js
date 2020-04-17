const resolve = require('./__webpack/webpack.resolve.js')

// 'off' = 0
// 'warn' = 1
// 'error' = 2

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'jest', 'prettier', 'sort-class-members'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    quotes: [1, 'single', { allowTemplateLiterals: true }],
    camelcase: 0,
    semi: [1, 'never'],
    'jsx-a11y/label-has-for': 0,
    'class-methods-use-this': 0,
    'eol-last': 1,
    'no-multi-assign': 0,
    'comma-dangle': [1, { arrays: 'only-multiline', objects: 'only-multiline' }],
    'max-len': [2, { code: 180, comments: 200 }],
    'jsx-quotes': [1, 'prefer-single'],
    'linebreak-style': [2, 'windows'],
    'no-console': 0, // This should be set to warn in production
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [1, { argsIgnorePattern: '^action$|^e$|^event$' }],
    'no-param-reassign': 0,
    'import/no-unresolved': [2, { ignore: ['./'] }],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 2,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': [1, { ignore: ['children', 'style', 'className', 'history', 'match', 'location'] }],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve
        }
      }
    }
  }
}
