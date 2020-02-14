import React from 'react'
import PropTypes from 'prop-types'
import StyledTitle from './title.css'

const Title = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
