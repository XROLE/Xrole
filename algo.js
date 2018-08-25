//==================================================================== FALSY BOUNCER
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//=============================================================================== ANSWER
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  const newArray = []
  const unWantedValues = [false, null, 0, "", undefined, NaN];
  for (let i = 0; i < arr.length; i++){
    if(unWantedValues.includes(arr[i]) == false){
      newArray.push(arr[i])
    }
  }
  return newArray;
}

console.log('>>>>>>>',bouncer([7, "ate", "", false, 9]));

// =============================================================================== TEST
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2]