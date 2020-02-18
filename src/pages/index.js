import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Button from '../components/button/button'
import { generateArray } from '../lib/array'

import insertionSort from '../lib/algorithms/insertionSort'
import selectionSort from '../lib/algorithms/selectionSort'

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
    selectionSort,
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
    Object.values(algorithm).forEach(algo => {
      algo.frame = 120
      algo.permit = function(processState) {
        return this.isRunning;
      }
      algo.update = (processState) => {
        const { data, index, current, meta } = processState;
        setState(state => ({
          ...state,
          array: data,
          current,
          counter: meta.iterations,
        }));
        processState.index += 1;
      };
      algo.onComplete = (processState) => {
        setState(state => ({
          ...state,
          running: false,
        }))
      }
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={state.array} current={state.current} swap={state.swap} />
        <pre>Iterations: {state.counter}</pre>
        <Button onClick={handler.reset}>
          {state.running ? 'Stop' : 'Reset'}
        </Button>

        {/* Button for each algorithm */}
        {Object.entries(algorithm).map(([name, algo], index) => (
          <Button
            key={index}
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
