import AppLayout from '@/layouts/AppLayout';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const satoshiRegular = localFont({
    src: '../../public/fonts/Satoshi-Regular.woff2',
    variable: '--font-satoshi-regular',
});

const satoshiMedium = localFont({
    src: '../../public/fonts/Satoshi-Medium.woff2',
    variable: '--font-satoshi-medium',
});

const satoshiBold = localFont({
    src: '../../public/fonts/Satoshi-Bold.woff2',
    variable: '--font-satoshi-bold',
});

const monumentExtendedRegular = localFont({
    src: '../../public/fonts/MonumentExtended-Regular.woff2',
    variable: '--font-monument-regular',
});

export const metadata: Metadata = {
    title: 'Creon',
    description: 'Creon',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${satoshiRegular.variable} ${satoshiMedium.variable} ${satoshiBold.variable} ${monumentExtendedRegular.variable} font-sans`}
            >
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
