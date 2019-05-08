// // write a function that takes in two strings as argument
// the function should return the number of times the smaller
// string pattern match the larger string.

function naiveSearch(long, short){
  let count = 0;

  for(let i = 0; i < long.length; i++){
    for(let j = 0; j < short.length; j++){
      if(long[i + j] !== short[j]) break;
      if(j === short.length - 1) count++;
    }
  }

  return count;
}


console.log('count: ', naiveSearch('itjamesguesitshegatitwithme', 'it'));
