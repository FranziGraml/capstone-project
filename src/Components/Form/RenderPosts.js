import PostCard from '../PostCard/PostCard';
import useSWR from 'swr';
import { useState } from 'react';
import RenderButtonWrapper from '../UI/RenderPosts/Tags/Button/RenderButtonsWrapper.style';
import RenderPostCardList from '../UI/RenderPosts/RenderCard/RenderPostCardList.style';
import RenderButtonCoWorking from '../UI/RenderPosts/Tags/Button/RenderButtonCoWorking.styles';
import RenderButtonCoLiving from '../UI/RenderPosts/Tags/Button/RenderButtonCoLiving.styles';
import RenderButtonAccomodations from '../UI/RenderPosts/Tags/Button/RenderButtonAccomodations.styles';
import RenderButtonGeneral from '../UI/RenderPosts/Tags/Button/RenderButtonGeneral.styles';
import CardTag from '../UI/PostCard/PostTags.styles';
import { nanoid } from 'nanoid';

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
			<RenderButtonWrapper>
				<RenderButtonCoWorking
					filterCoWorking={filterCoWorking}
					type="button"
					onClick={() => {
						setFilterCoWorking(!filterCoWorking);
					}}
				>
					Co-Working
				</RenderButtonCoWorking>
				<RenderButtonCoLiving
					filterCoLiving={filterCoLiving}
					type="button"
					onClick={() => {
						setFilterCoLiving(!filterCoLiving);
					}}
				>
					Co-Living
				</RenderButtonCoLiving>
				<RenderButtonAccomodations
					filterAccomodations={filterAccomodations}
					type="button"
					onClick={() => {
						setFilterAccomodations(!filterAccomodations);
					}}
				>
					Accomodation
				</RenderButtonAccomodations>
				<RenderButtonGeneral
					filterGeneral={filterGeneral}
					type="button"
					onClick={() => {
						setFilterGeneral(!filterGeneral);
					}}
				>
					General
				</RenderButtonGeneral>
			</RenderButtonWrapper>

			{showFilteredOrAll().map(post => (
				<RenderPostCardList key={post.id}>
					<PostCard
						/* user={post.user} */
						name={post.name}
						content={post.content}
						mail={post.mail}
						mobile={post.mobile}
						postDate={post.postDate}
						id={post.id}
						tags={post.tags.map(tag => (
							<CardTag key={nanoid()}>{tag}</CardTag>
						))}
					/>
				</RenderPostCardList>
			))}
		</>
	);
}
