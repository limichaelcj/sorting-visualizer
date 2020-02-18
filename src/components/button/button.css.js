import styled from 'styled-components'

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 4px;
  background: transparent;
  margin-top: 0.5rem;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

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
