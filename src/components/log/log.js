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
            <li key={i}>
              <span><strong>{i+1}.</strong></span>
              <span>{log.algorithm}</span>
              <span><strong>{log.count}</strong></span>
            </li>
          ))}
        </StyledLog>
      ) : (
        <Message font="mono">No logs yet.</Message>
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
