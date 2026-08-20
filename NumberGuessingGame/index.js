const input = document.getElementById("input");
const button = document.getElementById("button");
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let result = document.getElementById("result");
const maxAttempts = 3;
let attempts = 0;
let running = true;


button.onclick = function(){

    if (!running) return;

    let guess = Number(input.value);

    if (isNaN(guess) || guess < min || guess > max) {
        result.textContent = `Please enter a valid number between ${min} and ${max}.`;
        return;
    }

    attempts += 1;

    if (guess === answer) {
        result.textContent = ` You guessed it correctly in ${attempts} attempt(s)!`;
        running = false;
    } else {
        let remaining = maxAttempts - attempts;
        let hint = guess > answer ? "Too high!" : "Too low!";

        if (remaining > 0) {
            result.textContent = `${hint} You have ${remaining} attempt(s) left.`;
        } else {
            result.textContent = ` Game Over! The correct number was ${answer}.`;
            running = false;
        }
    }

    input.value = "";
}