// avg
const avg = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};
console.log(`Média: ${avg(2, 6)}`); // 4
console.log(`Média: ${avg(20, 30)}`); // 25

// weightedAvg
const wAvg = (...entries) => {
  const sum = entries.reduce(
    (accum, { num, weight }) => accum + num * (weight ?? 1),
    0
  );
  const wSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0);
  return sum / wSum;
};
console.log(
  `Média Ponderada: ${wAvg(
    { num: 9, weight: 3 },
    { num: 7, weight: 1 },
    { num: 10, weight: 1 }
  )}`
); // 8.8

// median
const median = (...numbers) => {
  const orderedNums = [...numbers].sort((a, b) => a + b); // ordem crescente
  const mid = Math.floor(orderedNums.length / 2);
  const result =
    orderedNums.length % 2 !== 0
      ? mid
      : avg(orderedNums[mid - 1], orderedNums[mid]); // média entre o primeiro e o segundo mediano
  return result;
};

// mode
const mode = (...numbers) => {
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)