import styled from 'styled-components'
import theme from '../theme'
import breakpoints from '../breakpoints'

export default styled.ul`
  margin: 0;
  font-family: ${theme.font.mono};
  overflow-y: auto;

  height: auto;
  max-height: 21rem;

  li {
    position: relative;
    margin: 0;
    display: block;
    padding: 0.5rem 1rem;
    background-color: ${theme.backgroundOff};
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.secondaryAlpha};
    }
    span {
      display: inline-block;
      &:first-child {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 6px;
        font-size: 0.8rem;
        color: ${theme.textAlpha};
      }
      &:nth-child(2) {
        padding-left: 1rem;
        padding-right: .5rem;
      }
      &:last-child {
        color: ${theme.primary};
      }
    }
  }

  @media only screen and (min-width: ${breakpoints.md}px) {
    height: 38rem;
    max-height: 38rem;
  }
  @media only screen and (min-width: ${breakpoints.lg}px) {
    height: 48rem;
    max-height: 48rem;
  }
`
