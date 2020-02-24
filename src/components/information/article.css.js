import styled from 'styled-components'
import breakpoints from '../breakpoints'

export default styled.div`
   padding: 1rem;
   display: ${props => props.hide ? 'none' : 'block'};

   @media only screen and (min-width: ${breakpoints.md}px) {
     display: block !important;
   }
   @media only screen and (min-width: ${breakpoints.lg}px){
     padding-left: 3.7rem;
   }

`;
