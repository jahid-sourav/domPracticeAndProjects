// console.log(document.getElementById('new-task'));
let headerElement = document.getElementById('header');
console.log(headerElement.innerHTML);
console.log(headerElement.innerText);
console.log(headerElement.textContent);
headerElement.style.color = 'red';
let itemUL = document.getElementById('items');
let items = itemUL.getElementsByClassName('item');
for(let i=0; i<items.length; i++){
    console.log(items[i]);
    items[i].style.color = 'red';
    items[i].style.fontWeight = 'bold';
}
items = document.getElementsByTagName('img');
console.log(items);
let mainHeader = document.querySelector('.header');
mainHeader.style.color = 'green';
let lastItem = document.querySelector('.item:last-child');
lastItem.style.color = 'green';
let lastItems = document.querySelectorAll('.item:last-child');
for(let element of lastItems){
    element.style.color = 'gray';
    element.style.fontWeight = 'bold';
}
let secondItem = document.querySelector('.item:nth-child(2)');
secondItem.innerText = 'Hello';