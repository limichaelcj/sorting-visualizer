import Processor from '../processor'

/*
  Selection Sort:
    - find minimum value in list and insert at beginning
    - repeat: find next min value for sublist starting at index + 1
    - increment until iterated through entire list
*/

const selectionSort = new Processor();

selectionSort.initialState = {
  index: 0,
  current: null,
}

selectionSort.algorithm = (state) => {
  // data = array of objects { id: int, value: int }
  // index = current state index for evaluation
  const { data, index } = state;

  // get values of sublist starting at current state index
  const values = data.slice(index).map(d => d.value);
  // get minimum value of sublist
  const min = Math.min(...values);
  // get index of min value of sublist
  // add to current state index to get index relative to original data
  const indexOfMin = values.indexOf(min) + index;

  // get current minimum data node
  const nextData = data.slice();
  const minNode = nextData.splice(indexOfMin, 1)[0];

  // set current data node (for render)
  state.current = minNode.id;

  // insert current minimum to front of sublist index
  nextData.splice(index, 0, minNode);
  return nextData;
}

selectionSort.condition = ({ data, index}) => {
  return index >= data.length;
}

export default selectionSort;
