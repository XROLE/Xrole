//==================================================================== SPINAL TAP CASE
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code
//=============================================================================== ANSWER
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const strArray = str.toLowerCase().split(' ');
  let  newString = strArray[0];
  for(let i =1; i <strArray.length; i++){
    newString += `-${strArray[i]}`;
  }
   return newString;
}

console.log('>>>>>', spinalCase('Teletubbies say Eh-oh'));

// =============================================================================== TEST
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".