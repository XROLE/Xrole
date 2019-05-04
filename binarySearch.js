// BUBLE SORT

const bubbleSort = ((arr) => {
  for(let i = arr.length; i > 0; i--){
    let noSwaps;
    for( j = 0; j < i -1; j++){
      if(arr[j] > arr[j+1]){
      let store = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = store;

        console.log(arr, ' ', arr[j], ' ', arr[j + 1]);
        noSwaps = false;
      };
    }
    if(noSwaps) break;
  }
  return arr;
})([5, 4, 3, 7, 8, 1, 0, 20, 30, 25]);

console.log('bubleSort: ', bubbleSort);
