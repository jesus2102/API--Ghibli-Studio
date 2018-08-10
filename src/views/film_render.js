const FilmRender = function (container, film) {
  this.container = container;
  this.film = film;
}

FilmRender.prototype.render = function () {
  addTitle(this.film.title, this.container);
  // addYear();
  // addDirector();
  // addDescription();
};

function addTitle(title, container) {
  const filmTitle = document.createElement('h2');
  filmTitle.textContent = title;
  container.appendChild(filmTitle);
}

module.exports = FilmRender;
