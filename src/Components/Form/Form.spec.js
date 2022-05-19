import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('renders three input fields, one fieldset and a submit button', () => {
		render(<Form />);
		const username = screen.getByLabelText(/Username/i);
		const posts = screen.getByLabelText(/post/i);
		const mail = screen.getByLabelText(/mail/i);
		const mobile = screen.getByLabelText(/mobile/i);
		const submitButton = screen.getByRole('button', { name: /Save/i });

		expect(username).toBeInTheDocument();
		expect(posts).toBeInTheDocument();
		expect(mail).toBeInTheDocument();
		expect(mobile).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
