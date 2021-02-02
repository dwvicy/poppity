const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '700px',
            // => @media (min-width: 640px) { ... }

            md: '800px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px'
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        },

        extend: {
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
            },
            rotate: ['active', 'group-hover'],
            backgroundOpacity: {
                10: '0.1',
                20: '0.2',
                95: '0.95'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
