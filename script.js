'use strict';

let collections = document.querySelectorAll(".book"),
elems = document.querySelectorAll("li"),
reklama = document.querySelector(".adv"),
book3Main = document.querySelectorAll("h2");

console.log (collections);
console.log (elems);
console.log (book3Main);

collections[2].before(collections[4]);
collections[0].before(collections[1]);
collections[5].after(collections[2]);

document.body.style.background = 'url(../image/you-dont-know-js.jpg) center no-repeat';

reklama.remove();

book3Main[4].replaceWith("Книга 3. this и Прототипы Объектов");


collections[0].append(elems[2]);
elems[4].before(elems[6]);
elems[4].before(elems[8]);
elems[10].before(elems[2]);

elems[48].before(elems[55]);
elems[51].before(elems[48]);
elems[54].before(elems[51]);

const elemClone = elems[25].cloneNode(true);
elemClone.classList.add("li");
elems[26].before(elems[27]);
elems[27].textContent = "Глава 8: За пределами ES6";