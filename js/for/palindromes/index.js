const word = prompt(`Digite a palavra que deseja verificar:`).toLowerCase();
let newWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  newWord += word[i];
}

if (word === newWord) {
  alert(
    `Palavra: ${word}
    \nInversão: ${newWord}
    \n"${word}" é um palíndromo.`
  );
} else {
  alert(`Palavra: ${word}
  \nInversão: ${newWord}
  \n"${word}" não é um palíndromo.`);
}
