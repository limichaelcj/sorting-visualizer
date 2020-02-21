import React from 'react'
import PropTypes from 'prop-types'
import Row from '../ui/row'
import Tab from '../button/tab'
import IconButton from '../button/icon'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollMenu from '../menu/scroll'

const Control = ({ algorithms, currentView, handleReset, handleViewInfo }) => {

  return (
    <Row style={{marginTop: '1rem'}}>
      <IconButton icon={faSyncAlt} onClick={handleReset} />
      <ScrollMenu direction="x" snap="start" fade style={{flex: '1 1 auto'}}>
        {Object.entries(algorithms).map(([key, algo]) => (
          <Tab
            key={key}
            onClick={handleViewInfo(key)}
            active={currentView === key}
          >
            {algo.shortName}
          </Tab>
        ))}
      </ScrollMenu>
    </Row>
  )
}

Control.propTypes = {
  algorithms: PropTypes.object,
  currentView: PropTypes.string,
  handleReset: PropTypes.func,
  handleViewInfo: PropTypes.func,
}

export default Control
