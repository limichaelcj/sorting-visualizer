import React from 'react'
import PropTypes from 'prop-types'
import StyledArray from './array.css'
import Item from './item'
import Center from '../ui/center'

// items: array of objects = { id: int, value: int }

const Array = ({ items, selected, scanning }) => {

  const max = Math.max(...items.map(item => item.value));

  return (
    <StyledArray>
      {items.length > 0 ? items.map((item,i) => (
        <Item
          key={item.id}
          size={(item.value / max) * 100}
          selected={selected === item.id}
          scanning={scanning === i}
        />
      )) : (
        <Center>✘</Center>
      )}
    </StyledArray>
  )
}

Array.propTypes = {
  items: PropTypes.array,
  current: PropTypes.number,
  scanning: PropTypes.number,
}

Array.defaultProps = {
  items: [],
}

export default Array
