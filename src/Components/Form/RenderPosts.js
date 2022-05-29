import PostCard from '../PostCard/PostCard';
import useSWR from 'swr';
import { nanoid } from 'nanoid';

export default function RenderPosts() {
	const { data: posts, error } = useSWR('/api/posts');
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<>
			{posts.map(post => {
				return (
					<ul key={nanoid()}>
						<PostCard
							name={post.name}
							content={post.content}
							mail={post.mail}
							mobile={post.mobile}
							id={nanoid()}
						/>
					</ul>
				);
			})}
		</>
	);
}
