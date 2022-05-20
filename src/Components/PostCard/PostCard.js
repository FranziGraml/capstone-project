import CardArticle from '../UI/PostArticle.styles';
import CardAddress from '../UI/PostAddress.styles';
import CardUserName from '../UI/PostName.styles';
import ContactCard from '../UI/PostContact.styles';

export default function PostCard({ name, content, contact, mail, mobile }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<p>{content}</p>

			<ContactCard>{contact}</ContactCard>

			<CardAddress>{mail}</CardAddress>

			<CardAddress>{mobile}</CardAddress>
		</CardArticle>
	);
}
