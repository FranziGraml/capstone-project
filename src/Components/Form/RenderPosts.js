//import uuid from 'react-uuid';
import RenderForm from '../UI/Form/RenderPost.styles';

export default function RenderPosts({ onAddPost }) {
	return (
		<>
			{onAddPost.map(posts => {
				return (
					<RenderForm key={posts.id}>
						<p>{posts.name}</p>
						<p>{posts.post}</p>
						<h2>Kontakt</h2>
						<p>{posts.mail}</p>
						<p>{posts.mobile}</p>
					</RenderForm>
				);
			})}
		</>
	);
}
