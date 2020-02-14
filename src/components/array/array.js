import React from 'react'
import PropTypes from 'prop-types'
import StyledArray from './array.css'
import Item from './item'
import Center from '../ui/center'

// items: array of numbers

const Array = ({ items }) => {

  const max = Math.max(...items)

  return (
    <StyledArray>
      {items.length > 0 ? items.map((v,i) => (
        <Item key={v} size={v / max} />
      )) : (
        <Center>✘</Center>
      )}
    </StyledArray>
  )
}

Array.propTypes = {
  items: PropTypes.array,
}

Array.defaultProps = {
  items: [],
}

export default Array
