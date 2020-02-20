import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'
import theme from '../theme'

const ArrayItem = ({ size, selected, scanning, flagged }) => {

  return (
    <StyledItem
      size={size}
      selected={selected}
      scanning={scanning}
      style={{
        height: size + '%',
        backgroundColor:
          flagged ? theme.array.flagged
          : scanning ? theme.array.scanning
          : selected ? theme.array.selected
          : theme.array.default,
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
