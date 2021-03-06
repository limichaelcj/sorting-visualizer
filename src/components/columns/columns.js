import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-left: 0;
    margin-top: ${props => props.gap || 0}rem;
  }

  @media only screen and (min-width: ${props => breakpoints[props.break] || breakpoints.sm}px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    & > *:not(:first-child) {
      margin-top: 0;
      margin-left: ${props => props.gap || 0}rem;
    }
  }
`;

export const Column = styled.div`
  flex: ${props => props.size && props.size > 0 && props.size <= 12 ? `1 1 ${100 / 12 * props.size}%` : '1 1 auto' };
  display: ${props => ['row', 'column'].includes(props.flex) ? 'flex' : 'block'};
  flex-direction: ${props => props.flex || 'auto'};
`;

export default {
  container: Columns,
  item: Column,
}
