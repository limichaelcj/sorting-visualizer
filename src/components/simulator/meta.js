import React from 'react'
import PropTypes from 'prop-types'
import StyledMeta from './meta.css'

const SimulatorMeta = ({ operations, algorithm }) => {
  return (
    <StyledMeta>
      <li><span>Algorithm:</span> {algorithm}</li>
      <li><span>Operations:</span> {operations}</li>
    </StyledMeta>
  )
}

SimulatorMeta.propTypes = {
  operations: PropTypes.number,
  algorithm: PropTypes.string,
}

export default SimulatorMeta
