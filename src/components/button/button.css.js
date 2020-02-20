import styled from 'styled-components'
import theme from '../theme'

const activeColor = theme.primary;

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  font-family: monospace;
  background-color: transparent;
  color: ${theme.text};
  cursor: pointer;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid ${props => props.active ? activeColor : 'transparent'};

  &:disabled {
    color: ${props => props.active ? activeColor : theme.textOff};
    cursor: auto;
  }
  &:hover:not(:disabled) {
    background-color: rgba(0,0,0,0.05);
  }
  &:active {
    background-color: ${theme.primary} !important;
    color: ${theme.textInvert} !important;
  }
  &, &:visited {
    outline: none;
  }
`;
