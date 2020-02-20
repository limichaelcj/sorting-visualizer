import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './container.css'

const Container = ({ children, size, breakpoint }) => (
  <StyledContainer size={size} breakpoint={breakpoint}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

Container.defaultProps = {
  size: 'sm',
}

export default Container
