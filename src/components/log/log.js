import React from 'react'
import PropTypes from 'prop-types'
import StyledLog from './log.css'
import Wrapper from './wrapper.css'
import Title from './title.css'
import Message from '../message/message'

const Log = ({ logs }) => {

  const logNumber = (n) => {
    return `${n < 10 ? '00' : n < 100 ? '0' : ''}${n}`;
  }

  return (
    <Wrapper>
      <Title>Run Log</Title>
      <StyledLog>
        {logs.length ? logs.map((log, i, arr) => (
          <li key={log.id}>
            <span><strong>{logNumber(log.id)}</strong></span>
            <span>{log.algorithm}(<strong>{log.sample}</strong>)</span>
            <span><strong>{log.count}</strong></span>
          </li>
        )) : (
          <Message font="mono">No logs yet.</Message>
        )}
      </StyledLog>
    </Wrapper>
  )
}

Log.propTypes = {
  logs: PropTypes.array,
}

Log.defaultProps = {
  logs: [],
}

export default Log
