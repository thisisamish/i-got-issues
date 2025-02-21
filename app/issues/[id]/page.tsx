import authOptions from '@/app/auth/authOptions';
import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import AssigneeSelect from './AssigneeSelect';
import DeleteIssueButton from './DeleteIssueButton';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';

type Props = {
	params: Promise<{ id: string }>;
};

export default async function IssueDetailPage(props: Props) {
    const params = await props.params;
    const session = await getServerSession(authOptions);

    if (Number.isNaN(parseInt(params.id))) notFound();

    const issue = await prisma.issue.findUnique({
		where: {
			id: parseInt(params.id),
		},
	});

    if (!issue) notFound();

    return (
		<Grid columns={{ initial: '1', sm: '5' }} gap="5">
			<Box className="md:col-span-4">
				<IssueDetails issue={issue} />
			</Box>
			{session && (
				<Box>
					<Flex direction="column" gap="4">
						<AssigneeSelect issue={issue} />
						<EditIssueButton issueId={issue.id} />
						<DeleteIssueButton issueId={issue.id} />
					</Flex>
				</Box>
			)}
		</Grid>
	);
}

export async function generateMetadata(props: Props) {
    const params = await props.params;
    const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

    return {
		title: 'Issue ' + issue?.id + ' - ' + issue?.title,
		description: 'Detais of issue ' + issue?.id,
	};
}
