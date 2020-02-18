import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ size, selected, scanning }) => {

  return (
    <StyledItem
      size={size}
      selected={selected}
      scanning={scanning}
      style={{
        height: size + '%',
        backgroundColor: selected ? 'red' : scanning ? 'blue' : 'black',
        zIndex: selected ? 1 : 0,
      }}
    />
  );
}

ArrayItem.propTypes = {
  size: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  scanning: PropTypes.bool,
}

ArrayItem.defaultProps = {
  selected: false,
  scanning: false,
}

export default ArrayItem
