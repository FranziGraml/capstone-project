import CardArticle from '../UI/PostCard/PostArticle.styles';
import CardAddress from '../UI/PostCard/PostAddress.styles';
import CardUserName from '../UI/PostCard/PostName.styles';
import ContactCard from '../UI/PostCard/PostContact.styles';
import DeleteButton from '../Form/DeleteButton';

export default function PostCard({ name, content, mail, mobile, id, onPosts, onSetPosts }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<p>{content}</p>

			<ContactCard>Kontakt</ContactCard>

			<CardAddress>{mail}</CardAddress>

			<CardAddress>{mobile}</CardAddress>

			<DeleteButton id={id} onPosts={onPosts} onSetPosts={onSetPosts} />
		</CardArticle>
	);
}
