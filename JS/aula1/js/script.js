// var name;
// var age;
// var possuiFaculdade;
// var comida;
// var time;
// var novoObjeto;

// console.log(name);
// name = 30;
// possuiFaculdade = true;

// console.log(name);

// console.log(typeof possuiFaculdade);
// console.log(typeof possuiFaculdade);

// var nome = "abner";
// var sobreNome = "Fonseca";

// var nomeCompleto = nome + " " + sobreNome;

// console.log(">>>", nomeCompleto);

// var jogos = 30;

// var totalDeJogos = "eu joguei mais de " + jogos + " jogos";

// console.log(totalDeJogos);

// const template = `Eu joguei mais de ${jogos} jogos`;

// console.log(typeof template);

// console.log(">>>", template);

// var nome = "Abner";
// numero = 14;

// if (numero >= 18) {
//   console.log("verdadeiro");
// } else if (nome == "Abner") {
//   console.log("verdadeiro if else");
// } else if (numero == 14) {
//   console.log("verdadeiro if else");
// } else {
//   console.log("Deu tudo errado ");
// }

// var tipo = "google";

// switch (tipo) {
//   case "facebook":
//     console.log("facebook");
//     break;
//   case "google":
//     console.log("google");
//     break;
//   case "email":
//     console.log("email");
//     break;
//   default:
//     console.log("nenhum");
//     break;
// }

// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 === "10");
// console.log(10 !== "10");
// console.log(10 != "10");

// function calculaValor(lado) {
//   return lado * lado;
// }

// console.log(">>>", calculaValor(10));

// function google() {
//   console.log("google");
// }
// function facebook() {
//   console.log("facebook");
// }

// function typeValue(type) {
//   switch (type) {
//     case "google":
//       google();
//       break;
//     case "facebook":
//       facebook();
//       break;
//     default:
//       console.log("Nao tem login!");
//       break;
//   }
// }

// typeValue("google");

// var data = {
//   aluno: {
//     nome: "Abner",
//     sobreNome: "Fonseca",
//     idade: 27,
//     faculdade: true,
//     comida: "pizza",
//     time: "Gremio",
//     nomeCompleto: function () {
//       return this.nome + " " + this.sobreNome;
//     }
//   }
// };

// var data = {
//   alunos: [
//     {
//       nome: "Abner",
//       sobreNome: "Fonseca",
//       idade: 27,
//       faculdade: true,
//       comida: "pizza",
//       time: "Gremio"
//     },

//     {
//       nome: "Fernando",
//       sobreNome: "Martins",
//       idade: 56,
//       faculdade: true,
//       comida: "pizza",
//       time: "Sao Paulo"
//     }
//   ]
// };

// console.log(data.alunos[1].nome);
// console.log(data.alunos[0].nome);

// var fruta = ["maça", "banana", "pera"];
// console.log(fruta[2]);
// console.log(fruta[0]);
// console.log(fruta.pop());
// console.log(fruta);
// fruta.push("uva");
// fruta.push("laranja");
// console.log(fruta);
// console.log(fruta.length);

// for (var i = 0; i < fruta.length; i++) {
//   const element = fruta[i];
//   console.log(">> ", element);
// }

// var fruta = ["maça", "banana", "pera"];

// var i = 0;

// while (i < fruta.length) {
//   console.log(fruta[i]);
//   i++;
// }

// do {
//   console.log("entrou no do");
//   i++;
// } while (i < fruta.length);

// var fruta = ["maça", "banana", "pera"];

// var data = {
//   alunos: [
//     {
//       nome: "Abner",
//       sobreNome: "Fonseca",
//       idade: 27,
//       faculdade: true,
//       comida: "pizza",
//       time: "Gremio"
//     },

//     {
//       nome: "Fernando",
//       sobreNome: "Martins",
//       idade: 56,
//       faculdade: true,
//       comida: "pizza",
//       time: "Sao Paulo"
//     }
//   ]
// };

// console.log(fruta);

// data.alunos.forEach(function (item, index) {
//   console.log(`Meu nome é ${item.nome} e tenho ${item.idade} anos`);
// });

//console.log(window);

//alert("Olá mundo");

// const titulo = document.getElementById("title");
// const subtitulo = document.getElementsByClassName("subtitle");

// const tag = document.getElementsByTagName("h2");
// const variosItens = document.querySelectorAll(".subtitle, .teste2");
// const teste = document.getElementsByClassName("subtitle");
// const teste2 = document.getElementsByClassName("subtitle teste");

// console.log(titulo);
// console.log(subtitulo);
// console.log(variosItens);
// console.log(tag);
// console.log(">>>", teste2);
// console.log(">>>", teste);

// var titulo = document.querySelector("#title");
// var subtitle = document.querySelectorAll(".subtitle");
// var classH2 = document.querySelector(".select");
// var tag = document.querySelector("button");

// titulo.innerHTML = "Primeiro";

// subtitle[1].innerHTML = "3";

// console.log(tag);
// console.log(classH2);
// console.log(subtitle);
// console.log(">>", titulo);

// var titulo = document.querySelector("#title");

// console.log(titulo.className);
// console.log(titulo.classList);
// titulo.classList.add("ativo");
// titulo.classList.add("ativo", "ativo2");
// titulo.classList.remove("ativo");
// titulo.classList.toggle("ativo");
// console.log(titulo.classList.contains("ativo"));
// titulo.classList.replace("ativo", "ativo2");

// var titulo = document.querySelector("#title");
// var botao = document.querySelector("button");

// function callback() {
//   titulo.innerHTML = "Clicou no ";
//   botao.classList.toggle("botaoAtivo");
// }

// titulo.addEventListener("click", callback);

// botao.addEventListener("click", function () {
//   botao.innerHTML = "Clicou no botao";
//   botao.classList.add("botaoClick");
// });

// var main = document.querySelector(".main");
// var botao = document.createElement("button");

// console.log(window);

// botao.innerText = "Adicionar";
// botao.classList.add("botaoClick");
// main.appendChild(botao);

// function mostraCarro() {
//   var carro = "fiat";
//   console.log(carro);
//   return carro;
// }

// mostraCarro();
// console.log(mostraCarro());

// const botao = document.createElement("button");
// if (true) {
//   const carro = "fiat";

//   carro = 3;
//   console.log(carro);
// }

// console.log(carro);

// function ola(type) {
//   console.log("Olá1", type);
// }
// ola( "Olá2" );

// const ola2 = type => {
//   console.log("Olá2");
// };

// ola2("Olá2");

// const ola3 = type => console.log("Olá3");

// ola3("Olá2");

const area = (largura, altura) => console.log(largura * altura);

area(2, 3);
