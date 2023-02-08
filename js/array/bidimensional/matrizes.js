const arr = [
  '1º Nível',
  ['2º Nível', 42, true],
  [
    ['3º Nível, 1º item', 'Olá, mundo!'],
    ['3º Nível, 2º item', 'Oi, mundo!'],
  ],
  [],
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2]);
console.log(arr[2][1]);
console.log(arr[2][1][0]);

const matriz = [
  ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
  ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4'],
  ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4'],
];
// console.table(matriz);
// matriz.push(['Nova linha']);
// matriz[0].push('Nova linha');
// console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
  for (let c = 0; c < matriz[l].length; c++) {
    const elemento = matriz[l][c];
    console.log('Posição: (' + l + ', ' + c + ') Valor: ' + elemento);
  }
}
