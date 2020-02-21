import React from 'react'
import PropTypes from 'prop-types'
import StyledInformation from './information.css'
import Row from '../ui/row'
import IconButton from '../button/icon'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Information = ({ algorithm, running, runningThis, handlePlay, handlePause }) => {

  return (
    <StyledInformation>
      <Row gap='1rem' style={{padding: '.5rem 0', borderBottom: '1px dotted black'}}>
        <IconButton
          onClick={runningThis ? handlePause : handlePlay}
          icon={runningThis ? faPause : faPlay}
          disabled={running && !runningThis}
        />
        <div>
          <h2 style={{margin: 0}}>{algorithm.name}</h2>
        </div>
      </Row>
      <div style={{padding: '1rem 1rem 1rem 3.2rem'}}>
        {algorithm.description.map((p,i) => (
          <p key={i}>{p}</p>
        ))}
        <p><em>
          Source:
          {` `}
          <a href={algorithm.hyperlink} target="_blank" rel="noopener noreferrer">
            {algorithm.source}
          </a>
        </em></p>
      </div>
    </StyledInformation>
  )
}

Information.propTypes = {
  algorithm: PropTypes.string,
  running: PropTypes.bool,
  runningThis: PropTypes.bool,
  handlePlay: PropTypes.func,
  handlePause: PropTypes.func,
}

export default Information
