const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const decrease = document.getElementById("decrease")
const counter = document.getElementById("counter")

let count = 0;

decrease.onclick - function(){
    count--;
    counter.textContent = count;
}