function binarySearch(target, array) {

  array.sort((a, b) => a - b);

  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return "Target was found at index " + middleIndex;
    }
    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return "Target value not found in array";

}
let testData = [3, 1, 4, 5, 0, 2, 9, 12, 5, 3, 1, 7];
console.log(binarySearch(9, testData));
