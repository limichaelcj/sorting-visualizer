import styled from 'styled-components'
import theme from '../theme'

export default styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-family: ${props => theme.font[props.font] || theme.font.main};
`;
