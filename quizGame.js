// question function constructor 

// var question = function (questions, answerOne, answerTwo, answerThree, correctAnswer) {
//     this.question = questions, // whats my name? 
//         this.answers = [
//             answerOne,
//             answerTwo,
//             answerThree
//         ], // list of answers 
//         this.correctAnswer = correctAnswer; // use a number to get the correct answer

// // all the custom question form the blueprint
// var questionOne = new question(
//     'whats my name?',
//     '0: john',
//     '1: mike',
//     '2: michelle',
//     0);
// var questionTwo = new question(
//     'wait a minute.. who are you?',
//     '0: Mitchell',
//     '1: Marquis',
//     '2: Lorenzo',
//     0);
// var questionThree = new question(
//     'How many kids do you have?',
//     '0: 40 kids',
//     '1: 2 kids',
//     '2: 10 kids',
//     1
// );

// // new array of questions
// var arrayOfQuestions = [questionOne, questionTwo, questionThree];

// console.log(
//     arrayOfQuestions[Math.floor(Math.random() * 3)].question,
//     arrayOfQuestions[Math.floor(Math.random() * 3)].answers
// );



// teacher's solution

// how to protect the code with a IIFE 


// (function () {
//     function Question(question, answers, correctAnswer) {
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }

//     // creating a method to display the questions and the answers 

//     Question.prototype.displayQuestion = function () {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ':' + this.answers[i]);
//         }
//     }

//     // another prototype 
//     Question.prototype.checkAnswer = function () {
//         if (userAnswer === this.correctAnswer) {
//             console.log('your right!');
//         } else {
//             console.log('not correct');
//         }

//         // creating questions 

//     }
//     var q1 = new Question(
//         'whats my name?',
//         ['john', 'mike', 'michelle'],
//         0);

//     var q2 = new Question(
//         'wait a minute.. who are you?',
//         ['Mitchell', 'Marquis', 'Lorenzo'],
//         0);

//     var q3 = new Question(
//         'How many kids do you have?',
//         ['40 kids', '2 kids', '10 kids'],
//         1);

//     // storing answers in a array 
//     var questions = [q1, q2, q3];

//     var n = Math.floor(Math.random() * questions.length);
//     // calling the prototype function
//     questions[n].displayQuestion();


//     // checking the answer
//     var userAnswer = parseInt(prompt('Please select the correct answer')); // getting the user answer 

//     questions[n].checkAnswer();
// })();

// expert level

(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    // creating a method to display the questions and the answers 

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i]);
        }
    }

    // another prototype 
    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correctAnswer) {
            console.log('your right!');
            score++;
            console.log('your score: ' + score);
        } else {
            console.log('not correct');
        }

        // creating questions 

    }
    var q1 = new Question(
        'whats my name?',
        ['john', 'mike', 'michelle'],
        0);

    var q2 = new Question(
        'wait a minute.. who are you?',
        ['Mitchell', 'Marquis', 'Lorenzo'],
        0);

    var q3 = new Question(
        'How many kids do you have?',
        ['40 kids', '2 kids', '10 kids'],
        1);


    var questions = [q1, q2, q3];
    var score = 0;

    function nextQuestion() {
        // storing answers in a array 

        var n = Math.floor(Math.random() * questions.length);
        // calling the prototype function
        questions[n].displayQuestion();


        // checking the answer
        var userAnswer = prompt('Please select the correct answer'); // getting the user answer 

        if (userAnswer !== 'exit') {
            questions[n].checkAnswer(parseInt(userAnswer));

            nextQuestion();
        }
    }
    nextQuestion();
})();