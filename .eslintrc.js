module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx', 'ts'] }],
        'react/react-in-jsx-scope': ['off'],
        'import/no-unresolved': ['off'],
        'import/extensions': ['off'],
        'import/prefer-default-export': ['off'],
        'no-unused-vars': ['warn'],
        'react/require-default-props': ['off'],
        'react/jsx-props-no-spreading': ['warn'],
        'react/function-component-definition': ['off'],
        'no-shadow': ['off'],
        'import/no-extraneous-dependencies': ['warn'],
        'no-underscore-dangle': ['off'],
        'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['stroke'] }],
    },
    globals: {
        __IS_DEV__: true,
    },
};