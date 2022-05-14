import getPosts from '../src/Services/get-posts';
import PostMap from '../src/Components/List.js/MapData';

export function getStaticProps() {
	const data = getPosts();

	return {
		props: {
			data,
		},
	};
}
export default function Home({ data }) {
	return (
		<main>
			<PostMap postdata={data} />
		</main>
	);
}
