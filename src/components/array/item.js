import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ id, index, size, selected, scanning }) => {

  const ref = React.useRef();
  const prev = React.useRef();

  // React.useEffect(() => {
  //   if (selected && prev.current) {
  //     const prevNode = ref.current.parentNode.children[prev.current];
  //     const prevX = prevNode.getBoundingClientRect().x;
  //     const nextX = ref.current.getBoundingClientRect().x;
  //     ref.current.animate([
  //       { transform: `translate(${prevX - nextX}px, 0)` },
  //       { transform: `translate(0, 0)` },
  //     ], {
  //       duration: 40,
  //       iterations: 1,
  //       easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
  //     })
  //   }
  //   prev.current = index;
  // }, [index]);

  return <StyledItem ref={ref} size={size} selected={selected} scanning={scanning} />
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
