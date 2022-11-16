/****************************************************************************************************/
// Parent Child Relation 
// const grandParent = document.querySelector('.todo-list');
// // const parent = grandParent.children;
// // const children = parent[1].children;
// const children = grandParent.querySelectorAll('.item');
// console.log(children);
/****************************************************************************************************/

/****************************************************************************************************/
const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);
const grandParent =  children.closest('.todo-list');
console.log(grandParent);
/****************************************************************************************************/

/****************************************************************************************************/
// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = 'red';

const childrenTwo = document.querySelector('.item').nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;
childrenOne.style.color = 'red';
/****************************************************************************************************/