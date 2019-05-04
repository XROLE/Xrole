// const selectionSort = (arr => {
//   for(let i = arr.length; i > 0; i--){
//     let smallest = arr[arr.length - i];
//     let smallestIndex;

//     for( let j = arr.length - i; j < arr.length; j++){
//       if(arr[j + 1] < smallest) {
//         smallest = arr[j];
//         smallestIndex = j;

//         // console.log('smallestIndex', j,  smallest);
//       }
//       console.log(smallest, arr[j]);
//     }
//     if(smallestIndex) {
//       smallest = arr[smallestIndex];
//       arr[arr.length - i] = smallest;
//       arr[smallestIndex] = arr[arr.length - i];
//     }

//     console.log(arr, smallest, arr[arr.length - i]);
//   }
//   return arr;

// })([ 7, 2, 3, 4, 6, 5, 1]);
const selectionSort = (arr => {
  for(let i = 0; i < arr.length; i++){
    let smallest = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[i]){
        smallest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;

})([ 7, 2, 3, 4, 6, 5, 1]);

console.log(selectionSort);
