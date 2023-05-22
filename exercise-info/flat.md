# ARRAY FLAT

The **flat()** creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```JS
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]


```

For this exercise we want you to build a flattenArray() function that solves the same task 
for the depth of 1 with **for loops ONLY**.

a flattenArray() function should
• Take 2 arrays as arguments
• Return a single array of arguments' arrays values

### Learn more
[Array flat() docs[(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
