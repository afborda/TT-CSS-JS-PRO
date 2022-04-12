const inputTask = document.querySelector("#todo");
const btnAdd = document.querySelector("#register");
const list_Task = document.querySelector(".list-tasks");

const addTask = (task) => {
  fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
    .then((response) => response.json())
    .then((data) => {
      clearHtml();
      listTask();
    })
    .catch((error) => {
      alert("Erro ao cadastrar a tarefa", error);
    });
};

const listTask = () => {
  fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks")
    .then((response) => response.json())
    .then((data) => {
      clearHtml();
      data.map((task) => {
        list_Task.innerHTML += `
        <div id="list-task-item">
          <div>
            <h1>${task.task}</h1>
            <p>${task.done ? "Feito" : "Pendente"}</p>
            
          </div>
          <div>
          <button  onclick="removeTask(${task.id})">
            <img src="./img/lixeira-de-reciclagem.png" alt="lixeira" />
            </button>
          </div>
        </div>
        `;
      });
    })
    .catch((error) => {
      alert("Erro ao cadastrar a tarefa", error);
    });
};

const clearHtml = () => {
  list_Task.innerHTML = "";
};

const removeTask = (id) => {
  fetch(`https://61d3bc23b4c10c001712ba53.mockapi.io/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((response) => {
      clearHtml();
      listTask();
    })
    .catch((error) => {
      alert("Não existe! ", error);
    });
};

listTask();

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const task = inputTask.value;
  const payload = {
    task: task,
    done: false,
    email: "abner.borda@gmail.com"
  };

  addTask(payload);
});
