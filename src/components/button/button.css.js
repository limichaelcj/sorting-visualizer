import styled from 'styled-components'
import theme from '../theme'

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-family: monospace;
  cursor: pointer;
  border: none;
  background-color: ${props => props.active ? (props.alt ? theme.secondaryFade : theme.primaryFade) : 'transparent'};
  color: ${props => props.active ? (props.alt ? theme.secondary : theme.primary) : 'inherit'};

  &:disabled {
    color: ${props => props.active ? (props.alt ? theme.secondary : theme.primary) : theme.textOff};
    cursor: auto;
    pointer-events: none;
  }
  &:hover:not(:disabled) {
    background-color: rgba(0,0,0,0.04);
  }
  &, &:visited {
    outline: none;
  }
`;
