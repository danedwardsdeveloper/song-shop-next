import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.tailwind.css';

import { baseMetadata } from './_library/metadata';
import { validateEnvironment } from './environment';
validateEnvironment();

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
};

export const metadata: Metadata = {
	...baseMetadata,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-GB" className="h-full bg-white">
			<body className={`${inter.className} h-full`}>{children}</body>
		</html>
	);
}
