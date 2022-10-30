// //console.log(document);
// //examine the document object
// console.log(document.domain);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent="hello"
// console.log(document.forms);
// console.log(document.links);
var headerTitle =document.getElementById('header-title');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>'
// headerTitle.textContent="hello"
// headerTitle.innerText="goodbye"
//headerTitle.style.borderBottom='2px solid black'

//GET ELEMENTS BY CLASSNAMES
let items =document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].style.fontWeight='bold'
items[2].style.backgroundColor="green"

for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight='bold';  
}
