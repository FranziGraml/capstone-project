import '../styles/globals.css';
import Posts from '../src/Components/Posts';

function MyApp({ Component, pageProps }) {
	return (
		<Posts>
			<Component {...pageProps} />
		</Posts>
	);
}

export default MyApp;
