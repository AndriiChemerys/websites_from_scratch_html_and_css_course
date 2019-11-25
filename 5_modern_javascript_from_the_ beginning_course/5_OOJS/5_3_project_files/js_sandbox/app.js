// //Object.prototype
// //Person.prototype

// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff =  Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // Calculate age
// Person.prototype.calculateAge = function(){
//   const diff =  Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMaried = function(newLastName){
//   this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMaried('Smith');

// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// PROTOTYPE by Web Samuraj

// const Person = function(name, age){
//   this.name = name;
//   this.age = age;
//   this.children = [];
//   // this.addChildren = function(name){
//   //   this.children.push(name);
//   // }
// }

// Person.prototype.addChildren = function(name){
//     this.children.push(name);
//   }

// Person.prototype.gender = 'female';

// const arek = new Person('arek', 20);
// const monika = new Person('monika', 30);

// arek.addChildren('asia');

// function Player(){

// }

// Player.prototype.age = 25;
// const janek = new Player;

///////////////////////////////
// Adding elements to prototype
///////////////////////////////

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
  // this.changeCitizenship = function(citizenship){
  //   this.citizenship = citizenship;
  //   console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
  // }
}

Citizen.prototype.changeCitizenship = this.changeCitizenship = function(citizenship){
  this.citizenship = citizenship;
  console.log(`Zmiana za pomocą metody w prototypie na obywatelstwo ${this.citizenship}`)
}

const zenek = new Citizen('Polska', 'polskie');
const Andrii = new Citizen('Ukraine', 'ukrainian');
