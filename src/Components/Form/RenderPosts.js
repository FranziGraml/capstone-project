import PostCard from '../PostCard/PostCard';
import useSWR from 'swr';
import { useState } from 'react';

export default function RenderPosts() {
	const { data: posts, error } = useSWR('/api/posts');
	const sortedPosts = posts.sort((a, b) => b.postDate - a.postDate);
	const [filterCoWorking, setFilterCoWorking] = useState(false);
	const [filterCoLiving, setFilterCoLiving] = useState(false);
	const [filterAccomodations, setFilterAccomodations] = useState(false);
	const [filterGeneral, setFilterGeneral] = useState(false);
	if (error) {
		return <p>Error: {error.message}</p>;
	}

	const filteredPosts1 = sortedPosts.filter(tag =>
		tag.tags.includes(filterCoWorking ? 'Co-Working' : '')
	);
	const filteredPosts2 = sortedPosts.filter(tag =>
		tag.tags.includes(filterCoLiving ? 'Co-Living' : '')
	);
	const filteredPosts3 = sortedPosts.filter(tag =>
		tag.tags.includes(filterAccomodations ? 'Accomodations' : '')
	);
	const filteredPosts4 = sortedPosts.filter(tag =>
		tag.tags.includes(filterGeneral ? 'General' : '')
	);
	const filteredPosts5 = filteredPosts1.concat(filteredPosts2, filteredPosts3, filteredPosts4);
	const filterdPosts6 = filteredPosts5.filter(function (element, position) {
		return filteredPosts5.indexOf(element) == position;
	});

	function showFilteredOrAll() {
		if (filterCoWorking || filterCoLiving || filterAccomodations || filterGeneral) {
			return filterdPosts6;
		} else {
			return sortedPosts;
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={() => {
					setFilterCoWorking(!filterCoWorking);
				}}
			>
				Co-Working
			</button>
			<button
				type="button"
				onClick={() => {
					setFilterCoLiving(!filterCoLiving);
				}}
			>
				Co-Living
			</button>
			<button
				type="button"
				onClick={() => {
					setFilterAccomodations(!filterAccomodations);
					!filterAccomodations;
				}}
			>
				Accomodation
			</button>
			<button
				type="button"
				onClick={() => {
					setFilterGeneral(!filterGeneral);
				}}
			>
				General
			</button>

			{showFilteredOrAll().map(post => (
				<ul key={post.id}>
					<PostCard
						name={post.name}
						content={post.content}
						mail={post.mail}
						mobile={post.mobile}
						postDate={post.postDate}
						id={post.id}
						tags={post.tags}
					/>
				</ul>
			))}
		</>
	);
}
