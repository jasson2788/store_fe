module.exports = {
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    'moduleNameMapper': {
        '^.+\\.scss$': 'identity-obj-proxy'
    },
    'moduleDirectories': [
        './node_modules',
        './app'
    ],
    'testMatch': ['**/app/**/*test.tsx']
};
