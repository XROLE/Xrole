// THIS IS JUST AN IMPLEMENTATION PRACTICE OF BINARY SEARCH
//It might look a bit complex because I prefer to make it that way at the moment
// The longer code is commented out below

const binarySearch = ((arr, val) => {
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((arr.length - 1 )/ 2);

  while(arr[middle] !== val && start <= end){
    if(arr[middle] > val) end = middle - 1;
      else start = middle + 1;
    middle = Math.floor( ( start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ], 8);

console.log(binarySearch);


//  const binarySearch = ((arr, val) => {
//    let start = 0;
//    let end = arr.length -1;
//    let middle = Math.floor((start + end) / 2);

//   while(arr[middle] !== val && start <= end){
//      if(arr[middle] > val){
//        end = middle - 1;
//        middle = Math.floor((start + end) / 2);

//     console.log(start, ' ', middle, ' ', end);

//      }else{
//        if(arr[middle] < val){
//          start = middle + 1;
//          middle = Math.floor((start + end) / 2);

//        }
//      }
//   }

//   if(arr[start] === undefined) {
//      return -1;
//    }else{
//      return middle;
//   }

//  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ], 8);



