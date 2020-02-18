import Processor from '../processor'

const insertionSort = new Processor();

insertionSort.initialState = {
  index: 0,
  current: null,
}

insertionSort.algorithm = (state) => {

  // data = array of objects { id: int, value: int }
  // index = current iteration
  const { data, index } = state;

  // identify current data node (for render)
  state.current = data[index].id;

  // get current node value
  const value = data[index].value;
  // compare current node value to previous indexes
  let i = index;
  while( i-1 >= 0 ){
    // break when next value is less than current node value
    if (value >= data[i-1].value){
      break;
    }
    // otherwise continue down list
    i--;
  }

  // if i-iterator has not changed, return same data
  if (i === index) {
    return data;
  }

  // insert into array for next round
  const nextData = data.slice();
  const tmp = nextData.splice(index, 1)[0];
  nextData.splice(i, 0, tmp);
  return nextData;
}

insertionSort.condition = ({ data, index }) => {
  return index >= data.length;
}

export default insertionSort;
