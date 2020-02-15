import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ size, current }) => {
  return <StyledItem size={size} current={current} />
}

ArrayItem.propTypes = {
  size: PropTypes.number.isRequired,
  current: PropTypes.bool,
}

ArrayItem.defaultProps = {
  current: false,
}

export default ArrayItem
