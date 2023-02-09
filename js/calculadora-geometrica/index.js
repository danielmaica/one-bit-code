function triangleArea() {
  let base = prompt('Digite o valor da base do triângulo:');
  let height = prompt('Digite o valor da altura do triângulo:');
  let result = (base * height) / 2;
  alert(`A área do triângulo informado é: ${result}`);
}

function rectangleArea() {
  let base = prompt('Digite o valor da base do retângulo:');
  let height = prompt('Digite o valor da altura do retângulo:');
  let result = base * height;
  alert(`A área do retângulo informado é: ${result}`);
}

function squareArea() {
  let side = prompt('Digite o valor do lado do quadrado:');
  let result = side ** 2;
  alert(`A área do quadrado informado é: ${result}`);
}

function trapezeArea() {
  let biggerBase = prompt('Digite o valor da maior base do trapézio:');
  let smallerBase = prompt('Digite o valor da menor base do trapézio:');
  let height = prompt('Digite o valor da altura do trapézio:');
  let result = ((biggerBase + smallerBase) * height) / 2;
  alert(`A área do trapézio informado é: ${result}`);
}

function circleArea() {
  let radius = prompt('Digite o valor do raio do círculo:');
  let result = 3.14 * radius ** 2;
  alert(`A área do círculo informado é: ${result}`);
}

function showMenu() {
  return prompt(
    `CALCULADORA GEOMETRICA:\nEscolha uma opção:\n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair`
  );
}

function geometricCalculator() {
  let option;
  do {
    let result;
    option = showMenu();

    switch (option) {
      case '1':
        triangleArea();
        break;
      case '2':
        rectangleArea();
        break;
      case '3':
        squareArea();
        break;
      case '4':
        trapezeArea();
        break;
      case '5':
        circleArea();
        break;
      case '6':
        alert('Encerrando...');
        break;
      default:
        alert('Opção inválida, tente novamente!');
        break;
    }
  } while (option !== '6');
}

geometricCalculator();
