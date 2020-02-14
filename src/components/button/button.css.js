import styled from 'styled-components'

export default styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 4px;
  background: transparent;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
  &:active {
    background-color: black;
    color: white;
  }
`;
