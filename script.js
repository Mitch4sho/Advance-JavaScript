//Function constructor 
// /*
// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }

// var john = new Person('John', 1990, 'teacher');

// john.calculateAge();


// Object.create method 

// var personProto = {
//     calculateAge: function () {
//         console.log.apply(2020 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';


// var jane = Object.create(personProto, {
//     name: {
//         value: 'Jane'
//     },
//     yearOfBirth: {
//         value: 1969
//     },
//     job: {
//         value: 'designer'
//     }
// });

//Primitives vs Objects 


// Primitives 
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);


//  Objects 
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 28;

// var obj = {
//     name: "Mitchell",
//     city: "Riverside"
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'Las Vegas';
// }

// change(age, obj);


// console.log(age);
// console.log(obj.city);

//  Lecture: Passing functions as arguments 

//  array of years 
// var years = [1991, 1992, 2010, 2018, 1908];

// // this function will calculate that age of everyone from each index in the years array
// // the arguments that will be pass through are a Array(object), and a function(object)
// // where we can reference multiple times 

// function arrayCalc(arr, fn) {
//     var arrRes = []; // the results , the ages will be pushed to this array

//     for (var i = 0; i < arr.length; i++) { // this for loop is for any array that is passed in
//         arrRes.push(fn(arr[i])); // the push method will add the value at the end of the arrRes 
//         // and run a function that will get the results , which needs the value from 
//         // the for loop which in this example is the year   
//     }
//     return arrRes;
// }
// // this is the function that is being passed through the function arrayCalc to 
// // calculate the age and be pushed to the new array arrRes
// function calculateAge(year) {
//     return 2020 - year;
// }

// // another call back function 
// // this one will calculate if the person is of legal age 
// function isFullAge(year) {
//     return year >= 18;
// }

// function maxHeartRate(year) {
//     if (year >= 18 && year <= 81) {
//         return Math.round(206.9 - (0.67 * year));
//     } else {
//         return -1;
//     }
// }


// // the variable is now has a copy of the return result of the function that is ran
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you please explain what UX design is')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('what subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// }


// //this is ;one variable that ask a question and is a function now 
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// // a function will be called now with the anonymous function is now the teacherQuestion();
// teacherQuestion('John')
// designerQuestion("Pam")


// // another way to call a function within a function 
// interviewQuestion('teacher')('Mark');


// IIFE (immediate invoke Function expression )

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // passing arguments 
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);

// })(4);


// Closures 

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);


// Shorthand way of calling a function
retirement(66)(1990);