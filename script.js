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

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
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

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1991);
// retirementIceland(1991);
// retirementUS(1991);

// // // Shorthand way of calling a function
// // retirement(66)(1991);


// // Exercise on Closures 

// function interviewQuestions(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is');

//         } else if (job === 'teacher') {
//             console.log('what subject do you teach, ' + name + '?')

//         } else {
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// }

// interviewQuestions('designer')('Sue');


// Bind, Call and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' +
                this.name + ' ,I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.')
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old. have a nice a ' + timeOfDay + '.')
        }
    }
}

// another Object 
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//Bind Method 
var johnFriendly =
    john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal =
    john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    var year = new Date().getFullYear();
    return year - el;
}

function isFullAge(ageLimit, el) {

    if (el >= ageLimit) {
        return 'yes'
    } else {
        return 'no'
    }
}

// what if we wanted to certain functions above for different countries 
// example: 


//converting into the age of the person
var ages = arrayCalc(years, calculateAge);

// now we are taking the age and seeing if the person is of full age in a certain country
var fullAgeJapan = arrayCalc(ages,
    // using the isFullage function from above to set as the default calculation for japan  
    isFullAge.bind(this, 20));

console.log(ages);
console.log(fullAgeJapan);