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

age= 22;

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