import styled from 'styled-components'
import theme from '../theme'

export default styled.ul`
  padding: .8rem 1rem 1rem;
  background-color: ${theme.backgroundSoft};
  font-family: ${theme.font.mono};

  li:not(:first-child) {
    margin-top: .2rem;
  }
`;
