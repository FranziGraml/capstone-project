import getPosts from '../src/Services/get-list';
import PostGrid from '../src/Components/List.js/MapData';

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
			<PostGrid postdata={data} />
		</main>
	);
}
