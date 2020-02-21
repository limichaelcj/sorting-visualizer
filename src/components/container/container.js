import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './container.css'

const Container = ({ children, size, breakpoint, style }) => (
  <StyledContainer size={size} breakpoint={breakpoint} style={style}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  style: PropTypes.object,
}

Container.defaultProps = {
  size: 'sm',
}

export default Container
