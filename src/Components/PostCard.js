import { CardArticle } from './StyledPostArticle';
import { CardAddress } from './StyledPostAdresse';
import { CardUserName } from './StyledPostName';

export default function Posts({ name, content, contact, mail, mobile }) {
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
