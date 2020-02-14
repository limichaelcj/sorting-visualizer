import styled from 'styled-components'

export default styled.figure`
  flex: 1 1 auto;
  min-width: 4px;
  ${props => `
    height: ${props.size}%;
    background-color: ${props => props.active ? 'red' : 'black'};
  `}

  &:not(:first-child) {
    margin-left: 2px;
  }
`;
