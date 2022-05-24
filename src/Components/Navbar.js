import Link from 'next/link';

export default function Navbar() {
	return (
		<section>
			<ul>
				<div>
					<li>
						<Link passHref href="/">
							<button type="button">Home</button>
						</Link>
					</li>
					<li>
						<Link passHref href="/posts">
							<button type="button">post-board</button>
						</Link>
					</li>
				</div>
			</ul>
		</section>
	);
}
