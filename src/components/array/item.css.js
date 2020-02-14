import styled from 'styled-components'

export default styled.div`
  flex: 1 1 auto;
  ${props => `
    height: ${props.size}%;
    background-color: ${props.active ? 'red' : 'black'};
  `}

  &:not(:first-child) {
    margin-left: 2px;
  }
`;
