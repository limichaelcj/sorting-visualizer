import React from 'react'
import PropTypes from 'prop-types'
import StyledContainer from './container.css'

const Container = ({ children, size }) => (
  <StyledContainer size={size}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default Container
