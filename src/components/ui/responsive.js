import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const HideSmall = styled.div`
  display: none;
  @media only screen and (min-width: ${props => breakpoints[props.size] || breakpoints.sm}px) {
    display: contents;
  }
`;

export const HideLarge = styled.div`
  display: contents;
  @media only screen and (min-width: ${props => breakpoints[props.size] || breakpoints.sm}px) {
    display: none;
  }
`;

export default {
  HideSmall,
  HideLarge,
}
