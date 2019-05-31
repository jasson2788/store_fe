module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader?configFileName=./cypress/tsconfig.json',
                test: /\.ts$/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};