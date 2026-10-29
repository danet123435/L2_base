function whatCentury(year) {
  const century = Math.ceil(Number(year) / 100);
  const lastTwo = century % 100;
  const lastOne = century % 10;
  let suffix = 'th';
  if (lastTwo < 11 || lastTwo > 13) {
    if (lastOne === 1) suffix = 'st';
    else if (lastOne === 2) suffix = 'nd';
    else if (lastOne === 3) suffix = 'rd';
  }
  return century + suffix;
}
