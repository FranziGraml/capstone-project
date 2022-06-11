import CardArticle from '../UI/PostCard/PostArticle.styles';
import CardAddress from '../UI/PostCard/PostAddress.styles';
import CardUserName from '../UI/PostCard/PostName.styles';
import ContactCard from '../UI/PostCard/PostContact.styles';
import DeleteButton from '../Form/DeleteButton';
import CardContent from '../UI/PostCard/PostContent.styles';
import PostTagWrapper from '../UI/PostCard/PostTagWrapper.styles';

export default function PostCard({ name, content, mail, mobile, id, tags }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<CardContent>{content}</CardContent>

			<ContactCard>Kontakt</ContactCard>

			<CardAddress>{mail}</CardAddress>

			<CardAddress>{mobile}</CardAddress>

			<PostTagWrapper>{tags}</PostTagWrapper>

			<DeleteButton id={id} />
		</CardArticle>
	);
}
