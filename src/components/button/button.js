import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './button.css'

const Button = ({ children, onClick, active, disabled, secondary, style }) => {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
      secondary={secondary}
      disabled={disabled}
      style={style}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

Button.defaultProps = {
  secondary: false,
}

export default Button
