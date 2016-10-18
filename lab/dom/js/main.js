"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');

boxOne.addEventListener("click", fadeToBlack);
function fadeToBlack() {
	boxOne.classList.add("black");
	boxOne.classList.add("transition");
}

boxTwo.addEventListener("click", fall);
function fall() {
	boxTwo.classList.add("fall");
	boxTwo.classList.add("transition");
}

boxThree.addEventListener("mouseover", fadeToWhite);
function fadeToWhite() {
	boxThree.classList.add("white");
	boxThree.classList.add("transition");
}
boxThree.addEventListener("mouseout", fadeToGrey);
function fadeToGrey() {
	boxThree.classList.remove("white");
	boxThree.classList.add("transition");
}

boxFour.addEventListener("click", fall);
boxFour.addEventListener("click", float);
function float() {
	boxFour.classList.add("float");
}