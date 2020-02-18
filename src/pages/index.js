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
  running: false,
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
    insertionSort.permit = function(processState) {
      return this.isRunning;
    }
    insertionSort.update = (processState) => {
      const { data, index, current, meta} = processState;
      setState(state => ({
        ...state,
        array: data,
        current,
        counter: meta.iterations,
      }));
      processState.index += 1;
    };
    insertionSort.onComplete = (processState) => {
      setState(state => ({
        ...state,
        running: false,
      }));
    };
  }, [])

  const handleReset = () => {
    insertionSort.reset();
    setState({
      ...state,
      ...initialState(),
    })
  }

  const handleStartInsertion = () => {
    insertionSort.run(state.array);
    setState(state => ({...state, running: true}));
  }

  const handlePauseInsertion = () => {
    insertionSort.pause();
    setState(state => ({...state, running: false }));
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} current={state.current} swap={state.swap} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={insertionSort.isRunning ? handlePauseInsertion : handleStartInsertion} disabled={insertionSort.isComplete}>
          {insertionSort.isRunning ? 'Pause' : 'Start'}
        </Button>
      </Container>
    </Layout>
  )
}

export default IndexPage
