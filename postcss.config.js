module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')[
            (require('postcss-preset-env'),
            {
                autoprefixer: {},
                stage: 3,
                features: {
                    'custom-properties': false
                }
            })
        ]
    ]
};
