let recursive = function(num) {
  if (num < 0) return "incorrect input. Try positive number.";

  if (num == 0) {
    return 1;
  } else {
    return (num * recursive(num - 1));
  }
};

function iterative(num) {
  if (num < 0) return "incorrect input. Try positive number.";

  if (num == 0) {
    return 1;
  } else {
    let result =1;
    for ( i = num; i >1; i--){
      result*=i;
    }
    return result;
  }
}
console.log(recursive(5));
console.log(iterative(5));
