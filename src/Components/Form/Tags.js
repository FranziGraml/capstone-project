export default function Tags({ tag, onSetTagState }) {
	function setTags(tags) {
		if (tags === 'Co-Working' && !tag.includes('Co-Working')) {
			onSetTagState('Co-Working');
		}
		if (tags === 'Co-Living' && !tag.includes('Co-Living')) {
			onSetTagState('Co-Living');
		}
		if (tags === 'Accomodations' && !tag.includes('Accomodations')) {
			onSetTagState('Accomodations');
		}
		if (tags === 'General' && !tag.includes('General')) {
			onSetTagState('General');
		}
	}

	console.log('tag: ' + tag);
	return (
		<div>
			<button type="button" onClick={() => setTags('Co-Working')}>
				Co-working
			</button>
			<button type="button" onClick={() => setTags('Co-Living')}>
				Co-living
			</button>
			<button type="button" onClick={() => setTags('Accomodations')}>
				Accomodation
			</button>
			<button type="button" onClick={() => setTags('General')}>
				General
			</button>
		</div>
	);
}
