// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());

//Person constructor

function Person(name, dob) {
  this.name = name;
  // this.age = age;

  this.birthday=new Date(dob);

  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    console.log(diff);
    const ageDate = new Date(diff);
    console.log(ageDate);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const brad = new Person('Brad', '9-10-1990');
const jack = new Person('Jack', '30');

// console.log(this);

console.log(brad);
console.log(brad.diff);
console.log(brad.ageDate);
console.log(brad.calculateAge());
// console.log(jack)
// console.log(jack)