# Morning Challenges


## About:
Weekly morning challenge review code will be uploaded here on a weekly basis.

## Methods and Expressions used:
Following are list of methods and their explanations that were used in the challenges:

## .split() Method
The split() method will divide a given String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

## Example usage:

```js

const string = 'The quick brown fox jumps over the lazy dog.';

const words = string.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = string.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = string.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

```
Referred from: [MDN docs String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## .Object.is() Method
Object.is() method compares two values to determine whether they are the same.

## Example usage:
```js
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
```
Referred from: [MDN docs Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

## .slice() method
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

## Example usage:
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```
Referred from: [MDN docs Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## Arrow functions expression:
Arrow function expressions are compact alternatives to traditional function expressions, but is limited and can't be used in all situations.

## Example usage:
```js
const stringer = (myStr) => {

console.log(myStr);

}
stringer("Hello World");
```
Referred from: [MDN docs Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


