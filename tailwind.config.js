module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'fem': {
                    100: 'hsl(215, 51%, 70%)',
                    200: 'hsl(178, 100%, 50%)',
                    300: 'hsl(217, 54%, 11%)',
                    400: 'hsl(216, 50%, 16%)',
                    500: 'hsl(215, 32%, 27%)',
                    600: 'hsl(0, 0%, 100%)',
                },
            },
            fontFamily: {
                'redhat': ['Red Hat Display','sans-serif'],
            },
        },
    },
    plugins: [],
}
