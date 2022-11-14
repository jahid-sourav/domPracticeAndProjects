console.dir(document);
console.log(typeof (document));
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.head);
console.log(typeof(document.head));
console.dir(document.head);
document.title = 'DOM';
console.log(document.all);
for(let element of document.all){
    console.log(element);
}
console.log(document.all[5]);
console.log(document.images);
console.log(document.links);
console.log(document.forms);