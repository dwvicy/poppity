module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {},
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ]
    ]
};
