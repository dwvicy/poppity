const purgecss = {
    '@fullhuman/postcss-purgecss': {
        // Use this if you have `./components` folder
        // content: ["./components/**/*.js", "./pages/**/*.js"],
        content: ['./pages/**/*.js', './src/components/**/*.js'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }
};

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
        ],
        ...(process.env.NODE_ENV === 'production' ? { ...purgecss, cssnano: {} } : {})
    ]
};
