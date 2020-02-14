import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ size, active }) => {
  return <StyledItem size={size} active={active} />
}

ArrayItem.propTypes = {
  size: PropTypes.number.isRequired,
  active: PropTypes.bool,
}

ArrayItem.defaultProps = {
  active: false,
}

export default ArrayItem
