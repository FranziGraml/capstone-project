import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostsCard from './PostCard';

describe('Posts', () => {
	it('renders five strings and a button', () => {
		render(
			<PostsCard
				id="123"
				name="hakuna"
				content="Hallo Welt! Ich bin ab heute für die nächsten 4 Wochen auf Bora Bora..."
				contact="Kontakt"
				mail="hallo.welt.com"
				mobile="23678"
			/>
		);

		const name = screen.getByText(/hakuna/i);
		const content = screen.getByText(
			/Hallo Welt! Ich bin ab heute für die nächsten 4 Wochen auf Bora Bora.../i
		);
		const contact = screen.getByText(/Kontakt/i);
		const mail = screen.getByText(/hallo.welt.com/i);
		const mobile = screen.getByText(/23678/i);
		const button = screen.getByRole('button', { name: /Delete/i });

		expect(name).toBeInTheDocument();
		expect(content).toBeInTheDocument();
		expect(contact).toBeInTheDocument();
		expect(mail).toBeInTheDocument();
		expect(mobile).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
});
