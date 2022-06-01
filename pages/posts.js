import { getPosts } from '../src/Services/get-posts';
import Form from '../src/Components/Form/Form';
import { useState } from 'react';
import FormWrapper from '../src/Components/UI/Form/FormWrapper.styles';
import ButtonAdd from '../src/Components/UI/Form/Button/AddButton.styles';
import Icon from '../src/Components/UI/Icons/icons';
import { SWRConfig } from 'swr';
import swrFetcher from '../src/Components/lib/swr-Fetcher';
import RenderPosts from '../src/Components/Form/RenderPosts';

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: {
			fallback: {
				'/api/posts': posts,
			},
		},
	};
}

export default function Posts({ fallback }) {
	const [isFormActive, setIsFormActive] = useState(false);

	function setFormActiveFalse() {
		setIsFormActive(false);
	}

	return (
		<main>
			<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
				<ButtonAdd type="button" onClick={() => setIsFormActive(prevCheck => !prevCheck)}>
					<Icon variant="plus" />
				</ButtonAdd>
				<FormWrapper isFormActive={isFormActive}>
					<Form onSetFormActiveFalse={() => setFormActiveFalse()} />
				</FormWrapper>
				<RenderPosts />
			</SWRConfig>
		</main>
	);
}
