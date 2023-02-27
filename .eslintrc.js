module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.jsx', '.tsx', 'ts'],
        }],
        'react/react-in-jsx-scope': ['off'],
        'import/no-unresolved': ['off'],
        'import/extensions': ['off'],
        'import/prefer-default-export': ['off'],
        'no-unused-vars': ['warn'],
        'react/require-default-props': ['off'],
        'react/function-component-definition': ['off'],
        'no-shadow': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'no-underscore-dangle': ['off'],
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'linebreak-style': ['warn'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'react-hooks/rules-of-hooks': ['error'],
        'react-hooks/exhaustive-deps': ['error'],
        'no-param-reassign': ['off'],
        'react/jsx-props-no-spreading': ['off'],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': ['off'],
        },
    }],
};
