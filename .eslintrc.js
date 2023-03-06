module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'off',
    'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': ['off']
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
