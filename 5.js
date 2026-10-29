function primeFactors(n) {
  let result = '';
  let divisor = 2;
  while (n > 1) {
    let count = 0;
    while (n % divisor === 0) {
      n /= divisor;
      count++;
    }
    if (count > 0) {
      result += count === 1 ? `(${divisor})` : `(${divisor}**${count})`;
    }
    divisor++;
  }
  return result;
}
