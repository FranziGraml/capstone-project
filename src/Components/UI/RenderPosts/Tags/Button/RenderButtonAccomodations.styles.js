import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonAccomodations = styled(RenderButton)`
	background: ${props => (props.filterAccomodations ? 'var(--light-orange)' : '#99B9E6')};
`;
export default RenderButtonAccomodations;
