let resultSection = document.getElementsByClassName("resultsSection");
let getTheFizz = document.getElementById("submitBtn");
let number = document.getElementsByClassName("fizzBuzzNumber");

getTheFizz.addEventListener(getFizz());

function getFizz(){
    let s = number.value();
    for(let i = 0; i < s; i++){
        resultSection.innerHTML += `<div class="fizz-buzz-item">` + i + `</div>
    }
}