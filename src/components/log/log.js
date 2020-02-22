import React from 'react'
import PropTypes from 'prop-types'
import StyledLog from './log.css'
import LogWrapper from './wrapper.css'
import LogTitle from './title.css'
import Message from '../message/message'

const Log = ({ logs }) => {

  const logNumber = (n) => {
    return `${n < 100 && '0'}${n < 10 && '0'}${n}`;
  }

  return (
    <LogWrapper>
      <LogTitle>Run Log</LogTitle>
      {logs.length > 0 ? (
        <StyledLog>
          {logs.map((log, i) => (
            <li key={i}>
              <span><strong>{logNumber(i+1)}</strong></span>
              <span>{log.algorithm}(<strong>{log.sample}</strong>)</span>
              <span><strong>{log.count}</strong></span>
            </li>
          ))}
        </StyledLog>
      ) : (
        <Message font="mono">No logs yet.</Message>
      )}
    </LogWrapper>
  )
}

Log.propTypes = {
  logs: PropTypes.array,
}

Log.defaultProps = {
  logs: [],
}

export default Log
