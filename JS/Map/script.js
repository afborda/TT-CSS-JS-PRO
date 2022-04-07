const carros = ["Ford", "Fiat", "Renault", "Chevrolet"];
const newCar = carros.map((carro) => {
  return "Carro: " + carro;
});

console.log(newCar);

const Arraynumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroX3 = Arraynumero.map((numero) => numero * 3);

console.log("numero >>", Arraynumero);
console.log("numeroX3 >>", numeroX3);

const aulas = [
  {
    nome: "HTML 1 ",
    min: 15
  },
  {
    nome: "HTML 2 ",
    min: 10
  }
];

const tempoAulas = aulas.map((aula) => aula.min);

console.log("tempoAulas >>", tempoAulas);
