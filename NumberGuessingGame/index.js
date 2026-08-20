let input = document.getElementById("input");
let button = document.getElementById("button");
const num = Math.floor(Math.random()*100)+1;
let result = document.getElementById("result");

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