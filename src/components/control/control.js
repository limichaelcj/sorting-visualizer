import React from 'react'
import PropTypes from 'prop-types'
import Row from '../ui/row'
import Button from '../button/button'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Control = ({ algorithms, currentView, handleReset, handleViewInfo }) => {

  return (
    <Row style={{marginTop: '1rem'}}>
      <Button onClick={handleReset}>
        <Icon icon={faSyncAlt} />
      </Button>
      {algorithms.map(name => (
        <Button
          key={name}
          onClick={handleViewInfo(name)}
          active={currentView === name}
        >
          {name}
        </Button>
      ))}
    </Row>
  )
}

Control.propTypes = {
  algorithms: PropTypes.array,
  currentView: PropTypes.string,
  handleReset: PropTypes.func,
  handleViewInfo: PropTypes.func,
}

export default Control
