import styled from 'styled-components'
import breakpoints from '../breakpoints'

export default styled.div`
  margin: 0 1rem;
  @media only screen and (min-width: ${breakpoints.md}px) {
    margin: 0;
  }
`;
