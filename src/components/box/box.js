import React from 'react'
import PropTypes from 'prop-types'
import StyledBox from './box.css'

const Box = ({children, size, color}) => (
  <StyledBox size={size && size < 5 ? 5 : size} color={color}>
    {children}
  </StyledBox>
)

Box.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
}

Box.defaultProps = {
  size: 8,
  color: '#f0f0f0'
}

export default Box
