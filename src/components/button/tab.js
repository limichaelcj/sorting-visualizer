import styled from 'styled-components'
import Button from './button.css'
import theme from '../theme'

export default styled(Button)`
  border-radius-top-left: 5px;
  border-radius-top-right: 5px;
  border-bottom: 2px solid ${props => props.active ? theme.primary : theme.text};
  background-color: ${props=> props.active ? theme.primaryFade : 'transparent'};
`;
