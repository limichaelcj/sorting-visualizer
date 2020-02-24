import React from 'react'
import PropTypes from 'prop-types'
import StyledIconButton from './icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({ icon, onClick, size, disabled, style }) => {
  return (
    <StyledIconButton onClick={onClick} size={size} disabled={disabled} style={style}>
      <FontAwesomeIcon icon={icon} />
    </StyledIconButton>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  style: PropTypes.object,
}

IconButton.defaultProps = {
  size: 1,
}

export default IconButton
