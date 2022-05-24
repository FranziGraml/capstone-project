import Link from 'next/link';
import Icon from './UI/Icons/icons';
import NavWrap from './UI/NavBar/NavWrap.styles';
import NavigationButton from './UI/NavBar/NavigationButton.styles';
import NavList from './UI/NavBar/NavList.styles';

export default function Navbar() {
	return (
		<NavWrap>
			<NavList>
				<li>
					<Link passHref href="/">
						<NavigationButton type="button">
							<Icon variant="home" />
						</NavigationButton>
					</Link>
				</li>
				<li>
					<Link passHref href="/posts">
						<NavigationButton type="button">
							<Icon variant="board" />
						</NavigationButton>
					</Link>
				</li>
			</NavList>
		</NavWrap>
	);
}
