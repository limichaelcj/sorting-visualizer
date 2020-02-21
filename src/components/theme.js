import chroma from 'chroma-js'

const primary = 'dodgerblue';
const secondary = '#2B4570';
const text = 'black';

export default ({
  primary: primary,
  primaryAlpha: chroma(primary).alpha(0.25),
  primaryFade: chroma(primary).brighten(3).desaturate(.2),
  background: 'white',
  backgroundOff: chroma('white').darken(0.25),
  text: text,
  textOff: chroma(text).brighten(2),
  textInvert: 'white',
  disabled: chroma(text).brighten(4),
  font: {
    main: 'sans-serif',
    mono: 'monospace',
  },
  array: {
    selected: 'red',
    scanning: 'blue',
    flagged: 'green',
    default: 'black',
  }
})
