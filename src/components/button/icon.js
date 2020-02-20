import React from 'react'
import PropTypes from 'prop-types'
import StyledIconButton from './icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({ icon, onClick, size, disabled }) => {
  return (
    <StyledIconButton onClick={onClick} size={size} disabled={disabled}>
      <FontAwesomeIcon icon={icon} />
    </StyledIconButton>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool,
}

IconButton.defaultProps = {
  size: 1,
}

export default IconButton
