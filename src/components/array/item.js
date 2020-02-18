import React from 'react'
import PropTypes from 'prop-types'
import StyledItem from './item.css'

const ArrayItem = ({ id, index, size, current }) => {

  const ref = React.useRef();
  const prev = React.useRef();

  React.useEffect(() => {
    if (current && prev.current) {
      const prevNode = ref.current.parentNode.children[prev.current];
      const prevX = prevNode.getBoundingClientRect().x;
      const nextX = ref.current.getBoundingClientRect().x;
      ref.current.animate([
        { transform: `translate(${prevX - nextX}px, 0)` },
        { transform: `translate(0, 0)` },
      ], {
        duration: 100,
        iterations: 1,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
      })
    }
    prev.current = index;
  }, [index]);

  // React.useEffect(() => {
  //   console.log(prev.current, id);
  //   prev.current = id;
  // }, [id])

  return <StyledItem ref={ref} size={size} current={current} />
}

ArrayItem.propTypes = {
  size: PropTypes.number.isRequired,
  current: PropTypes.bool,
}

ArrayItem.defaultProps = {
  current: false,
}

export default ArrayItem
