/////////////////////////////
// Lecture: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    joc: 'teacher'
};
//Las funciones de escriben con letras Mayuscula
//Person es un constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

};
//Realizando prototipo
Person.prototype.calculateAge =
    function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';
//Creando el objeto de John

var john = new Person('John', 1990,'Teacher');
var jane = new Person('Jane', 1969,'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/////////////////////////////
// Lecture: Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john =Object.create(personProto);
john.name ='John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane'},
        yearOfBirth: {value:1969},
        job: {value: 'designer'}
    });
*/

/////////////////////////////
// Lecture: Primitives vs objects
/*

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 ={
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions

var age = 27;
var obj ={
    name :'Jonas',
    city: 'Lisbon'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';

}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/////////////////////////////
// Lecture: Passing functions as arguments


var years = [1990, 1965, 1937,2005,1998];

function arryCalc(arr, fn){
    var arrRes = [];
    for(var i = 0,i < arr.length;
    i++ ){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


function () {
    
}
