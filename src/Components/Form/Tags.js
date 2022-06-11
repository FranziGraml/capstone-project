import WrapperTag from '../UI/RenderPosts/Tags/WrapperTag.styles';
import TagButtonCoWorking from '../UI/RenderPosts/Tags/Button/TagButtonCoWorking.styles';
import TagButtonCoLiving from '../UI/RenderPosts/Tags/Button/TagButtonCoLiving.styles';
import TagButtonAccomodations from '../UI/RenderPosts/Tags/Button/TagButtonAccomodations.styles';
import TagButtonGeneral from '../UI/RenderPosts/Tags/Button/TagButtonGeneral.styles';
import { useState, useEffect } from 'react';

export default function Tags({ tag, resetTags, onSetTagState, onDeleteTag }) {
	const [tagButtonCoWorking, setTagButtonCoWorking] = useState(false);
	const [tagButtonCoLiving, setTagButtonCoLiving] = useState(false);
	const [tagButtonAccomodations, setTagButtonAccomodations] = useState(false);
	const [tagButtonGeneral, setTagButtonGeneral] = useState(false);

	function setTags(tags) {
		if (tags === 'Co-Working' && !tag.includes('Co-Working')) {
			onSetTagState('Co-Working');
		} else if (tags === 'Co-Working' && tag.includes('Co-Working')) {
			onDeleteTag(tags);
		}
		if (tags === 'Co-Living' && !tag.includes('Co-Living')) {
			onSetTagState('Co-Living');
		} else if (tags === 'Co-Living' && tag.includes('Co-Living')) {
			onDeleteTag(tags);
		}
		if (tags === 'Accomodations' && !tag.includes('Accomodations')) {
			onSetTagState('Accomodations');
		} else if (tags === 'Accomodations' && tag.includes('Accomodations')) {
			onDeleteTag(tags);
		}
		if (tags === 'General' && !tag.includes('General')) {
			onSetTagState('General');
		} else if (tags === 'General' && tag.includes('General')) {
			onDeleteTag(tags);
		}
	}

	useEffect(() => {
		resetTagStates();
	}, [resetTags]);

	function resetTagStates() {
		setTagButtonCoWorking(false);
		setTagButtonCoLiving(false);
		setTagButtonAccomodations(false);
		setTagButtonGeneral(false);
	}

	return (
		<WrapperTag>
			<TagButtonCoWorking
				tagButtonCoWorking={tagButtonCoWorking}
				type="button"
				onClick={() => {
					setTags('Co-Working');
					setTagButtonCoWorking(!tagButtonCoWorking);
				}}
			>
				Co-Working
			</TagButtonCoWorking>
			<TagButtonCoLiving
				tagButtonCoLiving={tagButtonCoLiving}
				type="button"
				onClick={() => {
					setTags('Co-Living');
					setTagButtonCoLiving(!tagButtonCoLiving);
				}}
			>
				Co-Living
			</TagButtonCoLiving>
			<TagButtonAccomodations
				tagButtonAccomodations={tagButtonAccomodations}
				type="button"
				onClick={() => {
					setTags('Accomodations');
					setTagButtonAccomodations(!tagButtonAccomodations);
				}}
			>
				Accomodation
			</TagButtonAccomodations>
			<TagButtonGeneral
				tagButtonGeneral={tagButtonGeneral}
				type="button"
				onClick={() => {
					setTags('General');
					setTagButtonGeneral(!tagButtonGeneral);
				}}
			>
				General
			</TagButtonGeneral>
		</WrapperTag>
	);
}
