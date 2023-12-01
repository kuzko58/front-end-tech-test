import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'satoshi-regular': [
                    'var(--font-satoshi-regular)',
                    'sans-serif',
                ],
                'satoshi-medium': ['var(--font-satoshi-medium)', 'sans-serif'],
                'satoshi-bold': ['var(--font-satoshi-bold)', 'sans-serif'],
                'monument-regular': [
                    'var(--font-monument-regular)',
                    'sans-serif',
                ],
            },
            colors: {
                primary: '#3d8bff',
                secondary: '#ab23ff',
                tertiary: '#13171d',
            },
            padding: {
                'app-x': '15px',
                'app-x-md': '30px',
                'app-x-xl': '50px',
                'app-y': '20px',
                'app-y-md': '20px',
                'app-y-xl': '30px',
            },
            maxWidth: {
                'app-w': '1440px',
            },
            transitionProperty: {
                'max-height': 'max-height',
            },
        },
    },
    plugins: [],
};
export default config;
