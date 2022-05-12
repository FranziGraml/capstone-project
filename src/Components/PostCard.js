import data from '../Services/static-posts.json';
import { CardAdresse, CardArticle, CardItem } from './StyledPostCard';

export default function Posts() {
	return (
		<CardArticle>
			<CardItem>
				<h3>{data[0].name}</h3>
				<p>{data[0].content}</p>
				<h5>{data[0].contact}</h5>
				<CardAdresse>{data[0].mail}</CardAdresse>
				<CardAdresse>{data[0].mobile}</CardAdresse>
			</CardItem>
		</CardArticle>
	);
}
