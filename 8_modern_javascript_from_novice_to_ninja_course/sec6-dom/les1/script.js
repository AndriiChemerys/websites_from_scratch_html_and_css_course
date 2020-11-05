// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(errors);

////////////////////////////////

// get an element by ID

// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Ninjas are awesome';

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
})

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})