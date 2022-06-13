import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
export default function LoginButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Image src={session.user.image} width="40" height="40" alt={session.user.name} />{' '}
				Signed in as {session.user.email} <br />{' '}
				<button type="button" onClick={() => signOut()}>
					Sign out
				</button>{' '}
			</>
		);
	}
	return (
		<>
			{' '}
			Not signed in <br />{' '}
			<button type="button" onClick={() => signIn()}>
				Sign in
			</button>{' '}
		</>
	);
}
