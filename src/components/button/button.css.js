import styled from 'styled-components'

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  color: inherit;
  background: transparent;
  cursor: pointer;
  border: none;
  ${props => props.outline && `
    border: 2px solid black;
    border-radius: 4px;
  `}

  &:disabled {
    opacity: 0.5;
  }
  &:hover:not(:disabled) {
    background-color: rgba(0,0,0,0.1);
  }
  &:active:not(:disabled) {
    background-color: black;
    color: white;
  }
`;
