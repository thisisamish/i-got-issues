import { Container, Flex } from '@radix-ui/themes';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="border-b mb-5 px-5 py-3">
			<Container>
				<Flex justify="between">
					<Flex align="center" gap="3">
						<Link href="/">I GOT ISSUES</Link>
					</Flex>
				</Flex>
			</Container>
		</nav>
	);
}
