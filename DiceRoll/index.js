let myButton = document.getElementById("button");
const min = 1;
const max = 6;

let randomNumber;

myButton.onclick = function(){
    randomNumber = Math.floor(Math.random()*max)+1;
    myButton.textContent = randomNumber;
}