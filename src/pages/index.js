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
  algorithm: null,
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

  const algorithm = {
    insertionSort,
  }

  const handler = {
    reset: () => {
      // reset algorithm
      if (state.algorithm) {
        algorithm[state.algorithm].reset();
      }
      // reset page state
      setState(initialState());
    },
    start: (name) => () => {
      algorithm[name].run(state.array);
      setState(state => ({
        ...state,
        algorithm: name,
        running: true,
      }));
    },
    pause: (name) => () => {
      algorithm[name].pause();
      setState(state => ({
        ...state,
        running: false,
      }))
    },
  }

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
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} current={state.current} swap={state.swap} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handler.reset}>Reset</Button>

        {/* Button for each algorithm */}
        {Object.entries(algorithm).map(([name, algo], index) => (
          <Button
            onClick={algo.isRunning ? handler.pause(name) : handler.start(name)}
            disabled={state.algorithm === null ? false : algo.isComplete || state.algorithm !== name}
          >
            {algo.isRunning ? `Pause ${name}` : `Start ${name}`}
          </Button>
        ))}
        
      </Container>
    </Layout>
  )
}

export default IndexPage
