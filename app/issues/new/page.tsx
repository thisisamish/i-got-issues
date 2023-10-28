'use client';

import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import 'easymde/dist/easymde.min.css';

type IssueForm = {
	title: string;
	description: string;
};

export default function NewIssuePage() {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();

	return (
		<form
			onSubmit={handleSubmit(async (data) => {
				await axios.post('/api/issues', data);
				router.push('/issues');
			})}
			className="max-w-xl space-y-3"
		>
			<TextField.Root>
				<TextField.Input placeholder="Title" {...register('title')} />
			</TextField.Root>
			<Controller
				name="description"
				control={control}
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
			/>
			<Button>Submit New Issue</Button>
		</form>
	);
}
