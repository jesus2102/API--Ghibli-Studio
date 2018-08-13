const PubSub = require('../helpers/pub_sub.js');

const FilmRender = function (container, film) {
  this.container = container;
  this.film = film;
  this.characters = null;
}

FilmRender.prototype.render = function () {
  addTitle(this.film.title, this.container);
  addYear(this.film.release_date, this.container);
  addDirector(this.film.director, this.container);
  addDescription(this.film.description, this.container);

  // addSpaceInBetween(this.container);
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

function addDescription(description, container) {
  const descriptionText = document.createElement('p');
  descriptionText.textContent = description;
  container.appendChild(descriptionText);
}

FilmRender.prototype.addSpaceInBetween = function () {
  const line = document.createElement('hr');
  line.className = 'spacing';
  this.container.appendChild(line);
}

FilmRender.prototype.getCharacters = function () {
  console.log('number of people', this.film.people);
  if (this.film.people.length !== 1){
    PubSub.publish('Film:charactersList', this.film.people);
    PubSub.subscribe('Film:data-characters', (evt) => {
      console.log(evt.detail)
      this.characters = evt.detail
      printListOfCharacters(this.characters, this.container);
    });
    console.log('array of characters', this.characters);
  }
  else {
    noCharactersAvaliable(this.container);
  }
};

function noCharactersAvaliable(container) {
  const noCharacters = document.createElement('p');
  noCharacters.textContent = "No characters Avaliable.";
  container.appendChild(noCharacters);
};

function printListOfCharacters(characters, container) {
  const listCharacters = document.createElement('ul');
  console.log('checking characters:', characters);
  characters.forEach(function (character) {
    console.log('array of chars:', character);
    createCharacter(character, listCharacters);
  })
  container.appendChild(listCharacters);
}
function createCharacter(character, list) {
  // debugger
  const item = document.createElement('li');
  const name = character.name;
  const age = character.age;
  const gender = character.gender;
  console.log('name', character.name);

  item.textContent = `${name} (${gender}), ${age} years old.`;

  list.appendChild(item);
}


module.exports = FilmRender;
