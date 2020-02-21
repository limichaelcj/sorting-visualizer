import React from 'react'
import PropTypes from 'prop-types'
import StyledLog from './log.css'
import LogTitle from './title.css'
import Message from '../message/message'

const Log = ({ logs }) => {
  return (
    <div>
      <LogTitle>Run Log</LogTitle>
      {logs.length > 0 ? (
        <StyledLog>
          {logs.map((log, i) => (
            <li>
              <span>{i+1}.</span>
              <span>{log.algorithm}:</span>
              <span>{log.count}</span>
            </li>
          ))}
        </StyledLog>
      ) : (
        <Message>No logs yet. Press play to run an algorithm.</Message>
      )}
    </div>
  )
}

Log.propTypes = {
  logs: PropTypes.array,
}

Log.defaultProps = {
  logs: [],
}

export default Log
