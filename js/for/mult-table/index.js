let multTable = "";
let num = Number(prompt(`Digite o número que deseja ver a tabuada:`));

for (let i = 1; i <= 20; i++) {
  let mult = num * i;
  multTable += `${num} * ${i} = ${mult}\n`;
}

alert(`A tabuada do ${num} é: \n${multTable}`);
