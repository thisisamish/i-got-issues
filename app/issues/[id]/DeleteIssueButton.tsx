'use client';

import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteIssueButton({ issueId }: { issueId: number }) {
	const router = useRouter();
	const [error, setError] = useState(false);

	return (
		<>
			<AlertDialog.Root>
				<AlertDialog.Trigger>
					<Button color="red">Delete Issue</Button>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
					<AlertDialog.Description>
						Are you sure you want to delete this issue? This action
						cannot be undone.
					</AlertDialog.Description>
					<Flex mt="4" gap="3">
						<AlertDialog.Cancel>
							<Button variant="soft" color="gray">
								Cancel
							</Button>
						</AlertDialog.Cancel>
						<AlertDialog.Action>
							<Button
								color="red"
								onClick={async () => {
									try {
										await axios.delete(
											'/api/issues/' + issueId
										);
										router.push('/issues');
										router.refresh();
									} catch (error) {
										setError(true);
									}
								}}
							>
								Delete Issue
							</Button>
						</AlertDialog.Action>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>
			<AlertDialog.Root open={error}>
				<AlertDialog.Content>
					<AlertDialog.Title>Error</AlertDialog.Title>
					<AlertDialog.Description mb="2">
						This issue could not be deleted.
					</AlertDialog.Description>
					<Button
						variant="soft"
						color="gray"
						onClick={() => setError(false)}
					>
						OK
					</Button>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	);
}
