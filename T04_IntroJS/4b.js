function fibonacci(elem){
  let newNum = 1,
      oldNum = 0,
      temp;

  while (elem > 0){
    temp = newNum;
    newNum = newNum + oldNum;
    oldNum = temp;
    elem--;
  }

  return newNum;
}
console.log(fibonacci(9));
