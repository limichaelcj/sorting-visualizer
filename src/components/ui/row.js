import styled from 'styled-components'

export default styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.gap && `
    & > *:not(:first-child) {
      margin-left: ${props.gap};
    }
  `}
`;
