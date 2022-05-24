import CardArticle from '../UI/PostCard/PostArticle.styles';
import CardAddress from '../UI/PostCard/PostAddress.styles';
import CardUserName from '../UI/PostCard/PostName.styles';
import ContactCard from '../UI/PostCard/PostContact.styles';
import DeleteButton from '../Form/DeleteButton';

export default function PostCard({ name, content, mail, mobile, id, onAddPost, onSetAddPost }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<p>{content}</p>

			<ContactCard>Kontakt</ContactCard>

			<CardAddress>{mail}</CardAddress>

			<CardAddress>{mobile}</CardAddress>

			<DeleteButton id={id} onAddPost={onAddPost} onSetAddPost={onSetAddPost} />
		</CardArticle>
	);
}
