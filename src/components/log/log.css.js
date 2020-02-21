import styled from 'styled-components'
import theme from '../theme'

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
    background-color: ${theme.backgroundOff};
    &:not(:first-child) {
      border-bottom: 1px solid ${theme.secondaryAlpha};
    }
    span {
      display: inline-block;
      &:nth-child(2) {
        padding: 0 0.8rem;
      }
      &:last-child {
        color: ${theme.primary};
      }
    }
  }
`
