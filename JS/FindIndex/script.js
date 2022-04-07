const frutas = ["Banana", "Maçã", "Maçã teste", "Uva", "Morango", "Abacaxi"];

const buscaFruta = frutas.findIndex((fruta) => {
  return fruta == "Maçã";
});

console.log(buscaFruta);

buscaFruta >= 0
  ? console.log("Fruta encontrada")
  : console.log("Fruta não encontrada");
