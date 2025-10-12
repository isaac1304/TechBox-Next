module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'float-pattern': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '50% 50%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.35' },
                    '50%': { opacity: '0.6' },
                },
            },
            animation: {
                'float-pattern': 'float-pattern 18s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
