import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'I Got Issues',
	description: 'An issue tracker built in Next.js 13',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.variable}>
				<Theme appearance="light" accentColor="crimson">
					<Navbar />
					<main className="p-5">{children}</main>
				</Theme>
			</body>
		</html>
	);
}
