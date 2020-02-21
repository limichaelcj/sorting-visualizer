import styled from 'styled-components';
import theme from '../theme'

export default styled.div`
  padding: 1rem;
  font-family: ${theme.font.mono};
  background-color: ${props => props.color || 'transparent'};
  width: ${props => props.size || 'none'};
  height: ${props => props.size || 'none'};
`;
