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
    insertionSort.permit = function(stt) {
      return this.isRunning;
    }
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
    insertionSort.onComplete = (stt) => {
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

  const handleStart = () => {
    insertionSort.run(state.array);
    setState(state => ({...state, running: true}));
  }

  const handlePause = () => {
    insertionSort.pause();
    setState(state => ({...state, running: false }));
  }

  const InsertionSortButton = () => {
    const isComplete = insertionSort.isComplete;
    const isRunning = insertionSort.isRunning;
    return (
      <Button onClick={isComplete ? null : isRunning ? handlePause : handleStart} disabled={isComplete}>
        {isComplete ? 'Done' : isRunning ? 'Pause' : 'Start'}
      </Button>
    );
  }

  const handleProcessControl = insertionSort.isRunning ? handlePause : handleStart;

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} current={state.current} swap={state.swap} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handleReset}>Reset</Button>
        <InsertionSortButton />
      </Container>
    </Layout>
  )
}

export default IndexPage
