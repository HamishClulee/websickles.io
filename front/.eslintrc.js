module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ['error', 'never'],
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
}
