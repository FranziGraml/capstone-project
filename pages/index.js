import getPosts from '../src/Services/get-posts';
import MapData from '../src/Components/MapData/MapData';
import Form from '../src/Components/Form/Form';
import AddFormButton from '../src/Components/Form/AddFormButton';
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
	const [formButton, setFormButton] = useState(false);

	return (
		<main>
			<AddFormButton onSetFormButton={setFormButton} onFormButton={formButton} />
			<div style={{ display: formButton ? '' : 'none' }}>
				<Form
					onAddPost={addPost}
					onSetAddPost={setAddPost}
					onSetFormButton={setFormButton}
				/>
			</div>
			<RenderPosts onAddPost={addPost} />
			<MapData postdata={data} />
		</main>
	);
}
