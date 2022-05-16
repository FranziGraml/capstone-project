import CardArticle from '../UI/PostArticle.styled';
import CardAddress from '../UI/PostAddress.styled';
import CardUserName from '../UI/PostName.styled';

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
