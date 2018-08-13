const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Character = function () {
  this.characters = [];
}

Character.prototype.bindingEvents = function () {
  PubSub.subscribe('Film:charactersList', (evt) => {
    const listOfPeople = evt.detail;
    // console.log('what is this?; ',evt.detail);
    // // list.forEach(film => {
    // let requests = listOfPeople.map(url => fetch(url));
    //
    // Promise.all(requests)
    // .then(responses => responses.forEach(response =>
    //   alert(`${response.url}: ${response.status}`)
    //   this.getData(`${response.url}`);
    // ))
    // //

    Promise.all(listOfPeople.map(url => {
      const request = new Request(url);
      return request.get();
    }))
    .then((characters) => {
      this.characters = characters;
      PubSub.publish('Film:data-characters', this.characters);
    })
    .catch((err) => {
      console.error(err)
    })


  })
};

Character.prototype.getData = function (url) {
  const request = new Request(url);
  request.get()
  .then((data) => {
    // console.log('data of characters?: ', data);
    return data;
    // PubSub.publish('Film:data-characters', data);
    // console.log("que hay en array characters?: ", this.characters);
  })
  .catch((err) => {
    console.error(err);
  });


};

module.exports = Character;
