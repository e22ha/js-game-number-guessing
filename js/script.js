
let max = 101;
let min = 0;

let gNumber = getRandomInt(min, max);

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let buttonNG = document.querySelector(".buttonNG");
let buttonL = document.querySelector(".lbutton");
let buttonR = document.querySelector(".rbutton");
let buttonF = document.querySelector(".fbutton");
let q = document.querySelector(".q");

let number = document.querySelector(".number");

buttonNG.addEventListener("click", function () {
  
  max = 100;
  min = 0;  
  gNumber = getRandomInt(min, max);
  smoothly(number, "textContent", gNumber);
  smoothly(q, "textContent", '?');
  
});

buttonL.addEventListener("click", function () {
  max = gNumber;
  gNumber = getRandomInt(min, max);
  smoothly(number, "textContent", gNumber);
  smoothly(q, "textContent", '?');

});

buttonR.addEventListener("click", function () {
  min = gNumber;
  gNumber = getRandomInt(min, max);
  smoothly(number, "textContent", gNumber);
  smoothly(q, "textContent", '?');

});

buttonF.addEventListener("click", function () {
  smoothly(q, "textContent", '!');
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
