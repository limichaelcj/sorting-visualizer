import React from 'react'
import PropTypes from 'prop-types'
import StyledInformation from './information.css'
import Article from './article.css'
import Row from '../ui/row'
import { HideLarge } from '../ui/responsive'
import IconButton from '../button/icon'
import Link from '../link/link'
import { faPlay, faPause, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Information = ({ algorithm, running, inProgress, runningThis, handlePlay, handlePause, hideArticle, toggleArticle }) => {

  return (
    <StyledInformation>
      <Row gap='1rem' style={{padding: '.5rem', borderBottom: '1px dotted black'}}>
        <IconButton
          onClick={running && runningThis ? handlePause : handlePlay}
          icon={running && runningThis ? faPause : faPlay}
          disabled={inProgress && !runningThis}
        />
        <div style={{flex: '1 1 auto'}}>
          <h2 style={{margin: 0}}>{algorithm.name}</h2>
        </div>
        <HideLarge size="md">
          <IconButton
            onClick={toggleArticle}
            icon={hideArticle ? faEyeSlash : faEye}
          />
        </HideLarge>
      </Row>
      <Article hide={hideArticle}>
        {algorithm.description.map((p,i) => (
          <p key={i}>{p}</p>
        ))}
        <p><em>
          Source:
          {` `}
          <Link href={algorithm.hyperlink} colored>
            {algorithm.source}
          </Link>
        </em></p>
      </Article>

    </StyledInformation>
  )
}

Information.propTypes = {
  algorithm: PropTypes.object,
  running: PropTypes.bool,
  inProgress: PropTypes.bool,
  runningThis: PropTypes.bool,
  handlePlay: PropTypes.func,
  handlePause: PropTypes.func,
  hideArticle: PropTypes.bool,
  toggleArticle: PropTypes.func,
}

Information.defaultProps = {
  hideArticle: false,
}

export default Information
