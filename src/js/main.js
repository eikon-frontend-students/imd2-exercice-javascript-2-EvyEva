//Toutes les variables (Variable c'est pour expliquer au logiciélle a
// quelle nouveau nom un élément doit être relier tsais genre tu veux
//renommer la classe sigma boy en jean claude bah tu écris jean claude et
//dans les parantèse tu mets sigma boy)

var box1 = document.querySelector(".change-color");
var box2 = document.querySelector(".toggle-color");
var box3 = document.querySelector(".trigger");
var box4 = document.querySelector(".target");
var box5 = document.querySelector(".trigger-all");

//box 1 (Fonctions c'est ce qui vas changer genre ça vas remplacer un élément
//etc. et tu dois metttre la nouvelle classe dans la paranthèse exemple:
// si l'action se produit bah jean claude vas changer sa couleur du bleu au
//vert en changeant de classe)
//
//(Event c'est l'action qui vas déclencher le changement en gros si t'appuie
// le bouton bleu vas devenir vert)

function changeColor() {
  box1.classList.add("is-blue");
}

box1.addEventListener("click", changeColor);

//box 2

function toggleColor() {
  box2.classList.toggle("toggle-color-on");
}

box2.addEventListener("click", toggleColor);

//box 3 et 4 ?

function boxDisapear() {
  box4.classList.toggle("box-disapear");
}

box3.addEventListener("click", boxDisapear);

//box 5

function triggerAll() {
  box1.classList.add("change-color-blue");
  box2.classList.add("change-color-red");
}

box5.addEventListener("click", triggerAll);
