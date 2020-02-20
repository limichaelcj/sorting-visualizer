import styled from 'styled-components'
import breakpoints from '../breakpoints'

export default styled.div`
  margin: auto;
  ${props => `
    @media only screen and (min-width: ${breakpoints[props.size] || breakpoints.sm}px){
      width: ${breakpoints[props.size] || breakpoints.sm}px;
      max-width: 100%;
    }
  `}
`;
