module.exports = {
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yd: {
                    blue: '#024668'
                }
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            keyframes: {
                slideInDown: {
                    '0%': {
                        transform: 'translate3d(0, -10%, 0)',
                        visibility: 'visible'
                    },
                    '100%': { transform: 'translate3d(0, 0, 0)' }
                },
                fadeIn: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 1
                    }
                },
                fadeOut: {
                    '0%': {
                        opacity: 1
                    },
                    '100%': {
                        opacity: 0
                    }
                }
            },
            animation: {
                'slide-down': 'slideInDown .5s',
                'fade-in': 'fadeIn .5s',
                'fade-out': 'fadeOut .5s'
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['last'],
        },
    },
    plugins: [],
}