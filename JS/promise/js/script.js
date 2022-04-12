const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Etapa 1");
  }, 4000);
})
  .then((response) => {
    console.log(response);
    return "etapa 2";
  })
  .then((response) => {
    console.log(response);
    return "etapa 3";
  })
  .then((response) => response + 4)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    alert("Erro: " + error);
  });
