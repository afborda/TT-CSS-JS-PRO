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
      nota: "9.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Maria",
      idade: "20",
      sexo: "Feminino",
      curso: "Informática",
      turma: "A",
      nota: "9.2",
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

const itemNumber = (value) => {
  value.map((item) => {
    document.querySelector(".listItens").innerHTML += `
      <div class="itemList">
          <div class="div-principal">
            <p class="text">Nome:${item.nome}</p>
            <p class="text">Idade: ${item.idade}</p>
          </div>
          <div class="div-principal">
            <p class="text">curso: ${item.curso}</p>
            <p class="text">Nota: ${item.nota}</p>
          </div>
          <p class="text">Faltas: ${item.faltas}</p>
        </div>
      `;
  });
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const quantidadeAdicionada = numeroItens.value;

  console.log(quantidadeAdicionada);
  itemNumber(escola.alunos);
});
