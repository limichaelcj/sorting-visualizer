import styled from 'styled-components'
import theme from '../theme'

export default styled.h3`
  margin: 0;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  background-color: ${theme.secondaryFade};
  color: ${theme.secondary};
  font-family: ${theme.font.mono};
  font-size: 0.8rem;
  border-bottom: 2px solid ${theme.secondary};
`;
