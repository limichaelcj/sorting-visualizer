import React from 'react'
import PropTypes from 'prop-types'
import Row from '../ui/row'
import Button from '../button/button'

const Control = ({ algorithms, handleReset, handleViewInfo }) => {
  return (
    <Row gap='0.5rem' style={{paddingBottom: 0}}>
      <Button onClick={handleReset}>Reset</Button>
      {algorithms.map(name => (
        <Button onClick={handleViewInfo(name)} key={name}>
          {name}
        </Button>
      ))}
    </Row>
  )
}

Control.propTypes = {
  algorithms: PropTypes.array,
  handleReset: PropTypes.func,
  handleViewInfo: PropTypes.func,
}

export default Control
