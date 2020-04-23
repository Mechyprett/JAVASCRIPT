/********************************
 *Variables and data types
 */
/*
console.log('hello wrold');

var fistName = 'Jhon';
console.log(fistName);

var lastName = 'Smith';
var age =28;

var fullAge = true;//boolean
console.log(fullAge);

var job;//variable undefined
console.log(job);

job ='Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = 'Jhon and MArk';
*/

/********************************
 *Variables mutation and type coercion
 */
/*
var fistName = "John";
var age = 28;

console.log(fistName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  fistName +
    " is a " +
    age +
    " year old " +
    job +
    ". is he married? " +
    isMarried
);

//Variable mutation
age = "twenty eight";
job = "driver";

alert(
  fistName +
    " is a " +
    age +
    " year old " +
    job +
    ". is he married? " +
    isMarried
);

var lastName = prompt("What is hes last Name?");
console.log(fistName + " " + lastName);
*/

/****************************
 * Basic operators
 */
/*
var year , yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//Math operators
yearMark = now - ageMark;
yearJohn = now - ageJohn;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Typefo operator
console.log(typeof johnOlder);//typeof me dice el tipo de operador que es una variable.
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/************************************/
//OPERATOR PRECEDENCE
/************************************/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);


//Grouping
var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) /2;
 console.log(average);

//Multiple assignmets
var x, y;
x= y =(3 +5) * 4 - 6;// 8 * 4 - 6 // 32 -6 // 26

console.log(x,y);

*/
//More operators
/*
//x = x *2;
x *=2; //Es igual a numero de arriba
console.log(x);

x+= 10;
console.log(x);
//x = x += 1;
//x +=1;
/*
x++;
console.log(x);
*/
/*
x--;
console.log(x);
/************************************************************8
 CODING CHANLLENGE 1
 */
/*
Mark and John are trying to compare their BMI (body mass Index),
which is calculated using thr formula
BMI = mass / height ^2 = mass / (height * height).
(mass in kg and height in meter).


1. Store Mark's and John's mass and height in variables.
2. Calculate both their  BMIs.
3.Create a boolean variable container information
about whether Mark has a higher BMI than John.
4.Print a string to the console contraining the variable
from step 3. (Something like "Is Mark's BMI higher than john's true").



 */
//SOLUTION
/*

var massMark = 78; //kg
var heightMark= 1.69; //meter

var massJohn = 92; //kg
var heightJohn = 1.95; //meter

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s' + markHigherBMI);

*/

//*********************
/****
 * IF / ELSE STATEMENT
 /***

 var firstName ='John';
 var civilStatus = 'single';

 if (civilStatus === 'married'){
    console.log(firstName + ' is married!' );
} else
 {
    console.log(firstName + ' will hopefully married soon:) ');
}

 var isMarried = true;
 if (isMarried === true){
    console.log(firstName + ' is married!' );
} else
 {
    console.log(firstName + ' will hopefully married soon:) ');
}
 ***/
/*************************/
/*
var massMark = 78; //kg
var heightMark= 1.69; //meter

var massJohn = 92; //kg
var heightJohn = 1.95 //meter

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\' BMI is higher than John\'s.');
}else {
    console.log(' John\' BMI is higher than Mark\'s.');
}

//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s' + markHigherBMI);
*/

/***************************************************/
//  BOOLEAN LOGIC
/*************************************************/
/*

var firstName ='John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy');
}else if(age >= 13 && age < 20){ //between 13 and 20 === age >= 13 AND age < 20

    console.log(firstName + ' is a teenager');
} else if(age > 20 && age < 30 ){
    console.log(firstName + ' is a young man');
}
else {
    console.log(firstName + ' is a man');
}
*/
/**************************************************
 * THE TERNARY OPERATOR AND SWITCH STATEMENT
 */
/*
var firstName ='John';
var age = 16;

//Ternary operator
age >= 18 ? console.log(firstName +' drink beer. ')
    :console.log(firstName +' drinks juice. ');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*
if (age >= 18){
   var drink = 'beer';
} else {
    var drink = 'juice';
}

 */

//Switch  Statement
/*
var job = 'cop';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon.');
        break;
    case 'desing':
        console.log(' desings beutiful websites');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

age= 22 ;

switch (true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;

    case age >= 13 && age <20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age <30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a  man');


}
*/
/*********************************************************************
 *Truthy and Falsy values and equality operatorss
 */

//falsy values: undefined, null. 0, '', Nan
// truthy values: NOT falsy values
/*
var height;
 height = 23;

if (height || height === 0){
    console.log('Variable is defined');

} else {
    console.log('Variable has NOT been defined');
}

//Equality operators
if (height === '23'){
    console.log('The == operator does type coercion!');
}
*/

/**********************************************************************
 * CODING CHALLENGE 2
 */


/*Jhon nd Mike both play basketball in different
teams. In the latest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1.Calculate the average scored for each team
2.Decide which teams wins in average(heghest
average score), and print the winner to the console.
Also include the average score in the output.

3.Then change the scores to show diferent winners.
Don't forget to take into account there might be a
draw (the same average score)

4.Extra:Mary also plays bascketball, her team
scored 97, 134 and 105 ponints.Like before, log the
average winner to the console. HINT: you will need
the && operator to take the desition. If you can't
solve this one, just watch the solution, it's no
problem :)

5.Like before, change the scores to generate
different winners, keeping in mind there might be draws
 */
/*
var scoreJohn = (89 +120 + 103)/3;
var scoreMike = (116 + 94 + 123)/3;
var scoreMery = (97 + 134 + 105)/3;
console.log(scoreJohn,scoreMike,scoreMery);

if (scoreJohn > scoreMike && scoreJohn > scoreMery){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMery){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
}else if (scoreMery > scoreJohn && scoreMery > scoreMike){
    console.log('Mery\'s team wins with ' + scoreMery+ ' points');
}else {
    console.log('There is a draw');
}
*/
/*if(scoreJohn > scoreMike){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
}else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is as draw');
}
*/



/******************************************
 *Functions
 */
/*
 function calculateAge(birthYear){
     return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){

    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired. ' );
    }

}

yearsUntilRetirement(1990, 'Jhon');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');/

*/

/**
 Function Statement and Expresions
 */

//Function declaration
//   function whatDoYouDo(job, firstName){}

//Function Expression
/*
var whatDoYouDo = function (job, firstName) {
switch (job) {
case 'teacher':
    return firstName + ' teaches kids how to code';
case 'driver':
    return firstName + ' drives a cab in Lisbon';
case 'designer':
    return firstName + ' designs beutiful websites';
    default:
        return firstName + ' does something else';
}

};
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
*/


/*********************************************8
 * ARRAYS*
 * */

//Initialize new array
/*
var names = ['Jhon', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);


console.log(names[2]);
console.log(names.length);

//Mutate Array data
names[1]= 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data Types
var john =['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer')=== -1 ? 'John is NOT a designer' : 'Jhon IS a designer';
console.log(isDesigner);
*/

/*
*************************************************
 Challenge function
 *********************************************/
/*
function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill <200){
        percentage = .15;
    }else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills= [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/

/***************************************
 OBJECTS AND PROPERTIES
 */


//OBJECT LITERAL
/*
var john ={
firstName: 'John',
lastName:'Smith',
birthYear: 1990,
family: ['Jane', 'Mark', 'Bob', 'Emily'],
job: 'teacher',
isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith';
console.log(jane);

*/



/******************************************************
 *OBJECTS AND METHODS
 */
/*

var john ={
    firstName: 'John',
    lastName:'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;

    }
};
//console.log(john.calcAge(1990));
//john.age = john.calcAge();
john.calcAge();
console.log(john);


*/

/*****************8
 CODING CHALLENGE 4
 */
/*
Let's remember the first coding challenge where Mark
and John compared their BMIs.Let's now implement
the same functionality with objects and methods.

1.For each of them, create an object with
properties for their full name, mass, and height

2. Then, add a method to each object to calculate
the BMI.Save the BMI to the object and also return
it from the method.

3.In the end, log to the console who has the
highest BMI, together with the full name and the
respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height ^2 == mass /(height * height).
(mass in kg and height in meter).
 */
/*
var john ={
    fullName:'John smith',
    mass:110,
    height:1.95,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

var mark = {
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBmi();
mark.calcBmi();
//console.log(john,mark);


if(john.calcBmi() > mark.calcBmi()){
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);

}else if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}else {
    console.log(' They have the same BMI');
}

*/

/************************************
 LOOPS AND INTERATION
 */

//for loop
/*
for ( var i =0; i <10; i++){
    console.log(i);

}

//i = 0, 0< 10 true, log i to console, i++
//i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 <10 true, log i to the console, i++
// i = 10, 10< 10 FALSE, exit the loop!

for (var i= 1; i <= 20; i+= 2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i <john.length; i++){
    console.log(john[i]);
}

//while loop

var i= 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

// continue and break statements
/*

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i <john.length; i++){
    if (typeof  john[i] !== 'string') continue;
    console.log(john[i]);
}


var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i <john.length; i++){
    if (typeof  john[i] !== 'string') break;
    console.log(john[i]);
}

//loop backwards
for ( var i = john.length -1; i >=0; i--){
    console.log(john[i]);
}
*/

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
