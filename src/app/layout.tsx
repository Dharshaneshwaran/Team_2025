import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Premium Notes | Elegant Digital Notebook',
    description: 'A next-generation notes application with premium paper-peel animations and tactile design.',
    keywords: 'notes, productivity, sticky notes, elegant, premium',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
