// constructor functions

function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    }
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
};

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}

// class User {
//     constructor(username, email){
//         // set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    // delete user;
};

const userOne = new User('Mario', 'mario@mail');
const userTwo = new User('Luigi', 'luigi@mail');
const userThree = new Admin('Shaun', 'shaun@mail', 'black-belt-ninja');

console.log(userOne, userTwo);

// the 'new' keyword
// 1 - it creates a new empty object{}
// 2 - it binds the calue of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object