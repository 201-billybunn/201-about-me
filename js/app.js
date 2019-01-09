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
    'I think aliens are out there, but I don\'t think we\'ll never meet them. Maybe we\'ll find their fossils!'
]

var correct = 'That is correct!\n';
var incorrect = 'That is incorrect.\n';
var score = 0;

var responses = []; // Array to contain correct/incorrect + answers

// Intro alert
var play = confirm('Would you like to test your knowledge of Billy, future JavaScript extraordinaire?\nClick "OK" to play or "Cancel" to quit.');
if (play === true) {
    alert('Let\'s see how well you know me!\nPlease answer the following ' + questions.length + ' questions by typing "yes" or "no" in the prompt boxes.\n"y" or "n" are also accepted answers.');

    // Question #1 - Was I born in Washington state? (No)
    var cali = prompt(questions[0]).toUpperCase();
    console.log('cali:', cali);

    if (cali === 'N' || cali === 'NO') {
        responses.push(correct + answers[0]);
        score ++;
    } else {
        responses.push(incorrect + answers[0]);
    }
    console.log('current score:', score);
    alert(responses[0]);

    // Question #2 - Do I have a college degree? (Yes)
    var college = prompt(questions[1]).toUpperCase();
    console.log('college:', college);

    if (college === 'Y' || college === 'YES') {
        responses.push(correct + answers[1]);
        score ++;
    } else {
        responses.push(incorrect + answers[1]);
    }
    console.log('current score:', score);
    alert(responses[1])

    // Question #3 - Am I older than Miley Cyrus? (No)
    var olderMiley = prompt(questions[2]).toUpperCase();
    console.log('olderMiley:', olderMiley);

    if (olderMiley === 'N' || olderMiley === 'NO') {
        responses.push(correct + answers[2]);
        score ++;
    } else {
        responses.push(incorrect + answers[2]);
    }
    console.log('current score:', score);
    alert(responses[2])

    // Question #4 - Am I older than Justin Bieber? (Yes)
    var olderBieber = prompt(questions[3]).toUpperCase();
    console.log('olderBieber:', olderBieber);

    if (olderBieber === 'Y' || olderBieber === 'YES') {
        responses.push(correct + answers[3]);
        score ++;
    } else {
        responses.push(incorrect + answers[3]);
    }
    console.log('current score:', score);
    alert(responses[3])

    // Question #5 - Do I think intelligent extraterrestrial life exists? (Yes)
    var aliens = prompt(questions[4]).toUpperCase();
    console.log('aliens:', aliens);

    if (aliens === 'Y' || aliens === 'YES') {
        responses.push(correct + answers[4]);
        score ++;
    } else {
        responses.push(incorrect + answers[4]);
    }
    console.log('current score:', score);
    alert(responses[4] + '\nYou got ' + score +' out of ' + questions.length + ' questions correct.');
} else {
    alert('No worries, maybe next time!');
}
