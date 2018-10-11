module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['vue', 'prettier'],
  globals: {
  },
  rules: {
    "prettier/prettier": ["error", {
      bracketSpacing: true,
      singleQuote: true,
      jsxBracketSameLine: false,
      trailingComma: "none",
      printWidth: 80,
    }],
    /**
     * Possible Errors
     */
    'comma-dangle': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'warn',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'warn',
    'valid-typeof': 'error',
    /**
     * js-rules
     */
    'no-alert': 'warn',
    'prefer-const': 'error',

    /**
     * template-rules
     */
    'vue/require-v-for-key': 1,
    'vue/valid-v-for': 1,
    'vue/valid-v-on': 1,
    'vue/no-side-effects-in-computed-properties': 1,
    'vue/no-dupe-keys': 1,
    'vue/max-attributes-per-line': 0
  }
}
