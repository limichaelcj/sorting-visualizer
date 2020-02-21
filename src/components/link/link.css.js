import styled from 'styled-components'
import theme from '../theme'

export default styled.a`
  color: inherit;
  text-decoration: none;
  color: ${theme.primary};

  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: ${theme.primary};
  }
`;
