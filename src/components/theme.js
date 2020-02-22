import chroma from 'chroma-js'

const getAlpha = c => chroma(c).alpha(.25);
const getFade = c => chroma(c).brighten(2.5).desaturate(.2);

const white = '#fff';
const primary = '#4D9DE0';
const primaryAlpha = getAlpha(primary);
const primaryFade = getFade(primary);
const secondary = '#2AA464';
const secondaryAlpha = getAlpha(secondary);
const secondaryFade = getFade(secondary);
const text = '#222';

export default ({
  primary: primary,
  primaryAlpha,
  primaryFade,
  secondary: secondary,
  secondaryAlpha,
  secondaryFade,
  background: white,
  backgroundSoft: chroma(white).darken(0.1),
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
    selected: chroma('#EB6456').alpha(.8),
    scanning: chroma(primary).alpha(.8),
    flagged: chroma(secondary).brighten().desaturate(),
    // default: chroma('#CCDBDC').alpha(.8),
    default: chroma(white).darken(.5),
  }
})
