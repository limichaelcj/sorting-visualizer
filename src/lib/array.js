export function generateArray(count) {
  const size = count || 50;
  const arr = [];
  while(arr.length < size) {
    arr.push(Math.floor(Math.random()*100) + 1);
  }
  return arr.map((value,id) => ({ id, value }))
}
