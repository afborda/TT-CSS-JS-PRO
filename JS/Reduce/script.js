Reduce;

const numeroReduce = [110, 22, 48, 4, 96, 7, 8, 8, 303, 10];

const maiorValor = numeroReduce.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
});

console.log("maiorValor >>", maiorValor);
