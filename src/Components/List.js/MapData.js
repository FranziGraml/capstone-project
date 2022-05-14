import Posts from '../PostCard';

export default function PostGrid({ postdata }) {
	return postdata.map(data => {
		return (
			<Posts
				key={data.id}
				name={data.name}
				content={data.content}
				contact={data.contact}
				mail={data.mail}
				mobile={data.mobile}
			/>
		);
	});
}
