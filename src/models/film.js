const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helpers.js');

const Film = function () {
  this.film = null;
}

Film.prototype.bindingEvents = function () {
  this.getData();
};

module.exports = Film;
