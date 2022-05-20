//import uuid from 'react-uuid';
import RenderForm from '../UI/Form/RenderPost.styles';
import Contact from '../UI/Form/ContactHeadline.styles';

export default function RenderPosts({ onAddPost }) {
	return (
		<>
			{onAddPost.map(posts => {
				return (
					<RenderForm key={posts.id}>
						<p>{posts.name}</p>
						<p>{posts.post}</p>
						<Contact>Kontakt</Contact>
						<p>{posts.mail}</p>
						<p>{posts.mobile}</p>
					</RenderForm>
				);
			})}
		</>
	);
}
