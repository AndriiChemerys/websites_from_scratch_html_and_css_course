const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = "that username is valid!";
    } else {
        // feedback help info
        feedback.textContent = "username must contain letters only & be between 6 & 12 characters long";
    }

    console.log(form.username.value);
});

// testing RegEx
// const username = 'shaun';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log('regex test passed');
// } else {
//     console.log('regex test failed');
// }

// let result = username.search(pattern);
// console.log(result); 

