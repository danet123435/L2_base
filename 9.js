function solution(str) {
  if (str === '') return [];
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2).padEnd(2, '_'));
  }
  return result;
}
