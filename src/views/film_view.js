const PubSub = require('../helpers/pub_sub.js');
const FilmRender = require('./film_render.js')

const FilmView = function (container) {
  this.container = container;
}

FilmView.prototype.bindingEvents = function () {
  PubSub.subscribe('Film:film-ready', (evt) => {
    this.container.innerHTML = '';
    const films = evt.detail;
    // console.log('cosa:', films);
    this.render(films);
  })
};
// debugger
FilmView.prototype.render = function (films) {
  console.log('movies:',films);
  if (films.length === 1) {
    const filmRender = new FilmRender(this.container, films[0]);
    filmRender.render();
    // console.log('What is this?: ', films[0].people);
    filmRender.getCharacters();
  } else {
    films.forEach(film => {
      const filmRender = new FilmRender(this.container, film);
      filmRender.render();
      filmRender.addSpaceInBetween();
    })
  }
};

module.exports = FilmView;
