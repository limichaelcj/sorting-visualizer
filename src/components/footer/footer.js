import React from 'react'
import StyledFooter from './footer.css'
import Link from '../link/link'

const Footer = (props) => {
  return (
    <StyledFooter>
      Developed by <Link href="https://mcli.dev">Michael Li</Link>
    </StyledFooter>
  )
}

export default Footer
