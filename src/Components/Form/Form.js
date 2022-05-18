import { useState } from 'react';

export default function Form({ onAddPost, onSetAddPost }) {
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
	}

	return (
		<section>
			<form onSubmit={event => handleSubmit(event)}>
				<label htmlFor="name">Username</label>
				<input
					required
					name="Username"
					type="text"
					value={nameValue}
					onChange={event => {
						setNameValue(event.target.value);
					}}
				/>

				<label htmlFor="name">posts</label>
				<textarea
					required
					maxLength="700"
					name="posts"
					type="text"
					value={postValue}
					onChange={event => {
						setPostValue(event.target.value);
					}}
				/>

				<label htmlFor="name">mail</label>
				<input
					required
					name="mail"
					type="mail"
					value={mailValue}
					onChange={event => {
						setMailValue(event.target.value);
					}}
				/>

				<label htmlFor="name">mobile</label>
				<input
					required
					name="mobile"
					type="mobile"
					value={mobileValue}
					onChange={event => {
						setMobileValue(event.target.value);
					}}
				/>
				<button type="submit">Save</button>
			</form>
		</section>
	);
}
