import Processor from '../processor'

/*
  BUBBLE SORT

  States:
    [round] begin data iteration round, select index 0
    [scan] scan next adjacent value to compare to selected value
    [swap] swap selected and scan nodes if out of order

  *[flag] Each iteration round through the list decreases the next
  round's size by one because the maximum value will always
  be pushed to the last index
*/

const bubbleSort = new Processor();

bubbleSort.initialState = {
  // algorithm action state
  action: 'round',
  // current index selected
  selected: null,
  // adjacent scanned index
  scanning: null,
  // limiter flag set to mark last index of previous round
  // where round iteration should stop
  flag: null,
  // index of last swap location saved for optimization:
  // - if a portion of the latter half of data is unchanged
  //   after an iteration round, then it doesn't need to be
  //   checked. The limiter flag will skip to the last swapped
  //   index to reduce read operations in the round.
  swapped: null,
}

bubbleSort.algorithm = (state) => {
  // data = array of objects { id: int, value: int }
  const { data } = state;

  switch(state.action) {
    case 'round':
      return startRound();
    case 'scan':
      return scanAdjacentIndex();
    case 'swap':
      return swapSelectedAndScanned();
    default:
      console.warn('Processor default: aborting algorithm.');
      return state.meta.abort();
  }

  function startRound(){
    // set initial flag out of bounds
    if (state.flag === null) {
      state.flag = data.length;
    }
    // set selected to index 0 and reset scanning
    state.selected = 0;
    state.scanning = null;
    state.swapped = null;
    // continue to scan
    state.action = 'scan';
    return data;
  }

  function scanAdjacentIndex(){
    state.scanning = state.selected + 1;
    // compare scan index to flag index
    if (state.scanning >= state.flag) {
      // check if any swaps occured
      if (state.swapped === null) {
        // no swaps indicates a sorted array -> set flag to 0 to terminate
        state.flag = 0;
      } else {
        // if swap occured, set flag to last swapped index
        state.flag = state.swapped;
      }
      return startRound();
    } else {
      // else continue to swap
      state.action = 'swap';
    }
    return data;
  }

  function swapSelectedAndScanned(){
    // prepare next action
    state.action = 'scan';

    // get values
    const selectedValue = data[state.selected].value;
    const scanningValue = data[state.scanning].value;

    // compare selected and scanned
    if (selectedValue > scanningValue) {
      // generate data copy
      const newData = data.slice();

      // swap selected and scanned nodes
      const node = newData.splice(state.scanning, 1)[0];
      newData.splice(state.selected, 0, node);


      // swap index states for rendering
      state.selected = state.scanning;
      state.scanning--;

      // set swapped flag to index of selected node after swap
      state.swapped = state.selected;

      // account for hidden operations
      state.meta.counter += 2;
      // return modified data
      return newData;

    } else {
      // if no swapping required,
      // increment selected and reset scanning
      state.selected += 1;
      state.scanning = null;
    }
    return data;
  }
}

bubbleSort.condition = ({ data, flag, swapped }) => {
  // if no swapped nodes, then the array is sorted
  // -OR- when flag < 2, there are no more adjacent nodes to swap
  return typeof flag === "number" && flag < 2;
}

export default {
  name: 'Bubble Sort',
  shortName: 'Bubble',
  processor: bubbleSort,
  description: [
    `Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.`,
    `This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as timsort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.`,
  ],
  source: 'Wikipedia',
  hyperlink: 'https://en.wikipedia.org/wiki/Bubble_sort',
}
