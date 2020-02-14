import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './button.css'

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
