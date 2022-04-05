const button = document.querySelector("#button");
const numeroItens = document.querySelector("#number");

const escola = {
  alunos: [
    {
      nome: "João",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Paulo",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Carlos",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Maria",
      idade: "20",
      sexo: "Feminino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Joana",
      idade: "20",
      sexo: "Feminino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
};

const teste = ["banana", "maçã", "laranja"];

console.log(teste[1]);

const itemNumber = (value) => {
  for (let i = 0; i < value.length; i++) {
    console.log(i);
    document.querySelector(".listItens").innerHTML += `
      <div class="itemList">
          <div class="div-principal">
            <p class="text">Nome:${value[i].nome}</p>
            <p class="text">Idade: ${value[i].idade}</p>
          </div>
          <div class="div-principal">
            <p class="text">curso: ${value[i].curso}</p>
            <p class="text">Nota: ${value[i].nota}</p>
          </div>
          <p class="text">Faltas: ${value[i].faltas}</p>
        </div>
      `;
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const quantidadeAdicionada = numeroItens.value;

  console.log(quantidadeAdicionada);
  itemNumber(escola.alunos);
});
