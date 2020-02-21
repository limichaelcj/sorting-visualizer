import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './button.css'

const Button = ({ children, onClick, active, disabled, alt, style }) => {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
      alt={alt}
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
  alt: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

Button.defaultProps = {
  alt: false,
}

export default Button
