import HellofromJSON from '../../data/Hello.json';

module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = HellofromJSON.greetText;

    return element;
};
