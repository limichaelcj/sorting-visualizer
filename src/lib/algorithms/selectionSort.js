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

export default selectionSort;
