import React from 'react'
import PropTypes from 'prop-types'
import StyledFooter from './footer.css'
import Link from '../link/link'

const Footer = (props) => {
  return (
    <StyledFooter>
      Built by <Link href="https://mcli.dev">@mcli830</Link>
    </StyledFooter>
  )
}

export default Footer
