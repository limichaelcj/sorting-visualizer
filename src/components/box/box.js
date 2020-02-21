import React from 'react'
import PropTypes from 'prop-types'
import StyledBox from './box.css'
import theme from '../theme'

const Box = ({children, size, color, style}) => (
  <StyledBox size={size} color={color} style={style}>
    {children}
  </StyledBox>
)

Box.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
}

Box.defaultProps = {
  color: theme.backgroundOff,
}

export default Box
