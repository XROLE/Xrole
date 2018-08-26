Details
Difficulty: 2/5
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], and the second argument is { last: 'Capulet' }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Useful Links
Global Object
Object.hasOwnProperty()
Object.keys()
Problem Script:
function where(collection, source) {
  var arr = [];
  // What's in a name?
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
Explanation:
Create a program that will take two parameters, the first will be an array with objects, and the second will be an object. The program needs to check the array of objects and return a new array with all the objects who have the same keys and properties the se second parameter even if the object from the array has those and more.

Hint: 1
You need to divide what you need in parts to make it easier to understand what you actually have to code for.

Hint: 2
You need to check if the object contains the keys from source and the same values.

Hint: 3
You can use map, filter, reduce and other methods in combination, also for loops.

My code:
function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}
My Code Explanation:
Check the comments on the code.