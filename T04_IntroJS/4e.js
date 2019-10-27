
function findLongestWord(str) {
  let longestWord = str.split(' ').sort(function(a, b) {
                                         return b.length - a.length;
                                          });
  return longestWord[0];
}

let testString = "ala ma kota a kot ma chroniczną depresję"
console.log(testString);
console.log(findLongestWord(testString));
