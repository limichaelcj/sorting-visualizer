import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Button from '../components/button/button'
import Processor from '../lib/processor'
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

  const processor = new Processor({
    algorithm: (stt) => [stt.data[stt.data.length-1]].concat(stt.data.slice(0,stt.data.length-1)),
    initialState: {
      counter: 0,
    },
    update: (stt) => {
      stt.counter++;
      setState({...stt, array: stt.data, counter: stt.meta.iterations});
    },
    condition: (stt) => stt.counter >= stt.meta.initialState.counter + 100,
  });

  const handleStartProcess = () => {
    setState({...state, counter: 0})
    processor.run(state.array);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handleStartProcess}>Start</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
