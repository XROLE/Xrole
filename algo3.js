// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }
// async  function sayHello(){
// console.log('  calling...');
// const result = await resolveAfter2Seconds();
// console.log(result);
// console.log('  done');
// };

// sayHello();

// function delay(){
//   return new Promise((resolve) => setTimeout(() => resolve('This one is from delay')));
// }

// async function displayDelay(){
//  console.log('no delay');
//  const result = await delay();
//  console.log(result);
//   console.log('Most delay');
// }

// displayDelay();

function multply(a, b){

  return new Promise((resolve) => resolve('I am a chosen one '));
}

async function doubleMultiply(){
  console.log('  I am a chosen one');
  const result = await multply(2,9);
  console.log(' ', result);
  console.log('  Me and my family shall make heaven at last in Jesus name. Amen');
}
doubleMultiply();