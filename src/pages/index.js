import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Button from '../components/button/button'
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

  const [state, setState] = React.useState({
    array: generateArray(16),
    counter: 0,
  });
  const sequencer = new Sequencer(
    (arr) => [arr[arr.length-1]].concat(arr.slice(0,arr.length-1)),
    (state) => setState({...state, array: state.array, counter: state.count}),
    (state) => state.count >= 100
  );

  const handleStartSequencer = () => {
    setState({...state, counter: 0})
    sequencer.run(state.array);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handleStartSequencer}>Start</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
