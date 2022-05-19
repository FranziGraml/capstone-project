import { useState } from 'react';
import FormStyled from '../UI/Form/Form.styles';
import TextField from '../UI/Form/TextField.styles';
import Label from '../UI/Form/Label.styles';
import Input from '../UI/Form/Input.styles';

export default function Form({ onAddPost, onSetAddPost, onSetFormButton }) {
	const [nameValue, setNameValue] = useState('');
	const [postValue, setPostValue] = useState('');
	const [mailValue, setMailValue] = useState('');
	const [mobileValue, setMobileValue] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		onSetAddPost([
			...onAddPost,
			{
				name: nameValue,
				post: postValue,
				mail: mailValue,
				mobile: mobileValue,
			},
		]);
		setNameValue('');
		setPostValue('');
		setMailValue('');
		setMobileValue('');
		onSetFormButton(false);
	}

	return (
		<section>
			<FormStyled onSubmit={event => handleSubmit(event)}>
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
					maxLength="700"
					name="post"
					type="text"
					id="post"
					value={postValue}
					onChange={event => {
						setPostValue(event.target.value);
					}}
				/>

				<Label htmlFor="mail">mail</Label>
				<Input
					required
					name="mail"
					type="mail"
					id="mail"
					value={mailValue}
					onChange={event => {
						setMailValue(event.target.value);
					}}
				/>

				<Label htmlFor="mobile">mobile</Label>
				<Input
					required
					name="mobile"
					type="mobile"
					id="mobile"
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
