# Merging Two Sorted Arrays

Given two sorted arrays, merge them into a new array that is also sorted.

## Example:
```
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

mergeTwo(arr1, arr2); // [1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20]
```

### Slower Approach for reference 
We can use the spread operator to join the two lists and then sort the result.
```
// O(n log n) time & O(n) space
function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a,b) => a-b);
}
```