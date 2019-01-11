'use strict';

var questions = [
    'Was I born in Washington state?',
    'Do I have a college degree?',
    'Am I older than Miley Cyrus?',
    'Am I older than Justin Bieber?',
    'Do I believe that intelligent extraterrestrial life exists?',
    'How old am I?',
    'I\'ve done a bit of traveling!\nCan you guess a country I\'ve visited?'
]

var answers = [
    'I was born and raised in Northern California.',
    'I have a B.A. from the University of Washington in Accounting.',
    'I\'m a few months younger than Miley Cyrus.',
    'I\'m about a year older than Justin Bieber.',
    'I think aliens are out there, but I don\'t think we\'ll ever meet them. Maybe we\'ll find their fossils!',
    age
    // See array below for question 7 answers. Note to move here in update
]

var age = 25; // My current age

var responses = []; // Array to contain a string of 'correct/incorrect + answers'

// function runGame() { //Runs when button is clicked
    var play = confirm('Would you like to test your knowledge of Billy, future JavaScript extraordinaire?\nClick "OK" to play or "Cancel" to quit.');
    if (play === true) {

        console.log('play:',play);


        // Intro and instructions
        var user = prompt('Great! First off, what\'s your name?') || 'stranger';
        var correct = `That is correct! Well done, ${user}.\n`;
        var incorrect = 'That is incorrect.\n';
        var score = 0;
        alert(`Ok, ${user}. Let's see how well you know me!\nPlease answer the following ${questions.length} questions by typing "yes" or "no" in the prompt boxes.\n"y" or "n" are also accepted answers.`);

        // Question #1 - Was I born in Washington state? (No)
        function questionOne() {
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


        }
          // Question #2 - Do I have a college degree? (Yes)
          function questionTwo() {
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

          }
        

        // Question #3 - Am I older than Miley Cyrus? (No)
        function questionThree() {
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
        }
        

        // Question #4 - Am I older than Justin Bieber? (Yes)
        function questionFour() {
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

        }
        

        // Question #5 - Do I think intelligent extraterrestrial life exists? (Yes)
        function questionFive() {
            var aliens = prompt(questions[4]).toUpperCase();
            console.log('aliens:', aliens);
    
            if (aliens === 'Y' || aliens === 'YES') {
                responses.push(correct + answers[4]);
                score ++;
            } else {
                responses.push(incorrect + answers[4]);
            }
            alert(responses[4]);

        }
        
        // Question 6: How old am I? (with hints and 4 tries) 
        function questionSix() {
            var ageGuesses = 4;
            while (ageGuesses > 0 && guess !== age) {
                var guess = parseFloat(prompt(`${questions[5]}\nYou have ${ageGuesses} guess(es) left.`));
                ageGuesses--;
    
                if (guess === age) {
                    alert(`That\'s right!\nI\'m ${age} years old.\nYou did it with ${ageGuesses} guess(es) left.`);
                    score++;
                } else if (guess > age) {
                    alert(`Too high!\nYou have ${ageGuesses} guess(es) left.`);
                }
                else if (guess < age) {
                    alert(`Too low!\nYou have ${ageGuesses} guess(es) left.`);
                } else {
                    alert(`That input isn\'t accepted.\nEnter your guess as a number.\nYou have ${ageGuesses} guess(es) left.`);
                }
    
                if (ageGuesses === 0 && guess !== age) {
                    alert(`You didn't guess it, but I\'ll tell you anyway. I'm ${age} years old.`);
                }
    
                console.log('age guess:', guess, 'remaining ageGuesses:', ageGuesses);
            }
            console.log('current score:', score);
        }       
        
        // Question 7: Can you name a country I've travelled to? (multiple answers)
        function questionSeven() {
            var countries = [
                'canada',
                'italy',
                'israel',
                'jordan',
                'england',
                'scotland',
                'haiti'
            ]
            var countriesStr = countries.join(', '); // joins countries into a string with commas and spaces
    
            var countryGuesses = 6;
            while (countryGuesses > 0) {
                console.log('remaining guesses:',countryGuesses);
                var guess = prompt(questions[6]).toLowerCase() || 'that';
                for (var i = 0; i < countries.length; i++) {
                    if (guess === countries[i]) {
                        console.log(guess, 'IS', countries[i]);
                        guess = guess.charAt(0).toUpperCase() + guess.slice(1); //Capitalizes guessed country. Credit: https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
                        alert(`${guess} IS a country I've been to!\nYou guessed it with ${countryGuesses - 1} tries left.\nHere's where I've been:\n${countriesStr}.`);
                        score++;
                        countryGuesses = 0;
                        break;
                    } 
                }
    
                if (countryGuesses > 0) {
                    console.log(guess, 'IS NOT', countries[i]);
                    guess = guess.charAt(0).toUpperCase() + guess.slice(1); //Capitalizes guessed country
                    alert(`${guess} is NOT a country I\'ve been to. Try again!\nYou have ${countryGuesses - 1} guesses left for this question.`);    
                }
                countryGuesses--;
    
                if (countryGuesses === 0) {
                    alert(`You're out of guesses!\nFor the record, here's where I've been:\n${countriesStr}.`)
                }
            
                console.log('guesses left:', countryGuesses);
            }
    
    
            alert(`You got ${score} out of ${questions.length} questions correct.\nThanks for playing, ${user}!`);
         







        }
           
        //Shows questions after game is played 
        // function showQuestions() {
        //     document.getElementById("questions").style.display = "block";
        //     document.getElementById("questions-area").style.display = "block";
        // }
       showQuestions();

    } else {
        console.log('play:',play);
        alert('No worries, maybe next time!');
    }

// }