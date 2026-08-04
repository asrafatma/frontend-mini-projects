const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const decrease = document.getElementById("decrease")
const counter = document.getElementById("count")

let count = 0;

decrease.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}

increase.onclick = function(){
    count++;
    counter.textContent = count;
}