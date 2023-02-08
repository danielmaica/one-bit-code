const arr = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli',
];

console.log(arr);

// Adicionar Elementos
// push - Add na última posição
let tamanho = arr.push('Boromir');
console.log(arr);
console.log(tamanho);

// unshift - Add na primeira posição
tamanho = arr.unshift('Boromir');
console.log(arr);
console.log(tamanho);

// Remover Elementos
// pop - Remover elemento da última posição
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift - Remover elemento da primeira posição
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um Elemento
// includes
const inclui = arr.includes('Gandalf');
console.log(inclui);

// indexOf
const i = arr.indexOf('Gandalf');
console.log(i);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, 'Boromir');
console.log(sociedade);

// Substituiçao dos Elementos
// splice
const elementosRemovidos = sociedade.splice(
  i,
  1,
  'Gandalf, O Cinzento',
  1,
  3,
  false,
  true
);
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + ' se encontra na posição ' + i);
}
