let button = document.querySelector(".button");

let input_1 = document.querySelector(".input-1");
let input_2 = document.querySelector(".input-2");
let input_3 = document.querySelector(".input-3");

let unknown_1 = document.querySelector(".unknown-1");
let unknown_2 = document.querySelector(".unknown-2");
let unknown_3 = document.querySelector(".unknown-3");

let equationSolution = document.querySelector(".equation-solution");
let discriminant = document.querySelector(".discriminant");
let discriminantSolution = document.querySelector(".discriminant-solution");


function solve() {
    let a = input_1.value;
    let b = input_2.value;
    let c = input_3.value;
    let discr = b*b - 4*a*c;
    let discrSoluton = b + '²' + '-' + '4' + '·' + a + '·' + c + '=' + b*b + '-' + 4*a*c + '=' + discr;
    discriminantSolution.textContent = discrSoluton;
    if(discr > 0) {
        let root_1 = (-b - discr) / (2*a);
        let root_2 = (-b + discr) / (2*a);
    } else if(discr === 0){
        let root_1 = -b / (2*a);
    } else {
        return "The discriminant is less than zero, the equation has no solution";
    }
}

function solution() {
    solve();
    equationSolution.style.display = "unset";
    unknown_1.textContent = input_1.value;
    unknown_2.textContent = input_2.value;
    unknown_3.textContent = input_3.value; 
    discriminant.style.display = "unset";
}
