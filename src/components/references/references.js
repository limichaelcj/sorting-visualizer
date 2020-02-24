import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper.css'
import Title from './title.css'
import List from './list.css'
import Link from '../link/link'

const References = ({ algorithms, style }) => {
  return (
    <Wrapper style={style}>
      <Title>References</Title>
      <List>
        {Object.values(algorithms).map((a,i) => (
          <li key={i}>
            <Link href={a.hyperlink}>{a.name}</Link>
          </li>
        ))}
      </List>
    </Wrapper>
  )
}

References.propTypes = {
  algorithms: PropTypes.object,
  style: PropTypes.object,
}

export default References
