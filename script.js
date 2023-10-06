let apiKey = "e4312694";

const elMovie = document.querySelector("#movie");
const elInput = document.querySelector("#input");
const elButton = document.querySelector("#button");
const elLoading = document.querySelector("#loading");

const loadingHidden = () => {
  elLoading.style.display = "none";
};

const loadingShow = () => {
  elLoading.style.display = "block";
};

function fetchMovie(searchQuery) {
  elMovie.innerHTML = "";

  const apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
  loadingShow();

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      loadingHidden();

      if (data.Search) {
        const movies = data.Search;

        movies.forEach((value) => {
          const card = document.createElement("div");
          const image = document.createElement("img");
          const title = document.createElement("h1");
          const year = document.createElement("p");

          card.classList.add("card");

          image.src = value.Poster;
          title.innerHTML = value.Title;
          year.innerHTML = `Chiqarilgan yili: ${value.Year}`;

          card.append(image);
          card.append(title);
          card.append(year);
          elMovie.append(card);
        });
      }
    });
}

elButton.addEventListener("click", () => {
  const searchQuery = input.value.trim();

  if (searchQuery !== "") {
    fetchMovie(searchQuery);
  }
});

elInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchQuery = input.value.trim();

    if (searchQuery !== "") {
      fetchMovie(searchQuery);
    }
  }
});

function showMovies() {
  const showFilm = "Harry Potter";

  fetchMovie(showFilm);
}

showMovies();
