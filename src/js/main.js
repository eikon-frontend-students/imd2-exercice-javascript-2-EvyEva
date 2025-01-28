var box1 = document.querySelector(".change-color");
var box2 = document.querySelector(".toggle-color");
var box3 = document.querySelector(".trigger");
var box4 = document.querySelector(".target");
var box5 = document.querySelector(".trigger-all");
var box6 = document.querySelector(".trigger-all-self");

//box 1

function changeColor() {
  box1.classList.add("is-blue");
}

box1.addEventListener("click", changeColor);

//box 2

function toggleColor() {
  box2.classList.toggle("toggle-color-on");
}

box2.addEventListener("click", toggleColor);

//box 3 et 4

function boxDisapear() {
  box4.classList.toggle("box-disapear");
}

box3.addEventListener("click", boxDisapear);

//box 5

function triggerAll() {
  box1.classList.add("is-blue");
  box2.classList.add("is-red");
}

box5.addEventListener("click", triggerAll);

//box 6

function triggerAllSelf() {
  box1.classList.add("is-blue");
  box2.classList.add("is-red");
  box6.classList.add("is-green");
}

box6.addEventListener("click", triggerAllSelf);
