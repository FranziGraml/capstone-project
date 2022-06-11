import Link from 'next/link';
import Icons from './UI/Icons/icons';
import NavWrap from './UI/NavBar/NavWrap.styles';
import NavigationButton from './UI/NavBar/NavigationButton.styles';
import NavList from './UI/NavBar/NavList.styles';
import Icon from '../Components/UI/Icons/icon.svg';

export default function Navbar() {
	return (
		<NavWrap>
			<Link passHref href="/">
				<Icon />
			</Link>
			<NavList>
				<li>
					<Link passHref href="/posts">
						<NavigationButton>
							<Icons variant="board" />
						</NavigationButton>
					</Link>
				</li>
			</NavList>
		</NavWrap>
	);
}
