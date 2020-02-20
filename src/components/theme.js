import chroma from 'chroma-js'

const primary = 'dodgerblue';
const secondary = '#2B4570';
const text = 'black';

export default ({
  primary: primary,
  primaryFade: chroma(primary).brighten(3).desaturate(.2),
  background: 'white',
  backgroundOff: chroma('white').darken(0.5),
  text: text,
  textOff: chroma(text).brighten(1),
  disabled: chroma(text).brighten(4),
  textInvert: 'white',
  array: {
    selected: 'red',
    scanning: 'blue',
    flagged: 'green',
    default: 'black',
  }
})
