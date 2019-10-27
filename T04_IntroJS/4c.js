function palindrome(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++)
    if (string[i] !== string[string.length - i - 1])
      return false;
  return true;
}
console.log(palindrome("ilutębabętuli"));
