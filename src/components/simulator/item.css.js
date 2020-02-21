import styled from 'styled-components'
import breakpoints from '../breakpoints'

export default styled.div`
  flex: 1 1 auto;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    &:not(:first-child) {
      margin-left: 2px;
    }
  }
`;
