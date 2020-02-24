import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.ul`
  display: block;
  padding: 0.6rem 0;
  font-size: 0.6rem;
  font-family: ${theme.font.mono};
  color: ${theme.textOff};
  line-height: 1em;

  li {
    display: inline-block;
    span:first-child {
      font-weight: bold;
      text-transform: uppercase;
    }
    &:not(:first-child) {
      margin-left: 0.8rem;
    }
  }
  @media only screen and (min-width: ${breakpoints.md}px) {
    font-size: 0.8rem;
  }
`;
