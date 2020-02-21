import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './link.css'

const Link = ({ href, children }) => {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

export default Link
