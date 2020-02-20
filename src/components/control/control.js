import React from 'react'
import PropTypes from 'prop-types'
import Row from '../ui/row'
import Tab from '../button/tab'
import IconButton from '../button/icon'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollMenu from '../menu/scroll'

console.log(faSyncAlt)

const Control = ({ algorithms, currentView, handleReset, handleViewInfo }) => {

  return (
    <Row style={{marginTop: '1rem'}}>
      <IconButton icon={faSyncAlt} onClick={handleReset} />
      <ScrollMenu direction="x" snap="start" fade style={{marginLeft: '1rem', flex: '1 1 auto'}}>
        {algorithms.map(name => (
          <Tab
            key={name}
            onClick={handleViewInfo(name)}
            active={currentView === name}
          >
            {name}
          </Tab>
        ))}
      </ScrollMenu>
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
