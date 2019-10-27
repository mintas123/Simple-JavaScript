function second(data) {
  data.sort((a, b) => a - b);
  let secondMax = data[data.length -2];
  let secondMin = data[1];
  return [secondMin,secondMax];
}

let testData = [3,1,4,5,0,2,9];
console.log(testData);
console.log(second(testData));
