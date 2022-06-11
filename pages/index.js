import Headline from '../src/Components/UI/Home/Headline.styles';
import Text from '../src/Components/UI/Home/Text.styles';
import HeaderContent from '../src/Components/UI/Home/HeaderContent.styles';
import Link from 'next/link';
//import { useSession } from 'next-auth/react';

import Container from '../src/Components/UI/Home/Container.styles';
import NavLink from '../src/Components/UI/Home/NavLink.styles';
//import styled from 'styled-components';
import Icon from '../src/Components/UI/Icons/icon.svg';

export default function Home() {
	//const { data: session } = useSession();
	return (
		<section>
			<Container>
				<Icon width="250" height="300" />
			</Container>
			<HeaderContent>
				<Headline>Nomad-Spot</Headline>
				<Text>Welcome to the social network for digital nomads</Text>
			</HeaderContent>
			<Link passHref href="/posts">
				<NavLink>Start</NavLink>
			</Link>

			{/* 	<div>
					{session ? <p>Great! You are signed in!</p> : <p>Please sign in.</p>}
					{LoginButton()}
				</div> */}
		</section>
	);
}
