/************************************************************************************************/
// Creating An Element =>
// let divElement = document.createElement('div');
// divElement.className = 'red-div';
// divElement.setAttribute('id', 'red');
// divElement.setAttribute('title', 'Red Div');
// const container = document.querySelector('.todo-list');
// const headingTwo = container.querySelector('h2');
// container.insertBefore(divElement, headingTwo);
/************************************************************************************************/

/************************************************************************************************/
let divElement = document.createElement('div');
divElement.className = 'red-div';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');
const container = document.querySelector('.todo-list');
// container.appendChild(divElement);
// container.append('Hey');
container.append(divElement);
/************************************************************************************************/