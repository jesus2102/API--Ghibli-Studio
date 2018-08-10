const PubSub = require('../helpers/pub_sub.js');

const MenuView = function (menu) {
  this.menu = menu;
}

MenuView.prototype.bindingEvents = function () {
  PubSub.subscribe('Film:all-film-ready', (evt) => {
    const movies = evt.detail;
    console.dir(movies);
    this.createMenu(movies);
  })

  this.menu.addEventListener('click', (evt) => {
    const selectedFilm = evt.target.id;
  })
};

MenuView.prototype.createMenu = function (movies) {
  const list = document.createElement('ul');
  movies.forEach((movie, index) => {
    const name = document.createElement('li')
    name.textContent = movie.title;
    name.id = index;
    list.appendChild(name);
  })
  this.menu.appendChild(list);
};

module.exports = MenuView;
