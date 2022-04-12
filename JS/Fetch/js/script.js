const pegaCep = document.querySelector("#busca-cep");
const botaoBuscaCep = document.querySelector("#btn-busca-cep");

botaoBuscaCep.addEventListener("click", (event) => {
  event.preventDefault();
  const cep = pegaCep.value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.erro) {
        alert("CEP não encontrado 200");
      } else {
        document.querySelector(".endereco").innerHTML += `
      <div>
        <h1> ${response.localidade}</h1>
        <h1> ${response.cep}</h1>
        <h1> ${response.bairro}</h1>
      </div>
      `;
      }
    })
    .catch((error) => {
      alert("CEP não encontrado 500 ");
    });
});

fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email: "abner.borda@gmail.com" })
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
