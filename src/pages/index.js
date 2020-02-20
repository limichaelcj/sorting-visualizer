import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Column from '../components/columns/columns'
import Title from '../components/title/title'
import Array from '../components/array/array'
import Control from '../components/control/control'
import Information from '../components/information/information'
import { generateArray } from '../lib/array'

import insertionSort from '../lib/algorithms/insertionSort'
import selectionSort from '../lib/algorithms/selectionSort'
import bubbleSort from '../lib/algorithms/bubbleSort'

// initial state used for React page state
const initialState = () => ({
  array: generateArray(80),
  counter: 0,
  running: false,
  // name of running algorithm for handler mapping
  runningAlgorithm: null,
  // name of algorithm in information view
  info: 'insertionSort',
  // index positions of algorithm
  selected: null,
  scanning: null,
  flag: null,
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
    bubbleSort,
  }

  // algorithm control handlers
  const handler = {
    reset: (name) => () => {
      // reset algorithm
      if (name) {
        algorithm[name].reset();
      }
      // reset page state
      setTimeout(() => {
        setState(state => ({
          ...initialState(),
          info: state.info,
        }));
      }, 20);
    },
    play: (name) => () => {
      algorithm[name].run(state.array);
      setState(state => ({
        ...state,
        runningAlgorithm: name,
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
    // currently viewing algorithm in info section
    viewInfo: (name) => () => {
      setState(state => ({
        ...state,
        info: name,
      }))
    }
  }

  // algorithm specifications requiring page state
  React.useEffect(() => {
    Object.values(algorithm).forEach(algo => {
      algo.fps = 60;
      algo.update = (processState) => {
        const { data, selected, scanning, flag, meta } = processState;
        setState(state => ({
          ...state,
          array: data,
          selected,
          scanning,
          flag,
          counter: meta.counter,
        }));
      };
      algo.onComplete = (processState) => {
        setState(state => {
          console.log(`${state.runningAlgorithm} complete with ${processState.meta.counter} operations.`);
          return {
            ...state,
            selected: null,
            scanning: null,
            flag: null,
            running: false,
          }
        })
      }
    });
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Title>{data.site.siteMetadata.title}</Title>

      <Container size="lg">
        <Column.container break="md">
          <Column.item size={9}>
            <Container size="md">
              <Array
                items={state.array}
                selected={state.selected}
                scanning={state.scanning}
                flag={state.flag}
              />
              <Control
                algorithms={Object.keys(algorithm)}
                currentView={state.info}
                handleReset={handler.reset(state.runningAlgorithm)}
                handleViewInfo={handler.viewInfo}
              />
              <Information
                algorithm={state.info}
                running={state.running}
                runningThis={state.running && state.runningAlgorithm === state.info}
                handlePlay={handler.play(state.info)}
                handlePause={handler.pause(state.info)}
              />
            </Container>
          </Column.item>
          <Column.item size={3}>
            <pre>Operations: {state.counter}</pre>
          </Column.item>
        </Column.container>
      </Container>

    </Layout>
  )
}

export default IndexPage
