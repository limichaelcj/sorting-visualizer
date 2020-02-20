import styled from 'styled-components'
import breakpoints from '../breakpoints'

export default styled.div`
  margin: auto;
  width: auto;
  max-width: 100%;
  ${props => `
    @media only screen and (min-width: ${breakpoints[props.size]}px){
      width: 100%;
      max-width: ${breakpoints[props.size]}px;
    }
  `}
`;
