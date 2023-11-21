import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import fontFamily from 'tailwindcss/defaultTheme';

const config: Config = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        // ...defaultTheme,
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
                mc: {
                    DEFAULT: '#EF8023',
                    dark: '#FF6D00',
                },
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
        },
    },
    plugins: [],
};
export default config;
