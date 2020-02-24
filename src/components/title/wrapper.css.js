import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.h1`
  margin: 0;
  padding: 1rem 0;

  @media only screen and (min-width: ${breakpoints.md}px) {
    padding: 2rem 0;
  }
`;
