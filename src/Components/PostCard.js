import data from '../Services/static-posts.json';
import { CardArticle } from './StyledPostArticle';
import { CardAdresse } from './StyledPostAdresse';
import { CardUserName } from './StyledPostName';

export default function Posts() {
	return (
		<CardArticle>
			<CardUserName>{data[0].name}</CardUserName>

			<p>{data[0].content}</p>

			<p>{data[0].contact}</p>

			<address>
				<CardAdresse>{data[0].mail}</CardAdresse>
			</address>

			<address>
				<CardAdresse>{data[0].mobile}</CardAdresse>
			</address>
		</CardArticle>
	);
}
