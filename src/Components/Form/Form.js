import { useState } from 'react';
import FormStyled from '../UI/Form/Form.styles';
import TextField from '../UI/Form/TextField.styles';
import Label from '../UI/Form/Label.styles';
import Input from '../UI/Form/Input.styles';
import { nanoid } from 'nanoid';
import { validatePostMail } from '../lib/validation';
import { validatePostMobile } from '../lib/validation';

export default function Form({ onAddPost, onSetAddPost, onSetFormButton }) {
	const [nameValue, setNameValue] = useState('');
	const [postValue, setPostValue] = useState('');
	const [mailValue, setMailValue] = useState('');
	const [mobileValue, setMobileValue] = useState('');
	const [isError, setIsError] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		if (validatePostMobile(mobileValue) && validatePostMail(mailValue)) {
			onSetAddPost([
				{
					name: nameValue,
					post: postValue,
					mail: mailValue,
					mobile: mobileValue,
					id: nanoid(),
				},
				...onAddPost,
			]);
			setNameValue('');
			setPostValue('');
			setMailValue('');
			setMobileValue('');
			onSetFormButton(false);
			setIsError(false);
		} else {
			setIsError(true);
		}
	}

	return (
		<section>
			<FormStyled onSubmit={event => handleSubmit(event)}>
				{isError && <p>You have an error in your form. </p>}
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
				<button type="submit">Save</button>
			</FormStyled>
		</section>
	);
}
