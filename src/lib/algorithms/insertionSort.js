import Processor from '../processor'

/*
  INSERTION SORT

  States:
    [select] selecting next index incrementally
    [scann] scanning next index while selected < scanning
    [insert] splice selected and insert at scanning
*/

const insertionSort = new Processor();

insertionSort.initialState = {
  // algorithm action state
  action: 'select',
  // current index selected
  selected: -1,
  selectedValue: null,
  // index scanning for comparison with selected
  scanning: null,
}

insertionSort.algorithm = (state) => {

  // data = array of objects { id: int, value: int }
  // current = current index selected
  // scanning = current index scanning for comparison
  const { data } = state;

  switch(state.action) {
    case 'select':
      return selectNextIndex();
    case 'scann':
      return scannNextIndex();
    case 'insert':
      // splice selected node, then insert it before scanning index (+1)
      return insertBeforeSeeking();
    default:
      console.warn('Processor error: aborting algorithm.')
      state.meta.abort();
      return data;
  }

  function selectNextIndex(){
    state.selected++;
    state.scanning = null;
    if (state.selected > 0 && state.selected < data.length) {
      state.selectedValue = data[state.selected].value;
      state.action = 'scann';
    }
    return data;
  }

  function scannNextIndex(){
    // if no scanning index, set equal to selected index - 1
    if (state.scanning === null) {
      // scann next node in negative direction
      state.scanning = state.selected - 1;
    } else {
      // if past last possible index, 0, move on to insert action
      if (state.scanning < 0) {
        state.action = 'insert';
      } else {
        // get scanning value for evaluation
        const scanningValue = data[state.scanning].value;
        // compare with selected
        // continue scanning if selected < scanning
        if (state.selectedValue < scanningValue) {
          // scanning iterates negatively from selected index to find closest
          // data node that is lower in value than selected node
          state.scanning--;
        } else {
          // insert only if scanning index is at least 2 lower than selected index
          // (i.e. inserting will actually change the data)
          // otherwise data should not change and next action reverts to inserting
          state.action = state.scanning + 1 < state.selected ? 'insert' : 'select';
        }
      }
    }
    return data;
  }

  function insertBeforeSeeking(){
    const newData = data.slice();
    // splice selected index from data
    const node = newData.splice(state.selected, 1)[0];
    // insert node before scanning index
    newData.splice(state.scanning + 1, 0, node);
    // continue to next index
    state.action = 'select';
    return newData;
  }
}

insertionSort.condition = ({ data, selected }) => {
  return selected >= data.length;
}

export default insertionSort;
