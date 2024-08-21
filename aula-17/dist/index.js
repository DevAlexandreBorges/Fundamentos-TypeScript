"use strict";
// let numero = 10;
// const nome = prompt("Qual seu nome?");
// console.log(nome?.toUpperCase());
//util pois sem o typescript, poderia acontecer um eventual erro.
// * tipagem de array
// const numeros: Number[] = [1, 2, 3, 4, 5]; // * usa-se tipo[] após a definição do nome da variavel
// const letras: string[] = ["a", "e", "f"];
// const misto: (number | string)[] = ["ale", 100, 2.1]; // ! pessima prática, porêm é assim que se define um array misto(com varios tipos de variaveis)
// const idades: number[] = [];
// idades.push(23);
// idades.push(38);
// idades.push(12);
// idades.push(49);
// idades.push(16);
// const menorDeIdade = idades.filter((elemento) => {
//   return elemento < 18;
// });
// console.log(menorDeIdade);
// const perfil: [string, number] = ["Alexandre", 21];
//* para valores duplos cria-se uma tupla: [string, number] em ordem respectiva
// ?  Object Types : Interface or Types
// Interface -> cria um objeto definitivo para que os demais herdem seus atributos
//ex:
// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string; // * colocar o ? em um atributo o torna opcional, sendo que se n tiver n vai dar erro
//   altura: number;
//   peso: number;
// }
// * criação de objeto para exemplo
// const pessoa: Person = {
//   nome: "Alexandre",
//   idade: 21,
//   profissao: "dev",
//   altura: 1.79,
//   peso: 85,
// };
// const pessoa2: Person = {
//   nome: "Laura",
//   idade: 20,
//   profissao: "medvet",
//   altura: 1.58,
//   peso: 55,
// };
// ? union type and literal types
function chooseNumber(number1, number2, criterio) {
    switch (criterio) {
        case "greater":
            return number1 > number2 ? number1 : number2;
            break;
        case "lower":
            return number1 < number2 ? number1 : number2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return number1;
            return number2;
            break;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "lower");
console.log(numeroEscolhido);
