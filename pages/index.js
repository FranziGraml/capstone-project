import getPosts from '../src/Services/get-posts';
import MapData from '../src/Components/MapData/MapData';

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
			<MapData postdata={data} />
		</main>
	);
}
