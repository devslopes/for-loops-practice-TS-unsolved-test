/**
 * EXERCISE 17
 * ======================================================
 * @task
 * Create the doesArrayInclude() function that re-assembles the array.includes() method and follows:
 * * Takes an object of two key-value pairs as an argument:
 * * * 'arr', an array of items of mixed types (number, string, whatever, we never know)
 * * * 'value' of type of any of the arr items' type
 * * * The argument object must be destructured into 'arr' and 'value'
 * * Returns a boolean if the value exists in the array or not.
 * HINT: You will need a GENERIC type
 * The for loop must be used
 * The function must be exported
 * Example: doesArrayInclude(['a', 'b', 'c'], 'a') => true
 * Example: doesArrayInclude(['a', 'b', 'c'], 'f') => false
 * Example: doesArrayInclude([1, 2, 3, 'h', 'i', 'z', 'v'], '2') => true
 * NOTE: You can NOT use the array.includes() method in your code
 */

export function doesArrayInclude({ arr, value }) {
  // Your code goes here...
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
