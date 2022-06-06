import Headline from '../src/Components/UI/Home/Headline.styles';
import Text from '../src/Components/UI/Home/Text.styles';
import { useSession } from 'next-auth/react';
import LoginButton from '../src/Components/Form/LoginButton';

export default function Home() {
	const { data: session } = useSession();
	return (
		<section>
			<div>
				<Headline>DigiNomads</Headline>
				<Text>The social network for digital nomads</Text>
			</div>
			<div>
				{session ? <p>Great! You are signed in!</p> : <p>Please sign in.</p>}
				{LoginButton()}
			</div>
		</section>
	);
}
