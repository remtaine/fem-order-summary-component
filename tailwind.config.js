module.exports = {
    content: ['./*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'fem': {
                    100: 'hsl(225, 100%, 94%)',
                    200: 'hsl(245, 75%, 52%)',
                    300: 'hsl(225, 100%, 98%)',
                    400: 'hsl(224, 23%, 55%)',
                    500: 'hsl(223, 47%, 23%)',
                    600: 'hsl(245, 95%, 65%)',

                    // - Pale blue: hsl(225, 100%, 94%)
                    // - Bright blue: hsl(245, 75%, 52%)
                    // - Very pale blue: hsl(225, 100%, 98%)
                    // - Desaturated blue: hsl(224, 23%, 55%)
                    // - Dark blue: hsl(223, 47%, 23%)
                },
            },
            fontFamily: {
                'redhat': ['Red Hat Display','sans-serif'],
            },
        },
    },
    plugins: [],
}
// 