import styled from 'styled-components'
import breakpoints from '../breakpoints'

export const Columns = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => breakpoints[props.break] || breakpoints.sm}px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: ${props => props.size && props.size > 0 && props.size <= 12 ? `0 0 ${100 / 12 * props.size}%` : '1 1 auto' };
`;

export default {
  container: Columns,
  item: Column,
}
