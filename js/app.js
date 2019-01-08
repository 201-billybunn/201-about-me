'use strict';

var kids = prompt('How many kids do you have?');
console.log('kids:', kids);

var guitars = prompt('How many guitars do you have?');
console.log('guitars:', guitars);

if (kids === '3' || kids === '4') {
    alert('You are correct! Too many kids');
}

if (parseInt(kids) === 3 && parseInt(guitars) === 3) {
    alert('yeah you are right');
} else {
    alert('you are wrong');
}