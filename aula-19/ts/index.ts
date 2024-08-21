interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir(): void; // ! se o atributo for omitido da classe Pessoa, acontecerá um erro
}

// * usa-se a interface para deixar claro (uma especia de contrato que sempre deve ser seguido) quais serão os atributos e métodos que uma classe deve ter.

//? para atributos privados use o _ na frente do nome da variavel para n haver conflitos com o get posteriormente
class Pessoa implements IPessoa {
  //atributos : caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string; // ? tornar um atributo private, faz com que ele não possa ser alterado e nem visualizado fora da classe (encapsulamento)
  readonly saldo: number;

  //métodos : ações (função)

  //! use sempre o método constructor : para iniciar a variavel

  constructor(
    nome: string,
    idade: number,
    altura: number,
    _cpf: string,
    saldo: number
  ) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = _cpf;
    this.saldo = saldo;
  }

  dormir() {
    console.log("dormindo...");
  }
  //acessor : getter busca a informação
  get cpf() {
    return this._cpf;
  }

  //acessor: setter altera a informação
  set cpf(alterar: string) {
    this._cpf = alterar;
  }
}

class Professor extends Pessoa {
  codigo: number;

  constructor(
    nome: string,
    idade: number,
    altura: number,
    cpf: string,
    saldo: number,
    codigo: number
  ) {
    super(nome, idade, altura, cpf, saldo);
    this.codigo = codigo;
  }
} //* criar um extends faz com que a classe herde atributos e métodos de outra

// * criando/instanciando uma pessoa (objeto) a partir da classe Pessoa

const pessoa1 = new Pessoa("Alexandre", 21, 1.78, "123.456.789-00", 4000);
const pessoa2 = new Pessoa("Laura", 30, 2.1, "123.456.789-01", 4000);
const professor1 = new Professor("Katia", 45, 1.32, "122.222.222-00", 450, 11); //? obs: veja que apenas nesse possui um atributo a mais para receber um valor.
console.log(pessoa1);
console.log(pessoa2);
console.log(professor1);

//! o atributo cpf, pode ser não visualizado e nem alterado por esse metodo log(pessoa1.cpf), pois é privado
//! o atributo saldo pode ser apenas visualizado fora da classe , porem não pode receber uma atualização

console.log(pessoa1.saldo);

// pessoa1.saldo = 400000 //* impossivel alterar
console.log(pessoa1.cpf);

// pessoa1.cpf = "10"; //! acrescentando o set, é possivel alterar o valor

// console.log(pessoa1.cpf);
