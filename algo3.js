function sumAll(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
let sum = 0;
  for(let x = sortedArray[0]; x <= sortedArray[1]; x++){
    sum += x;
  }
    return sum;
}

console.log('   ', sumAll([1, 4]));