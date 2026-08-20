const input = document.getElementById("input");
const button = document.getElementById("button");
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let result = document.getElementById("result");
const maxAttempts = 3;
let attempts = 0;
let running = true;

let randomNumber;

button.onclick = function(){

    if(randomNumber == num){
        result.textContent= "You guessed the number correctly!!";
    } else if (randomNumber > num) {
        result.textContent = "Too High!!";
    } else if (randomNumber < num) {
        result.textContent = "Too Low!1";
    } else {
        result.textContent = "Invalid Number!!";
    }
}