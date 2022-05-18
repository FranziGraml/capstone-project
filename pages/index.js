import getPosts from '../src/Services/get-posts';
import MapData from '../src/Components/MapData/MapData';
import Form from '../src/Components/Form/Form';
import RenderPosts from '../src/Components/Form/RenderPosts';
import { useState } from 'react';

export function getStaticProps() {
	const data = getPosts();

	return {
		props: {
			data,
		},
	};
}
export default function Home({ data }) {
	const [addPost, setAddPost] = useState([]);
	return (
		<main>
			<Form onSetAddPost={setAddPost} onAddPost={addPost} />
			<RenderPosts onAddPost={addPost} />
			<MapData postdata={data} />
		</main>
	);
}
