//==================================================================== FIND THE LONGEST WORD IN A STRING
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

//=============================================================================== ANSWER
function findLongestWordLength(str) {
    let string = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i].length > longestWord){
            longestWord = string[i].length;
        }
    }
    return longestWord;
}
  
  console.log('length fo longest word: ', (findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")));
// =============================================================================== TEST
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.