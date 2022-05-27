import PostCard from '../PostCard/PostCard';

export default function RenderPosts({ posts, onSetPosts }) {
	return (
		<>
			{posts.map(post => {
				return (
					<ul key={post.id}>
						<PostCard
							name={post.name}
							content={post.post}
							mail={post.mail}
							mobile={post.mobile}
							id={post.id}
							posts={posts}
							onSetPosts={onSetPosts}
						/>
					</ul>
				);
			})}
		</>
	);
}
