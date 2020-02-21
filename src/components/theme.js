import chroma from 'chroma-js'

const primary = '#4D9DE0';
const secondary = '#2AA464';
const text = '#222';
const white = '#fff';

const getAlpha = c => chroma(c).alpha(.25);
const getFade = c => chroma(c).brighten(2.5).desaturate(.2);

export default ({
  primary: primary,
  primaryAlpha: getAlpha(primary),
  primaryFade: getFade(primary),
  secondary: secondary,
  secondaryAlpha: getAlpha(secondary),
  secondaryFade: getFade(secondary),
  background: white,
  backgroundOff: chroma(white).darken(0.25),
  text: text,
  textOff: chroma(text).brighten(2),
  textInvert: white,
  disabled: chroma(text).brighten(4),
  font: {
    main: 'Exo 2',
    mono: 'Inconsolata',
  },
  array: {
    selected: 'red',
    scanning: 'blue',
    flagged: 'green',
    default: 'black',
  }
})
