let cash = Number(
  prompt(`Digite a quantidade inicial de dinheiro disponível:`)
);
let options = 0;

do {
  options = Number(
    prompt(
      `Saldo: R$${cash} 
      Escolha a opção desejada: 
      1 • Depositar 
      2 • Sacar 
      3 • Sair`
    )
  );

  switch (options) {
    case 1:
      cash += Number(prompt(`Digite a quantidade que voce deseja depositar:`));
      break;
    case 2:
      cash -= Number(prompt(`Digite a quantidade que voce deseja sacar:`));
      break;
    case 3:
      alert(`Voce escolheu sair. FECHANDO...`);
      break;
    default:
      alert(`Opcao invalida, tente novamente!`);
      break;
  }
} while (options !== 3);
