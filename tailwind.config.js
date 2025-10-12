module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                drift: {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '50%': { transform: 'translate3d(-30px, -30px, 0)' },
                    '100%': { transform: 'translate3d(0, 0, 0)' },
                },
            },
            animation: {
                drift: 'drift 18s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
