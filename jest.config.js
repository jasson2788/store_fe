module.exports = {
    'globals': {
        '__PRODUCTION__': false
    },
    'moduleDirectories': [
        './node_modules',
        './app'
    ],
    'moduleNameMapper': {
        '^.+\\.scss$': 'identity-obj-proxy'
    },
    'testMatch' : ['**/app/**/*test.tsx'],
    'transform' : {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
