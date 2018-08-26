//==================================================================== SUM ALL NUMBERS IN A RANGE
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//=============================================================================== ANSWER
function sumAll(arr) {
    let finalArr = [];
    let newArr = arr.sort((a, b) => a - b);
    for (let i = newArr[0]; i <= newArr[1]; i++){
        finalArr.push(i);
    }
    return finalArr.reduce((x, y) => x + y);
  }
  
  console.log('>>>>>', sumAll([4, 3]));
  
  // =============================================================================== TEST
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.