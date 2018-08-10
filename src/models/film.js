const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Film = function () {
  this.film = null;
  this.index = null;
}

Film.prototype.bindingEvents = function () {
  this.getData();
  PubSub.subscribe('Menu:index-selected', (evt) => {
    const index = evt.detail;
    if (index === 'all'){
      PubSub.publish('Film:film-ready', this.film);
    }
    else {
    const filmSelected = [this.film[index]];
    PubSub.publish('Film:film-ready', filmSelected);
    }
  })
};

Film.prototype.getData = function () {
  const request = new Request('https://ghibliapi.herokuapp.com/films');
  request.get()
  .then((data) => {
    this.film = data;
    PubSub.publish('Film:all-film-ready', this.film);
    PubSub.publish('Film:film-ready', this.film);
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = Film;
