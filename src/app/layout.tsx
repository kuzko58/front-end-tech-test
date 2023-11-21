import AppLayout from '@/layouts/app-layout/AppLayout';
import type { Metadata } from 'next';
import {
    monumentExtendedRegular,
    satoshiBold,
    satoshiMedium,
    satoshiRegular,
} from '@/assets/fonts';
import './globals.css';

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
