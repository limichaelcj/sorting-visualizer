import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.div`
  margin: 0 1rem 1rem;
  border-left: 1px solid ${theme.primaryAlpha};
  border-right: 1px solid ${theme.primaryAlpha};
  background-color: ${theme.backgroundSoft};

  @media only screen and (min-width: ${breakpoints.md}px) {
    margin: 0 0 1rem;
  }
  @media only screen and (min-width: ${breakpoints.lg}px) {
    margin: 0;
  }
`;
