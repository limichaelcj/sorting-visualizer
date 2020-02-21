import Processor from '../processor'

/*
  SELECTION SORT

  States:
    [select] select next index incrementally (0-last)
    [scan] scan list for next minimum value starting at selected index
         - ignore all indexes lower than selected index
    [move] splice scanned minimum value and insert at selected index
*/

const selectionSort = new Processor();

selectionSort.initialState = {
  // algorithm action state
  action: 'select',
  // current index selected i.e. starting index of sublist
  selected: -1,
  // index scanning to find minimum value
  scanning: null,
  // current min index and value in scan
  minIndex: null,
  // value is stored for optimization
  minValue: null,
}

selectionSort.algorithm = (state) => {
  // data = array of objects { id: int, value: int }
  const { data } = state;

  switch(state.action) {
    case 'select':
      return selectNextIndex();
    case 'scan':
      return scanNextIndex();
    case 'move':
      return moveMinToSelected();
    default:
      console.warn('Processor error: aborting algorithm.');
      state.meta.abort();
      return data;
  }

  function selectNextIndex(){
    // increment selected and reset scanning index
    state.selected++;
    state.scanning = null;
    // flag next step
    state.action = 'scan';
    return data;
  }

  function scanNextIndex(){
    // if new scanning round, set scanning to selected index
    // to start tracking minimum value in sublist
    if (state.scanning === null) {
      state.scanning = state.selected;
      // set working minimum to value of current scan
      state.minIndex = state.scanning;
      state.minValue = data[state.minIndex].value;
    } else {
      // continue scanning indexes incrementally
      state.scanning++;

      // go to next step if scanning is complete
      if (state.scanning >= data.length) {
        state.action = 'move';
      } else {
        // otherwise evaluate next scan node
        const scanValue = data[state.scanning].value;
        // compare current minimum value to current scan value
        if (scanValue < state.minValue) {
          // if lower, set new min value node
          state.minIndex = state.scanning;
          state.minValue = scanValue;
        }
      }
    }
    return data;
  }

  function moveMinToSelected(){
    // generate data copy
    const newData = data.slice();
    // splice scanned min value node
    const node = newData.splice(state.minIndex, 1)[0];
    // insert node at selected index
    newData.splice(state.selected, 0, node);
    // account for additional memory operations for insert action
    // (splice, move all values up one index for inserting)
    state.meta.counter += state.scanning - state.selected + 1;
    // continue to next index
    state.action = 'select';
    return newData;
  }
}

selectionSort.condition = ({ data, selected }) => {
  return selected >= data.length;
}

export default {
  name: 'Selection Sort',
  shortName: 'Selection',
  processor: selectionSort,
  description: [
    `Selection sort is an in-place comparison sorting algorithm. It has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.`,
    `The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right`,
    `The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort. One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.`,
  ],
  source: 'Wikipedia',
  hyperlink: 'https://en.wikipedia.org/wiki/Selection_sort',
}
