import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js', 'jsx', 'ts', 'tsx', 'json', 'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setup-test.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jest-empty-component.tsx'),
    },
    reporters: [
        'default',
        ['jest-html-reporters', {
            publicPath: '<rootDir>/reports/unit',
            filename: 'report.html',
            openReport: true,
        }],
    ],
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest',
    },
};
