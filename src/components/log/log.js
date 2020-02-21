import React from 'react'
import PropTypes from 'prop-types'
import StyledLog from './log.css'

const Log = ({ logs }) => {
  return (
    <StyledLog>
      {logs.map((log, i) => (
        <li>
          <span>{i+1}.</span>
          <span>{log.algorithm}:</span>
          <span>{log.count}</span>
        </li>
      ))}
    </StyledLog>
  )
}

Log.propTypes = {
  logs: PropTypes.array,
}

Log.defaultProps = {
  logs: [],
}

export default Log
