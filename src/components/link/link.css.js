import styled from 'styled-components'
import theme from '../theme'

export default styled.a`
  text-decoration: none;
  color: ${props => props.colored ? theme.primary : 'inherit'};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${theme.primary};
  }
`;
