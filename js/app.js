'use strict';

var questions = [
    'Was I born in Washington state?',
    'Do I have a college degree?',
    'Am I older than Miley Cyrus?',
    'Am I older than Justin Bieber?',
    'Do I believe that intelligent extraterrestrial life exists?'
];

var answers = [
    'I was born and raised in Northern California.',
    'I have a B.A. from the University of Washington in Accounting.',
    'I\'m a few months younger than Miley Cyrus.',
    'I\'m about a year older than Justin Bieber.',
    'I think aliens are out there, but I don\'t think we\'ll never meet them.\nSo does it matter?'
]

var correct = 'That is correct!\n';
var incorrect = 'That is incorrect.\n';

var responses = [];


// Question #1 - Was I born in Washington state? (No)
var cali = prompt(questions[0]).toUpperCase();
console.log('cali:', cali);

if (cali === 'N' || cali === 'NO') {
    alert(correct + answers[0]);
} else {
    alert(incorrect + answers[0]);
}

// Question #2 - Do I have a college degree? (Yes)
var college = prompt(questions[1]).toUpperCase();
console.log('college:', college);

if (college === 'Y' || college === 'YES') {
    alert(correct + answers [1]);
} else {
    alert(incorrect + answers[1]);
}

// Question #3 - Am I older than Miley Cyrus? (No)
var olderMiley = prompt('Am I older than Miley Cyrus?').toUpperCase();
console.log('olderMiley:', olderMiley);

if (olderMiley === 'N' || olderMiley === 'NO') {
    alert(correct + answers [2]);
} else {
    alert(incorrect + answers[2]);
}

// Question #4 - Am I older than Justin Bieber? (Yes)
var olderBieber = prompt('Am I older than Justin Bieber?').toUpperCase();
console.log('olderBieber:', olderBieber);

if (olderBieber === 'Y' || olderBieber === 'YES') {
    alert(correct + answers [3]);
} else {
    alert(incorrect + answers[3]);
}

// Question #5 - Do I think intelligent extraterrestrial life exists? (Yes)
var aliens = prompt('Do I believe that intelligent extraterrestrial life exists?').toUpperCase();
console.log('aliens:', aliens);

if (aliens === 'Y' || aliens === 'YES') {
    alert(correct + answers [4]);
} else {
    alert(incorrect + answers[4]);
}





// var kids = prompt('How many kids do you have?');
// console.log('kids:', kids);




// var guitars = prompt('How many guitars do you have?');
// console.log('guitars:', guitars);

// if (kids === '3' || kids === '4') {
//     alert('You are correct! Too many kids');
// }

// if (parseInt(kids) === 3 && parseInt(guitars) === 3) {
//     alert('yeah you are right');
// } else {
//     alert('you are wrong');
// }