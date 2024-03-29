const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '320px',
            ...defaultTheme.screens,
            sm: '576px',
        },
        extend: {},
    },
    plugins: [],
}
