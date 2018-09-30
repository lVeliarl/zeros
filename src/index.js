module.exports = function getZerosCount(number) {
  let count = 0;
  for (let i = 5; number / i >= 1; i *= 5) {
     count = count + Math.floor(number / i);
  }
  return count;
}
