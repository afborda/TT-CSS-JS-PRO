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

function google() {
  console.log("google");
}
function facebook() {
  console.log("facebook");
}

function typeValue(type) {
  switch (type) {
    case "google":
      google();
      break;
    case "facebook":
      facebook();
      break;

    default:
      console.log("Nao tem login!");
      break;
  }
}

typeValue("");
