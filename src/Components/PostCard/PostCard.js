import CardArticle from '../UI/PostArticle.styles';
import CardAddress from '../UI/PostAddress.styles';
import CardUserName from '../UI/PostName.styles';

export default function PostCard({ name, content, contact, mail, mobile }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<p>{content}</p>

			<h2>{contact}</h2>

			<CardAddress>{mail}</CardAddress>

			<CardAddress>{mobile}</CardAddress>
		</CardArticle>
	);
}
