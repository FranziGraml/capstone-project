//import { SessionProvider } from 'next-auth/react';
import Layout from '../src/Components/Layout';
import GlobalStyle from '../src/Components/UI/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
