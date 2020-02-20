import React from 'react'
import PropTypes from 'prop-types'
import StyledInformation from './information.css'
import Row from '../ui/row'
import IconButton from '../button/icon'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '../../lib/string'

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
          <h2 style={{margin: 0}}>{capitalize(algorithm).replace(/_/ig, ' ')}</h2>
        </div>
      </Row>
      <p style={{padding: '0 1rem 1rem'}}>
        Algorithm description...
      </p>
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
