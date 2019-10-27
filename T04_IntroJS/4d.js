function sortString(str) {
 let arr = Array.from(str);
  arr.sort();
  return arr.toString().replace(/(,)/g, "");
}

let testString = "webmaster"
console.log(testString);
console.log(sortString(testString));
