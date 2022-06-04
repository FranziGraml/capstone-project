import styled from 'styled-components';
import RenderButton from './RenderButton.styles';

const TagButtonGeneral = styled(RenderButton)`
	background: ${props => (props.tagButtonGeneral ? 'var(--middle-green)' : 'var(--dark-green)')};
`;
export default TagButtonGeneral;
