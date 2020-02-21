import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.ul`
  margin: 0;
  font-family: ${theme.font.mono};
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  li {
    margin: 0;
    display: block;
    padding: 0.5rem 0.8rem;
    background-color: ${theme.primaryFade};
    &:not(:first-child) {
      border-bottom: 1px solid ${theme.primaryAlpha};
    }
    span {
      display: inline-block;
      &:first-child {
        color: ${theme.primary};
      }
      &:nth-child(2) {
        padding: 0 0.8rem;
      }
      &:last-child {
        color: ${theme.primary};
      }
    }
  }
`
