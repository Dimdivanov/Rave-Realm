/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '19.5px'],
            lg: ['18px', '21.94px'],
            xl: ['20px', '24.38px'],
            '2xl': ['24px', '29.26px'],
            '3xl': ['28px', '50px'],
            '4xl': ['48px', '58px'],
            '8xl': ['96px', '106px'],
        },
        extend: {
            opacity: {
                98: '0.025',
            },
            fontFamily: {
                palanquin: ['Palanquin', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: '#ECEEFF',
                'coral-red': '#FF6452',
                'slate-gray': '#6D6D6D',
                'gray-38': '#383838',
                white: '#ffffff',
                'white-400': 'rgba(255, 255, 255, 0.80)',
            },
            boxShadow: {
                '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
            },
            backgroundImage: {
                tickets:
                    'linear-gradient(237.87deg, rgb(250, 145, 169) 0%, rgb(204, 255, 0) 100%)',
                hero: "url('src/assets/hero-background.svg')",
                card: "url('assets/images/thumbnail-background.svg')",
                mobileSection: 'linear-gradient(to right, #9f7aea, #ed64a6)',
                custom: 'linear-gradient(rgb(96, 4, 128) 0%, rgba(50, 4, 128, 0) 430px, rgb(0, 0, 0) 100%)',
            },
            backgroundColor: {
                'default-black': 'rgb(30, 30, 30)',
            },
            screens: {
                wide: '1440px',
            },
        },
    },
    plugins: [],
};
