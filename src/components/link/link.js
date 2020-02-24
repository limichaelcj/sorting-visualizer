import React from 'react'
import PropTypes from 'prop-types'
import StyledLink from './link.css'

const Link = ({ href, children, colored, style }) => {
  return (
    <StyledLink href={href} colored={colored} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  colored: PropTypes.bool,
  style: PropTypes.object,
}

export default Link
