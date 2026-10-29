function hasTwoCubeSums(n) {
  const sums = new Map();
  const limit = Math.cbrt(n);
  for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      const sum = a ** 3 + b ** 3;
      if (sum > n) break;
      if (sum === n) {
        if (sums.has(sum)) return true; // Найдено второе представление
        sums.set(sum, [a, b]);
      }
    }
  }
  return false;
}
