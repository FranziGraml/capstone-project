import CardArticle from '../UI/PostArticle.Styled';
import CardAddress from '../UI/PostAdresse.Styled';
import CardUserName from '../UI/PostName.Styled';

export default function PostCard({ name, content, contact, mail, mobile }) {
	return (
		<CardArticle>
			<CardUserName>{name}</CardUserName>

			<p>{content}</p>

			<p>{contact}</p>

			<address>
				<CardAddress>{mail}</CardAddress>
			</address>

			<address>
				<CardAddress>{mobile}</CardAddress>
			</address>
		</CardArticle>
	);
}
