import PostCard from '../PostCard/PostCard';

export default function RenderPosts({ onPosts, onSetPosts }) {
	return (
		<>
			{onPosts.map(posts => {
				return (
					<ul key={posts.id}>
						<PostCard
							name={posts.name}
							content={posts.post}
							mail={posts.mail}
							mobile={posts.mobile}
							id={posts.id}
							onPosts={onPosts}
							onSetPosts={onSetPosts}
						/>
					</ul>
				);
			})}
		</>
	);
}
