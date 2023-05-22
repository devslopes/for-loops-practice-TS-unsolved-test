# JOIN METHOD

The **join()** method creates and returns a new string by concatenating all of the elements in an array 
(or an array-like object), separated by commas or a specified separator string. If the array has only one item, then 
that item will be returned without using the separator.

```JS
const elements = ['Fire', 'Air', 'Water'];
const newString = elements.join(', ');
// expected value: 'Fire, Air, Water'
```

For this exercise we want you to build a joinToString() function that solves the same task with **for loops ONLY**.

A joinToString() function should
* Take an array and a symbol to be added between array item in the new string as arguments (2)
* Return a string value of concatenated array items separated by the symbol(symbols).

---
#### Resources
[Array join() docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
