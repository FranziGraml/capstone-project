import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import FormStyled from '../UI/Form/Form.styles';
import TextField from '../UI/Form/TextField.styles';
import Label from '../UI/Form/Label.styles';
import Input from '../UI/Form/Input.styles';
import Icon from '../UI/Icons/icons';
import ButtonSubmit from '../UI/Form/Button/Submitbutton.styles';
import ErrorBox from '../UI/Form/ErrorBox.styles';
import Tags from './Tags';

import {
	validatePostName,
	validatePostMail,
	validatePostMobile,
	validatePostPost,
	validatePostTag,
} from '../lib/validation';

export default function Form({ isAddButtonClicked, onToggleAddButton }) {
	const initialValueState = {
		nameValue: '',
		postValue: '',
		mailValue: '',
		mobileValue: '',
	};
	const [values, setValues] = useState(initialValueState);
	const [isError, setIsError] = useState(false);
	const [isTagError, setIsTagError] = useState(false);
	const [resetTags, setResetTags] = useState(false);
	const [tag, setTag] = useState([]);
	const router = useRouter();
	const { mutate } = useSWRConfig();

	async function handleSubmit(event) {
		event.preventDefault();
		let post_date = new Date().getTime();
		if (
			validatePostMobile(values.mobileValue) &&
			validatePostMail(values.mailValue) &&
			validatePostName(values.nameValue) &&
			validatePostPost(values.postValue) &&
			validatePostTag(tag)
		) {
			const _response = await fetch('api/post/create', {
				method: 'POST',
				body: JSON.stringify({
					name: values.nameValue,
					post: values.postValue,
					mail: values.mailValue,
					mobile: values.mobileValue,
					postDate: post_date,
					tags: tag,
				}),
			});
			mutate('/api/posts');
			onToggleAddButton();
			resetForm();
			router.push('/posts');
		} else if (!tag.length > 0) {
			setIsTagError(true);
		} else {
			setIsError(true);
		}
	}

	function setTagState(item) {
		setTag([...tag, item]);
	}

	function deleteTag(item) {
		setTag(tag.filter(tag => tag !== item));
	}

	useEffect(() => {
		resetForm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAddButtonClicked]);

	function resetForm() {
		setValues(initialValueState);
		setIsError(false);
		setIsTagError(false);
		setTag([]);
		setResetTags(!resetTags);
	}

	return (
		<section>
			<FormStyled onSubmit={event => handleSubmit(event)}>
				{isError && <ErrorBox>You have an error in your form. </ErrorBox>}
				{isTagError && <ErrorBox>You must choose at least one tag. </ErrorBox>}
				<Tags
					tag={tag}
					resetTags={resetTags}
					onSetTagState={item => setTagState(item)}
					onDeleteTag={item => deleteTag(item)}
				/>
				<Label htmlFor="Username">Username</Label>
				<Input
					required
					name="Username"
					type="text"
					id="Username"
					value={values.nameValue}
					onChange={event => {
						setValues({ ...values, nameValue: event.target.value });
					}}
				/>

				<Label htmlFor="post">post</Label>
				<TextField
					required
					maxLength={250}
					name="post"
					type="text"
					id="post"
					placeholder="max. 250 characters"
					value={values.postValue}
					onChange={event => {
						setValues({ ...values, postValue: event.target.value });
					}}
				/>

				<Label htmlFor="Mail">Mail</Label>
				<Input
					required
					name="Mail"
					type="Mail"
					id="Mail"
					placeholder="John.Doe@google.com"
					value={values.mailValue}
					onChange={event => {
						setValues({ ...values, mailValue: event.target.value });
					}}
				/>

				<Label htmlFor="Mobile">Mobile</Label>
				<Input
					required
					name="Mobile"
					type="Mobile"
					id="Mobile"
					value={values.mobileValue}
					onChange={event => {
						setValues({ ...values, mobileValue: event.target.value });
					}}
				/>
				<ButtonSubmit type="submit">
					<Icon variant="send" />
				</ButtonSubmit>
			</FormStyled>
		</section>
	);
}
