import uuid from 'react-uuid';

export default function RenderPosts({ onAddPost }) {
	return (
		<>
			{onAddPost.map(posts => {
				return (
					<div key={uuid}>
						<p>{posts.name}</p>
						<p>{posts.post}</p>
						<h2>Kontakt</h2>
						<p>{posts.mail}</p>
						<p>{posts.mobile}</p>
					</div>
				);
			})}
		</>
	);
}
