import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Sequencer from '../lib/sequencer'
import { generateArray } from '../lib/array'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [state, setState] = React.useState(generateArray(16));

  React.useEffect(() => {
    const sequence = new Sequencer();
    sequence.update = arr => setState(arr);
    sequence.algorithm = arr => [arr[arr.length-1]].concat(arr.slice(0,arr.length-1));
    sequence.condition = state => state.count > 100;
    sequence.run(state);
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state} />
      </Container>
    </Layout>
  )
}

export default IndexPage
