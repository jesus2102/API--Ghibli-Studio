const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Film = function () {
  this.film = null;
}

Film.prototype.bindingEvents = function () {
  this.getData();
};

Film.prototype.getData = function () {
  const request = new Request('https://ghibliapi.herokuapp.com/films');
  request.get()
  .then((data) => {
    this.film = data;
    PubSub.pubish('Film:all-film-ready', this.film);
  })
  .catch((err) => {
    console.error(err);
  });
};

module.exports = Film;
