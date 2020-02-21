import styled from 'styled-components'
import theme from '../theme'

export default styled.button`
  padding: 0;
  font-size: ${props => props.size + 'rem'};
  height: ${props => props.size * 2.2 + 'rem'};
  width: ${props => props.size * 2.2 + 'rem'};
  color: ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 15px;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: transparent;
  transition: 100ms;

  &:disabled {
    cursor: auto;
    &, * {
      color: ${theme.disabled};
    }
  }
  &:hover:not(:disabled) {
    background-color: ${theme.primaryAlpha};
  }
  &:active:not(:disabled) {
    color: ${theme.textInvert};
    background-color: ${theme.primary};
  }
  &, &:visited {
    outline: none;
  }
`;
