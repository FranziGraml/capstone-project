import getPosts from '../src/Services/get-posts';
import Form from '../src/Components/Form/Form';
import AddFormButton from '../src/Components/Form/AddFormButton';
import { saveToLocal, loadFromLocal } from '../src/Components/lib/localStorage';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

export function getStaticProps() {
	const data = getPosts();

	return {
		props: {
			data,
		},
	};
}
export default function Posts({ data }) {
	const [addPost, setAddPost] = useState(loadFromLocal('localPosts') ?? data);
	const [formButton, setFormButton] = useState(false);

	const RenderPosts = dynamic(() => import('../src/Components/Form/RenderPosts'), {
		ssr: false,
	});

	useEffect(() => {
		saveToLocal('localPosts', addPost);
	}, [addPost]);

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
			<RenderPosts onAddPost={addPost} onSetAddPost={setAddPost} />
		</main>
	);
}
