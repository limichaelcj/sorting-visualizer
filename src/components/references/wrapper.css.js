import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.div`
  border-left: 1px solid ${theme.textAlpha};
  border-right: 1px solid ${theme.textAlpha};
  margin: 0 1rem;
  @media only screen and (min-width: ${breakpoints.md}px) {
    margin: 0;
  }
`;
