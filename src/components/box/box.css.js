import styled from 'styled-components';

export default styled.div`
  padding: 1rem;
  margin: 1rem;
  display: inline-block;
  ${props => `
    background-color: ${props.color};
    min-width: ${props.size}rem;
    min-height: ${props.size}rem;
  `}
`;
