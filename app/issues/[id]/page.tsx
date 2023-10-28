import { IssueStatusBadge } from '@/app/components';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text, Grid, Box, Button } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default async function IssueDetailPage({
	params,
}: {
	params: { id: string };
}) {
	if (Number.isNaN(parseInt(params.id))) notFound();

	const issue = await prisma.issue.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

	if (!issue) notFound();

	return (
		<Grid columns={{ initial: '1', md: '2' }} gap="5">
			<Box>
				<Heading>{issue.title}</Heading>
				<Flex className="space-x-3" my="2">
					<IssueStatusBadge status={issue.status} />
					<Text>{issue.createdAt.toDateString()}</Text>
				</Flex>
				<Card className="prose" mt="4">
					<ReactMarkdown>{issue.description}</ReactMarkdown>
				</Card>
			</Box>
			<Box>
				<Button>
					<Pencil2Icon />
					<Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
				</Button>
			</Box>
		</Grid>
	);
}
