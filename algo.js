//==================================================================== REPEAT A STRING A NUMBER OF TIMES
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//=============================================================================== ANSWER
function repeatStringNumTimes(str, num) {
    // repeat after me
    let newStr = '';
    for(let i = 0; i < num; i++){
        newStr += `${str}`
    }
    return newStr;
  }  
  console.log(repeatStringNumTimes("abc", 3));
// =============================================================================== TEST
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat()-method should not be used
