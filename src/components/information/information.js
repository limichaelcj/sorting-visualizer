import React from 'react'
import PropTypes from 'prop-types'
import StyledInformation from './information.css'
import Row from '../ui/row'
import Button from '../button/button'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Information = ({ algorithm, running, runningThis, handlePlay, handlePause }) => {

  return (
    <StyledInformation>
      <Row gap='1rem' style={{padding: '1rem 0'}}>
        <Button onClick={runningThis ? handlePause : handlePlay} disabled={running && !runningThis}>
          <Icon icon={runningThis ? faPause : faPlay} />
        </Button>
        <div>
          <h2 style={{margin: 0}}>{algorithm}</h2>
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
