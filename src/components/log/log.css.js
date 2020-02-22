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
    position: relative;
    margin: 0;
    display: block;
    padding: 0.5rem 1rem;
    background-color: ${theme.backgroundOff};
    &:not(:first-child) {
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
`
