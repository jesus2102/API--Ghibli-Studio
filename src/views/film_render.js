const FilmRender = function (container, film) {
  this.container = container;
  this.film = film;
}

FilmRender.prototype.render = function () {
  addTitle(this.film.title, this.container);
  addYear(this.film.release_date, this.container);
  // addDirector();
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
module.exports = FilmRender;
