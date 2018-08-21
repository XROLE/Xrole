//==================================================================== FINDERS KEEPERS
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//=============================================================================== ANSWER
function findElement(arr, func) {
  let num = arr.filter(func);
  return num[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// =============================================================================== TEST
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
