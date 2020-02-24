import React from 'react'
import PropTypes from 'prop-types'
import StyledTitle from './title.css'
import Subtitle from './subtitle.css'

const Title = ({ title, children }) => (
  <div style={{padding: '1rem 0'}}>
    <StyledTitle>{title}</StyledTitle>
    {children && (
      <Subtitle>
        {children}
      </Subtitle>
    )}
  </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default Title
