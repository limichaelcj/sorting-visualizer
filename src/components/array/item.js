import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ size, selected, scanning, flagged }) => {

  return (
    <StyledItem
      size={size}
      selected={selected}
      scanning={scanning}
      style={{
        height: size + '%',
        backgroundColor: flagged ? 'green' : scanning ? 'blue' : selected ? 'red' : 'black',
        zIndex: selected ? 1 : 0,
      }}
    />
  );
}

ArrayItem.propTypes = {
  size: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  scanning: PropTypes.bool,
  flagged: PropTypes.bool,
}

ArrayItem.defaultProps = {
  selected: false,
  scanning: false,
  flagged: false,
}

export default ArrayItem
