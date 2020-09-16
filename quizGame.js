// question function constructor 

var question = function (questions, answerOne, answerTwo, answerThree, correctAnswer) {
    this.question = questions, // whats my name? 
        this.answers = [
            answerOne,
            answerTwo,
            answerThree
        ], // list of answers 
        this.correctAnswer = correctAnswer; // use a number to get the correct answer
}
// all the custom question form the blueprint
var questionOne = new question(
    'whats my name?',
    '0: john',
    '1: mike',
    '2: michelle',
    0);
var questionTwo = new question(
    'wait a minute.. who are you?',
    '0: Mitchell',
    '1: Marquis',
    '2: Lorenzo',
    0);
var questionThree = new question(
    'How many kids do you have?',
    '0: 40 kids',
    '1: 2 kids',
    '2: 10 kids',
    1
);

// new array of questions
var arrayOfQuestions = [questionOne, questionTwo, questionThree];

console.log(
    arrayOfQuestions[Math.floor(Math.random() * 3)].question,
    arrayOfQuestions[Math.floor(Math.random() * 3)].answers
);