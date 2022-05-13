import data from '../Services/static-posts.json';
import { CardArticle } from './StyledPostArticle';
import { CardAddress } from './StyledPostAdresse';
import { CardUserName } from './StyledPostName';

export default function Posts() {
	return (
		<CardArticle>
			<CardUserName>{data[0].name}</CardUserName>

			<p>{data[0].content}</p>

			<p>{data[0].contact}</p>

			<address>
				<CardAddress>{data[0].mail}</CardAddress>
			</address>

			<address>
				<CardAddress>{data[0].mobile}</CardAddress>
			</address>
		</CardArticle>
	);
}
