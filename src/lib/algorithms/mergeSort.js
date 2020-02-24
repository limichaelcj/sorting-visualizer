import Processor from '../processor'

/*
  MERGE SORT

  States:
    [prepare] prepare working data as list of lists
    [split] recursively split data into smaller lists
      - until all lists are length 1
    [select] select nodes in adjacent sublists to compare
    [merge] add lowest node to current mergeList
*/

const mergeSort = new Processor();

mergeSort.initialState = {
  action: 'prepare',
  // current index of merge action
  merging: null,
  // indexes of significant render data nodes
  selected: null,
  scanning: null,
  // list of sorted nodes during merge
  mergeList: [],
}

// insert null data node as space between sublists on render
// and include mergeList if merging
mergeSort.onRender = function(data){

  const isMerging = typeof this.state.merging === 'number';
  const { merging } = this.state;

  const renderData = data.map((sublist, i) => {
    // insert space before sublist if not first index, or after merging index
    const pre = i < 1 || (isMerging && i === merging+1) ? [] : [null];
    const merger = isMerging && i === merging ? this.state.mergeList : [];
    return [...pre, ...merger, ...sublist];
  }).flat();

  this.state.selected = isMerging && data[merging].length ? renderData.indexOf(data[merging][0]) : null;
  this.state.scanning = isMerging && data[merging+1].length ? renderData.indexOf(data[merging+1][0]) : null;
  return renderData;
}

mergeSort.algorithm = (state) => {

  switch(state.action){
    case 'prepare':
      return prepare();
    case 'split':
      return split();
    case 'select':
      return select();
    case 'merge':
      return merge();
    default:
      console.warn('Processor default: aborting algorithm.');
      return state.meta.abort();
  }

  function prepare(){
    state.data = [state.data];
    state.action = 'split';
    return split();
  }

  function split(){
    // check splitting is complete
    // send immediately to select action
    if (state.data.every(sublist => sublist.length < 2)){
      state.action = 'select';
      return select();
    }

    // operation count scales with number of sublists
    state.meta.counter += state.data.length - 1;

    // split each sublist in half
    // - map each item to array of halves
    // - then flatten entire modded data array
    return state.data.map(sublist => {
      // length 1 -> return array-wrapped sublist with no changes
      if (sublist.length < 2) return [sublist];
      // get midpoint
      const m = Math.floor(sublist.length / 2);
      // return nested array of new sublists
      return [sublist.slice(0,m), sublist.slice(m)];
    }).flat(); // flatten map result to bring new sublists to top level
  }

  function select(){
    // check if merging is complete
    if (state.data.length < 2) {
      state.merging = null;
      state.action = 'complete';
    }
    // continue with next selection
    else {
      // reset merging index if starting merge
      // or if next merging index is not last index
      if (typeof state.merging !== 'number' || state.merging+2 >= state.data.length) {
        state.merging = 0;
      } else {
        state.merging++;
      }
      state.action = 'merge';
    }
    return state.data;
  }

  function merge(){
    // get sublists for merging
    // - make sure to get direct pointer instead of copy
    const a = state.data[state.merging];
    const b = state.data[state.merging+1];

    // check if merging is complete
    // - both sublists are empty
    if (!a.length && !b.length) {
      // replace sublists with sorted mergeList
      state.data.splice(state.merging, 2, state.mergeList);
      // reset mergeList
      state.mergeList = [];
      // immediately send to select to visualize next merge selection
      return select();
    }

    // compare sublists and add lowest value to mergeList
    // - first elements in sublists will be compared and spliced
    // - splicing will mutate original data array
    const sublist = !a.length || (b.length && b[0].value < a[0].value) ? b : a;
    state.mergeList.push(sublist.splice(0,1)[0]);

    // every merge consist of two reads, data removal, and write to mergeList
    state.meta.counter += 3;
    return state.data;
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
