import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper.css'
import StyledTitle from './title.css'
import Subtitle from './subtitle.css'

const Title = ({ title, children }) => (
  <Wrapper>
    <StyledTitle>{title}</StyledTitle>
    {children && (
      <Subtitle>
        {children}
      </Subtitle>
    )}
  </Wrapper>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default Title
