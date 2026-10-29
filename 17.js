function cache(func) {
  const cacheMap = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cacheMap.has(key)) {
      cacheMap.set(key, func.apply(this, args));
    }
    return cacheMap.get(key);
  };
}
