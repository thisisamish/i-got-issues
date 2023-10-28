import { Navbar } from '@/app/components';
import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './theme-config.css';

const inter = Inter({
	subsets: ['latin'],
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
					<main className="p-5">
						<Container>{children}</Container>
					</main>
				</Theme>
			</body>
		</html>
	);
}
