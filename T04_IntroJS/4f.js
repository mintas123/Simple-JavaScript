function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

let testData = 2;
console.log(testData);
console.log(isPrime(testData));
