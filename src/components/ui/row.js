import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: center;
  ${props => props.gap && `
    & > *:not(:first-child) {
      margin-left: ${props.gap};
    }
  `}
  ${props => props.stretch && `
    & > * {
      flex: 1 1 auto;
    }
  `}
`;
