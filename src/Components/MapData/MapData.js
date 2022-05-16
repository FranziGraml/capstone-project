import PostCard from '../PostCard/PostCard';

export default function MapData({ postdata }) {
	return postdata.map(data => {
		return (
			<PostCard
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
