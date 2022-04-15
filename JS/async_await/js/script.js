const list = document.querySelector(".list-movie");
const btnSearch = document.querySelector("#btn-search");
const nameMovie = document.querySelector("#name-movie");

const urlBase = "http://www.omdbapi.com/?apikey=fa70f7a7&";
const urlBase2 = "https://61d3bc23b4c10c001712ba53.mockapi.io/tasks/";

const getMovies = async (movie) => {
  clearHTML();
  const response = await fetch(`${urlBase}s=${movie}`);
  const data = await response.json();

  data.Search.map((item) => {
    list.innerHTML += `
          <div class="movie">
              <img src="${item.Poster}" alt="poster ${item.Title}" />
              <h1>${item.Title}</h1>
              <h2>${item.Year}</h2>
          </div>
          `;
  });

  console.log(data);
};

const clearHTML = () => {
  list.innerHTML = "";
};

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const movie = nameMovie.value;
  getMovies(movie);
});

getMovies();
