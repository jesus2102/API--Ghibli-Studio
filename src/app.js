const Film = require('./models/film.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const films = new Film();
  films.bindingEvents();
});
