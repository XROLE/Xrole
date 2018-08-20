// Compute the sum of all integers that are multiples of 9, from 1 to 250. Enter the result of your computation in the text box below 

const sumMultiplesOfNine = (x) => {
 let 
  sum = 0, 
  i;
 for(i = 0; i <= x; i++ ){
     if(i % 9 == 0){
         sum += i
     }
 }
 return sum   
}

console.log(sumMultiplesOfNine(250));
