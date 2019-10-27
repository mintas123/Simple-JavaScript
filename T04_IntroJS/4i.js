function amountTocoins(amount, coins) {

  coins.sort((a, b) => b - a);
  if (amount === 0) return [];
  else {
    if (amount >= coins[0]) {
      remain = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(remain, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(33, [25, 10, 5, 2, 1]));
