import React from 'react'
import PropTypes from 'prop-types'
import StyledScrollMenu from './scroll.css'

const ScrollMenu = ({children, direction, snap, style, fade }) => (
  <StyledScrollMenu.wrapper fade={fade} style={style}>
    <StyledScrollMenu.menu direction={direction} snap={snap}>
      {children}
    </StyledScrollMenu.menu>
  </StyledScrollMenu.wrapper>
);

ScrollMenu.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  snap: PropTypes.string,
  style: PropTypes.object,
  fade: PropTypes.bool,
}

ScrollMenu.defaultProps = {
  direction: 'row',
  snap: 'center',
  fade: false,
}

export default ScrollMenu
