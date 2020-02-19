import React from 'react'
import PropTypes from 'prop-types'
import StyledArray from './array.css'
import Item from './item'
import Center from '../ui/center'

// items: array of objects = { id: int, value: int }

const Array = ({ items, selected, scanning, flag }) => {

  // store max value
  const [max, setMax] = React.useState(0);
  // only rerender on data change
  React.useEffect(() => {
    setMax(Math.max(...items.map(item => item.value)));
  }, [items])

  return (
    <StyledArray>
      {items.length > 0 ? items.map((item,i) => (
        <Item
          key={item.id}
          size={(item.value / max) * 100}
          selected={selected === i}
          scanning={scanning === i}
          flagged={flag === i}
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
  flag: PropTypes.number,
}

Array.defaultProps = {
  items: [],
}

export default Array
