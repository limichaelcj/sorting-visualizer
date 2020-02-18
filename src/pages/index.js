import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Button from '../components/button/button'
import { generateArray } from '../lib/array'

import insertionSort from '../lib/algorithms/insertion'

const initialState = () => ({
  array: generateArray(100),
  current: null,
  counter: 0,
})

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

  const [state, setState] = React.useState(initialState());

  React.useEffect(() => {
    insertionSort.frame = 120;
    insertionSort.update = (stt) => {
      const { data, index, current, meta} = stt;
      setState(state => ({
        ...state,
        array: data,
        current,
        counter: meta.iterations,
      }));
      stt.index += 1;
    };
  }, [])

  const handleReset = () => {
    setState({
      ...state,
      ...initialState(),
    })
  }

  const handleStartProcess = () => {
    setState(state => ({...state, counter: 0}));
    insertionSort.run(state.array);
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} current={state.current} swap={state.swap} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleStartProcess}>Start</Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
