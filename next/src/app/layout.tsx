import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Home | Song Shop',
	description: 'Your source for professional pop song recording rights.',
};

export const viewport: Viewport = {
	initialScale: 1,
	width: 'device-width',
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
