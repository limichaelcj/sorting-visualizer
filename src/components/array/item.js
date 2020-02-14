import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ size, active }) => {
  return <StyledItem size={size} active={active} />
}

export default ArrayItem
