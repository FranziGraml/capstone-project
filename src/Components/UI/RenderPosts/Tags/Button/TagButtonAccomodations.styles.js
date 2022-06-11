import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonAccomodations = styled(RenderButton)`
	background: ${props => (props.tagButtonAccomodations ? 'var(--light-orange)' : '#99B9E6')};
`;
export default TagButtonAccomodations;
