const purgecss = {
    '@fullhuman/postcss-purgecss': {
        // Use this if you have `./components` folder
        // content: ["./components/**/*.js", "./pages/**/*.js"],
        content: ['./pages/**/*.js', './src/components/**/*.js'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }
};

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // Purge and minify CSS only production builds only
        ...(process.env.NODE_ENV === 'production' ? { ...purgecss, cssnano: {} } : {})
    }
};
