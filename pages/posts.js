import getPosts from '../src/Services/get-posts';
import Form from '../src/Components/Form/Form';
import AddFormButton from '../src/Components/Form/AddFormButton';
import { saveToLocal, loadFromLocal } from '../src/Components/lib/localStorage';
import { useState, useEffect } from 'react';
import FormWrapper from '../src/Components/UI/Form/FormWrapper.styles';
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
	const [posts, setPosts] = useState(loadFromLocal('localPosts') ?? data);
	const [isFormActive, setIsFormActive] = useState(false);

	const RenderPosts = dynamic(() => import('../src/Components/Form/RenderPosts'), {
		ssr: false,
	});

	useEffect(() => {
		saveToLocal('localPosts', posts);
	}, [posts]);

	return (
		<main>
			<AddFormButton onSetIsFormActive={setIsFormActive} />
			<FormWrapper isFormActive={isFormActive}>
				<Form onPosts={posts} onSetPosts={setPosts} onSetIsFormActive={setIsFormActive} />
			</FormWrapper>
			<RenderPosts onPosts={posts} onSetPosts={setPosts} />
		</main>
	);
}
