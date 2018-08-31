// Computer Fundamentals Questions and Answers – Algorithms: https://www.sanfoundry.com/computer-fundamentals-questions-answers-algorithms/

// basic commputer knowledge understanding: https://www.coursehero.com/file/24242678/Quiz-1docx/

/* 
=============================== ISOGRAM
Create a funtion called isIsogram that takes one argument, a word to test if it's an isogram. This function should return a boolean indicating whether it is an isogram (true) or not (false).
Example:

*/
function isIsogram(word){
    if(word.length !== new Set(word).size){
        return false;
    }    
    return true;
}

console.log(">>>>", isIsogram('dermogaphics'));

