import { useState } from 'react';
import FormStyled from '../UI/Form/Form.styles';
import TextField from '../UI/Form/TextField.styles';
import Label from '../UI/Form/Label.styles';
import Input from '../UI/Form/Input.styles';
import { validatePostMail } from '../lib/validation';
import { validatePostMobile } from '../lib/validation';
import Icon from '../UI/Icons/icons';
import ButtonSubmit from '../UI/Form/Button/Submitbutton.styles';
import ErrorBox from '../UI/Form/ErrorBox.styles';
import { useRouter } from 'next/router';

export default function Form({ onSetIsFormActive }) {
	const [nameValue, setNameValue] = useState('');
	const [postValue, setPostValue] = useState('');
	const [mailValue, setMailValue] = useState('');
	const [mobileValue, setMobileValue] = useState('');
	const [isError, setIsError] = useState(false);
	const router = useRouter();

	async function handleSubmit(event) {
		event.preventDefault();
		if (validatePostMobile(mobileValue) && validatePostMail(mailValue)) {
			let post_date = new Date().getTime();
			const response = await fetch('api/post/create', {
				method: 'POST',
				body: JSON.stringify({
					name: nameValue,
					post: postValue,
					mail: mailValue,
					mobile: mobileValue,
					postDate: post_date,
				}),
			});
			setNameValue('');
			setPostValue('');
			setMailValue('');
			setMobileValue('');
			onSetIsFormActive(false);
			setIsError(false);
			console.log(await response.json);
			router.push('/posts');
		} else {
			setIsError(true);
		}
	}

	return (
		<section>
			<FormStyled onSubmit={event => handleSubmit(event)}>
				{isError && <ErrorBox>You have an error in your form. </ErrorBox>}
				<Label htmlFor="Username">Username</Label>
				<Input
					required
					name="Username"
					type="text"
					id="Username"
					value={nameValue}
					onChange={event => {
						setNameValue(event.target.value);
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
					value={postValue}
					onChange={event => {
						setPostValue(event.target.value);
					}}
				/>

				<Label htmlFor="Mail">Mail</Label>
				<Input
					required
					name="Mail"
					type="Mail"
					id="Mail"
					placeholder="John.Doe@google.com"
					value={mailValue}
					onChange={event => {
						setMailValue(event.target.value);
					}}
				/>

				<Label htmlFor="Mobile">Mobile</Label>
				<Input
					required
					name="Mobile"
					type="Mobile"
					id="Mobile"
					value={mobileValue}
					onChange={event => {
						setMobileValue(event.target.value);
					}}
				/>
				<ButtonSubmit type="submit">
					<Icon variant="send" />
				</ButtonSubmit>
			</FormStyled>
		</section>
	);
}
