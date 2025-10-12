module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'float-pattern': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '50%': { transform: 'translate3d(-20px, -15px, 0)' },
                    '100%': { transform: 'translate3d(0, 0, 0)' },
                },
            },
            animation: {
                'float-pattern': 'float-pattern 18s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
