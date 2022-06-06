import Headline from '../src/Components/UI/Home/Headline.styles';
import Text from '../src/Components/UI/Home/Text.styles';
import HeaderContent from '../src/Components/UI/Home/HeaderContent.styles';
import Link from 'next/link';
//import { useSession } from 'next-auth/react';
//import LoginButton from '../src/Components/Form/LoginButton';
import styled from 'styled-components';

export default function Home() {
	//const { data: session } = useSession();
	return (
		<section>
			<HeaderContent>
				<Headline>DigiNomads</Headline>
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

const NavLink = styled.button`
	border-radius: 50%;
	border-color: var(--light-orange);
	cursor: pointer;
	display: inline-block;
	height: 7rem;
	padding: 30px;
	margin: 80px;
	justify-content: center;
	color: var(--dark-blue);
	background-color: var(--primary-cream);
	opacity: 0.7;
	/* 	text-decoration: none; */
	text-align: center;
	transition: all 2s ease-in-out;
	:hover {
		transform: scale(1.1);
		opacity: 0.9;
	}
	width: 5rem;
`;

/* display: flex;
	width: 50px;
	border: solid 1px;
	border-color: var(--middle-green);
	color: var(--light-green);
	justify-content: center;
	align-items: center;
	position: relative;
	left: 160px;
	top: 90px; */
