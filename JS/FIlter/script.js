const buscaGeneroMasculino = escola.alunos.filter(
  (aluno) => aluno.sexo === "masculino"
);
const buscaGeneroFeminino = escola.alunos.filter((aluno) => aluno.nota >= "9");

console.log("buscaGeneroMasculino >>", buscaGeneroMasculino);
console.log("buscaGeneroFeminino >>", buscaGeneroFeminino);
