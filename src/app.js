const Film = require('./models/film.js');
const MenuView = require('./views/menu_view.js');
const FilmView = require('./views/film_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const container = document.querySelector('.film-container');
  const filmList = new FilmView(container);
  filmList.bindingEvents();

  const listMenu = document.querySelector('.menu');
  const menu = new MenuView(listMenu);
  menu.bindingEvents();

  const films = new Film();
  films.bindingEvents();
})
