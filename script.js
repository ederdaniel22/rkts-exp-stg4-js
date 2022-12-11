/**
 * DESAFIO 1 STAGE 4 JAVASCRIPT
 * solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
 *[ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais
 */

let userName = prompt('Digite seu nome: ')

let numberOne = Number(prompt('Digite um número: '))
let numberTwo = Number(prompt('Digite mais um número: '))

alert(
  `Olá ${userName} a soma dos números que digitou é: ${numberOne + numberTwo}`,
)
alert(
  `Olá ${userName} a subtração dos números que digitou é: ${
    numberOne - numberTwo
  }`,
)
alert(
  `Olá ${userName} a multiplicação dos números que digitou é: ${
    numberOne * numberTwo
  }`,
)
alert(
  `Olá ${userName} a divisão dos números que digitou é: ${
    numberOne / numberTwo
  }`,
)
alert(
  `Olá ${userName} o resto da divisão dos números que digitou é: ${
    numberOne % numberTwo
  }`,
)

let parNumber = numberOne + numberTwo

if (parNumber % 2 == 0) {
  alert('A soma dos números digitados é par')
} else {
  alert('A soma dos números digitados é impar')
}

if (numberOne == numberTwo) {
  alert('Os números digitados são iguais')
} else {
  alert(' Os números digitados são diferentes')
}
