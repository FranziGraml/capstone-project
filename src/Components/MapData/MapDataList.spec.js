import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MapData from './MapData';

describe('MapData', () => {
	it('renders three MapData', () => {
		render(
			<MapData
				postdata={[
					{
						id: '1',
						name: 'Hakuna',
						content:
							'Hallo Welt! Ich bin ab heute für die nächsten 4 Wochen auf Bora Bora...',
						contact: 'Kontakt',
						mail: 'hallo.welt.com',
						mobile: '2367654',
					},
					{
						id: '2',
						name: 'Seven',
						content: 'Lorem Ipsum',
						contact: 'Kontakt',
						mail: 'hallo.world.com',
						mobile: '25598078',
					},
					{
						id: '3',
						name: 'Joda',
						content: 'Ich suche eine Schlafmöglichkeit...',
						contact: 'Kontakt',
						mail: 'hallo.terra.com',
						mobile: '648893678',
					},
				]}
			/>
		);

		const name1 = screen.getByText(/hakuna/i);
		const name2 = screen.getByText(/Seven/i);
		const name3 = screen.getByText(/Joda/i);

		const content1 = screen.getByText(
			/Hallo Welt! Ich bin ab heute für die nächsten 4 Wochen auf Bora Bora.../i
		);
		const content2 = screen.getByText(/Lorem Ipsum/i);
		const content3 = screen.getByText(/Ich suche eine Schlafmöglichkeit.../i);

		const contact = screen.getAllByText(/Kontakt/i);

		const mail1 = screen.getByText(/hallo.welt.com/i);
		const mail2 = screen.getByText(/hallo.world.com/i);
		const mail3 = screen.getByText(/hallo.terra.com/i);
		const mobile1 = screen.getByText(/2367654/i);
		const mobile2 = screen.getByText(/25598078/i);
		const mobile3 = screen.getByText(/648893678/i);

		expect(name1).toBeInTheDocument();
		expect(name2).toBeInTheDocument();
		expect(name3).toBeInTheDocument();
		expect(content1).toBeInTheDocument();
		expect(content2).toBeInTheDocument();
		expect(content3).toBeInTheDocument();
		expect(contact[0]).toBeInTheDocument();
		expect(contact[1]).toBeInTheDocument();
		expect(contact[2]).toBeInTheDocument();
		expect(mail1).toBeInTheDocument();
		expect(mail2).toBeInTheDocument();
		expect(mail3).toBeInTheDocument();
		expect(mobile1).toBeInTheDocument();
		expect(mobile2).toBeInTheDocument();
		expect(mobile3).toBeInTheDocument();
	});
});
