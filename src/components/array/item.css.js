import styled from 'styled-components'

export default styled.div`
  flex: 1 1 auto;
  ${props => `
    height: ${props.size}%;
    background-color: ${props.selected ? 'red' : props.scanning ? 'blue' : 'black'};
    z-index: ${props.selected ? '1' : '0'};
  `}

  &:not(:first-child) {
    margin-left: 2px;
  }
`;
