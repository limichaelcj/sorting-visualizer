import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './button.css'

const Button = ({ children, onClick, active, disabled, style }) => {
  return (
    <StyledButton onClick={onClick} active={active} disabled={disabled || active} style={style}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

export default Button
