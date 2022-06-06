import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const RenderButtonGeneral = styled(RenderButton)`
	background: ${props => (props.filterGeneral ? 'var(--light-orange)' : '#99B9E6')};
`;
export default RenderButtonGeneral;
