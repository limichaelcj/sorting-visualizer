import styled from 'styled-components'
import theme from '../theme'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${props => props.fade && `
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, ${theme.background}, transparent 1rem, transparent calc(100% - 1rem), ${theme.background});
      pointer-events: none;
    }
    & > * {
      padding: 0 1rem;
    }
  `}
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction === 'y' ? 'column' : 'row'};
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-x: contain;
  scroll-snap-type: ${props => props.direction || 'x'} mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
  & > * {
    scroll-snap-align: ${props => props.snap || 'center'};
  }
`;

export default {
  wrapper: Wrapper,
  menu: Menu,
}
