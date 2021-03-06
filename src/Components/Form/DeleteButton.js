import ButtonDelete from '../UI/Form/Button/DeleteButton.styles';
import Icon from '../UI/Icons/icons';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';

export default function DeleteButton({ id }) {
	const { mutate } = useSWRConfig();
	const router = useRouter();

	return (
		<ButtonDelete
			type="button"
			onClick={async () => {
				const _response = await fetch('/api/post/' + id, {
					method: 'DELETE',
				});
				mutate('/api/posts');
				router.push('/posts');
			}}
		>
			<Icon variant="waste" />
		</ButtonDelete>
	);
}
