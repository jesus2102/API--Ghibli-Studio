const FilmRender = function (container, film) {
  this.container = container;
  this.film = film;
}

FilmRender.prototype.render = function () {
  addTitle(this.film.title, this.container);
  addYear(this.film.release_date, this.container);
  addDirector(this.film.director, this.container);
  // addDescription();
};

function addTitle(title, container) {
  const filmTitle = document.createElement('h2');
  filmTitle.textContent = title;
  container.appendChild(filmTitle);
}

function addYear(year, container) {
  const divYear = document.createElement('div');
  divYear.className = 'year';

  const filmYearText = document.createElement('h4');
  filmYearText.textContent = "Year: ";

  const filmYear = document.createElement('h3');
  filmYear.textContent = year;

  divYear.appendChild(filmYearText);
  divYear.appendChild(filmYear);
  container.appendChild(divYear);
}

function addDirector(director, container) {
  const divDirector = document.createElement('div');
  divDirector.className = 'director';

  const directorText = document.createElement('h4');
  directorText.textContent = "Director: ";

  const filmDirector = document.createElement('h3');
  filmDirector.textContent = director;

  divDirector.appendChild(directorText);
  divDirector.appendChild(filmDirector);
  container.appendChild(divDirector);
}
module.exports = FilmRender;
