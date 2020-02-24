import Processor from '../processor'

/*
  MERGE SORT

  States:
    [prepare] prepare working data
    [split] recursively split data into smaller lists
    [compare] compare lists
    [merge] merge lists

  * Splitting is rendered by inserting empty values
    in list where splits should occur
*/

const mergeSort = new Processor();

mergeSort.framerate = 1000;

mergeSort.formatted = function(){
  return this.state.data.map((g,i) => i > 0 ? [0].concat(g) : g).flat();
}

mergeSort.initialState = {
  // algorithm action state
  action: 'prepare',
  mergingIndex: 0,
}

mergeSort.algorithm = (state) => {

  const { data } = state;

  switch(state.action) {
    case 'prepare':
      return prepareData();
    case 'split':
      return splitData();
    case 'merge':
      return mergeGroups();
    default:
      console.warn('Processor default: aborting algorithm.');
      mergeSort.pause();
      return data;
  }

  function prepareData(){
    state.data = [data];
    state.action = 'split';
    return splitData();
  }

  function splitData(){

    // check if finished splitting
    if (state.data && state.data.every(g => g.length < 2)) {
      state.action = 'merge';
      return mergeGroups();
    }

    // split each group in half
    state.data = state.data.map(g => {
      if (g.length < 2) return g;
      const h = Math.floor(g.length / 2);
      return [g.slice(0,h), g.slice(h)]
    }).flat();

    // return flattened array with inserted empties for render
    return mergeSort.formatted();
  }

  function mergeGroups(){

    const { data } = state;

    // check if merging is complete
    if (data.length < 2) {
      state.action = 'complete';
      return data[0];
    }

    // check if merging round is complete
    if (state.mergingIndex + 1 >= data.length) {
      state.mergingIndex = 0;
      return mergeSort.formatted();
    }

    // compare groups
    const base = data[state.mergingIndex];
    const next = data[state.mergingIndex+1];

    console.log(base);

    const merged = [];
    var bi = 0;
    var ni = 0;
    while(bi < base.length && ni < next.length){
      if (bi >= base.length) {
        merged.push(next[ni]);
        ni++;
        continue;
      }
      if (ni >= next.length) {
        merged.push(base[bi]);
        bi++;
        continue;
      }
      if (next[ni].value < base[bi].value) {
        merged.push(next[ni]);
        ni++;
      } else {
        merged.push(base[bi]);
        bi++;
      }
    }

    console.log(merged);

    const copy = data.slice();
    copy.splice(state.mergingIndex, 2, merged);
    state.data = copy;

    state.mergingIndex++;

    return mergeSort.formatted();
  }

}

mergeSort.condition = (state) => {
  return state.action === 'complete';
}

export default {
  name: 'Merge Sort',
  shortName: 'Merge',
  processor: mergeSort,
  description: [
    `Merge sort is an efficient, general-purpose, comparison-based sorting algorithm that works as follows:`,
    `1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).`,
    `2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.`,
  ],
  source: 'Wikipedia',
  hyperlink: 'https://en.wikipedia.org/wiki/Merge_sort',
}
