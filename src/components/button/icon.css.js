import styled from 'styled-components'
import Button from './button'
import theme from '../theme'

export default styled.button`
  padding: 0;
  font-size: ${props => props.size + 'rem'};
  height: ${props => props.size * 2.2 + 'rem'};
  width: ${props => props.size * 2.2 + 'rem'};
  color: inherit;
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
    &, * {
      color: ${theme.primary};
    }
    background-color: ${theme.primaryFade};
  }
  &:active:not(:disabled) {
    color: ${theme.primary};
    background-color: ${theme.primaryFade};
    border-color: ${theme.primary};
  }
  &, &:visited {
    outline: none;
  }
`;
