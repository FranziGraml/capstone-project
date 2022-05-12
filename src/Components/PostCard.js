import data from '../Services/static-posts.json';
import { CardArticle } from './StyledPostArticle';
import { CardItem } from './StyledPostItem';
import { CardAdresse } from './StyledPostAdresse';
import { CardUserName } from './StyledPostName';

export default function Posts() {
	return (
		<CardArticle>
			<CardItem>
				<CardUserName>
					<p>{data[0].name}</p>
				</CardUserName>
				<span>
					<p>{data[0].content}</p>
				</span>
				<span>
					<p>{data[0].contact}</p>
				</span>
				<CardAdresse>
					<p>{data[0].mail}</p>
				</CardAdresse>
				<CardAdresse>
					<p>{data[0].mobile}</p>
				</CardAdresse>
			</CardItem>
		</CardArticle>
	);
}
