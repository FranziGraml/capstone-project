import PostCard from '../PostCard/PostCard';

export default function RenderPosts({ onAddPost, onSetAddPost }) {
	return (
		<>
			{onAddPost.map(posts => {
				return (
					<ul key={posts.id}>
						<PostCard
							name={posts.name}
							content={posts.post}
							mail={posts.mail}
							mobile={posts.mobile}
							id={posts.id}
							onAddPost={onAddPost}
							onSetAddPost={onSetAddPost}
						/>
					</ul>
				);
			})}
		</>
	);
}
