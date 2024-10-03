let movieList = [];


function addMovie() {
  const movieInput = document.getElementById('movie-name');
  const movieTitle = movieInput.value.trim();

  if (movieTitle) {
    movieList.push(movieTitle);
    movieInput.value = ''; 
    displayMovies(); 
  }
}


function displayMovies() {
  const movieListElement = document.getElementById('movie-list');
  movieListElement.innerHTML = ''; 

  movieList.forEach((movie, index) => {
    const movieItem = document.createElement('li');
    movieItem.classList.add('collection-item');

    const movieTitle = document.createElement('span');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie;

    const removeBtn = document.createElement('span');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '<i class="material-icons">delete</i>';
    removeBtn.addEventListener('click', () => removeMovie(index));

    movieItem.appendChild(movieTitle);
    movieItem.appendChild(removeBtn);

    movieListElement.appendChild(movieItem);
  });
}

function removeMovie(index) {
  movieList.splice(index, 1); 
  displayMovies(); 
}

document.getElementById('add-movie-btn').addEventListener('click', addMovie);

document.getElementById('movie-name').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addMovie();
  }
});
