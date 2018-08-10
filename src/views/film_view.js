const PubSub = require('../helpers/pub_sub.js');
const FilmRender = require('./film_render.js')

const FilmView = function (container) {
  this.container = container;
}

FilmView.prototype.bindingEvents = function () {
  PubSub.subscribe('Film:film-ready', (evt) => {
    this.container.innerHTML = '';
    const films = evt.detail;
    this.render(films);
  })
};

FilmView.prototype.render = function (films) {
  films.forEach((film) => {
    const filmView = new Film(this.container, film);
    filmView.render()
  })
};

module.exports = FilmView;
