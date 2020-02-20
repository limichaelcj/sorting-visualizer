import styled from 'styled-components'
import theme from '../theme'

const activeColor = theme.primary;
const activeFade = theme.primaryFade;

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-family: monospace;
  cursor: pointer;
  border: none;
  background-color: ${props => props.active ? activeFade : 'transparent'};
  color: ${props => props.active ? activeColor : 'inherit'};

  &:disabled {
    color: ${props => props.active ? activeColor : theme.textOff};
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
