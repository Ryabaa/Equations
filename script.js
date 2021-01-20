let button = document.querySelector(".button");

let input_1 = document.querySelector(".input-1");
let input_2 = document.querySelector(".input-2");
let input_3 = document.querySelector(".input-3");

let unknown_1 = document.querySelector(".unknown-1");
let unknown_2 = document.querySelector(".unknown-2");
let unknown_3 = document.querySelector(".unknown-3");

let solution = document.querySelector(".solution");

let aZero = document.querySelector(".a-zero");

let solutionDiscriminant = document.querySelector(".solution-discriminant");
let discriminant = document.querySelector(".discriminant");

let solutionEquation = document.querySelector(".solution-equation");

let coefficient_a = document.querySelector(".coefficient-a");
let coefficient_b = document.querySelector(".coefficient-b");
let coefficient_c = document.querySelector(".coefficient-c");
let coefficients = document.querySelector(".coefficients");

let top_1 = document.querySelector(".top-1");
let top_2 = document.querySelector(".top-2");
let top_3 = document.querySelector(".top-3");

let bottom_1 = document.querySelector(".bottom-1");
let bottom_2 = document.querySelector(".bottom-2");
let bottom_3 = document.querySelector(".bottom-3");

let answer_1 = document.querySelector(".answer-1");
let answer_2 = document.querySelector(".answer-2");
let answer_3 = document.querySelector(".answer-3");

let rootFirst = document.querySelector(".root-1");
let rootSecond = document.querySelector(".root-2");
let rootThird = document.querySelector(".root-3");
let noRoots = document.querySelector(".no-roots");


function solve() {
    let a = input_1.value;
    let b = input_2.value;
    let c = input_3.value;
    
    
    
    let discr = b*b - 4*a*c;
    
    if(discr > 0) {
        let root_1 = (-b - (Math.sqrt(discr)) / (2*a);
        let root_2 = (-b + (Math.sqrt(discr)) / (2*a);
        rootThird.style.display = "none";
        solutionEquation.style.display = "flex";
        coefficients.style.display = "flex";
        solutionDiscriminant.style.display = "flex";
        rootFirst.style.display = "flex";
        rootSecond.style.display = "flex";
        noRoots.style.display = "none";
        aZero.style.display = "none";
        answer_1.textContent = root_1;
        answer_2.textContent = root_2;
        top_1.textContent = -b + ' + ' + '√' + discr;
        top_2.textContent = -b + ' - ' + '√' + discr;
        bottom_1.textContent = 2 + ' · ' + a;
        bottom_2.textContent = 2 + ' · ' + a;
    } else if(discr == 0){
        let root_3 = -b / (2*a);
        answer_3.textContent = root_3;
        solutionEquation.style.display = "flex";
        coefficients.style.display = "flex";
        solutionDiscriminant.style.display = "flex";
        rootFirst.style.display = "none";
        rootSecond.style.display = "none";
        aZero.style.display = "none";
        rootThird.style.display = "flex";
        noRoots.style.display = "none";
        top_3.textContent = -b;
        bottom_3.textContent = 2 + ' · ' + a;
    } else {
        solutionEquation.style.display = "none";
        coefficients.style.display = "none";
        solutionDiscriminant.style.display = "none";
        rootFirst.style.display = "none";
        rootSecond.style.display = "none";
        rootThird.style.display = "none";
        aZero.style.display = "none";
        noRoots.style.display = "unset";
        noRoots.textContent = "The discriminant is less than zero, the equation has no solution";
    }

    if (a === '') {
        a = 1;
    } 

    if (a == 0) {
        solutionEquation.style.display = "none";
        coefficients.style.display = "none";
        solutionDiscriminant.style.display = "none";
        rootFirst.style.display = "none";
        rootSecond.style.display = "none";
        rootThird.style.display = "none";
        noRoots.style.display = "none";
        aZero.style.display = "unset";
        aZero.textContent = 'Coefficient "a" cannot be equal to zero';
    }
    
    if (b === '') {
        b = 1;
    }  
    
    if (c === '') {
        c = 1;
    }

    solution.style.display = "unset";

    unknown_1.textContent = input_1.value;
    unknown_2.textContent = input_2.value;
    unknown_3.textContent = input_3.value; 
    
    discriminant.textContent = b + '²' + ' - ' + '4 ' + '· ' + a + ' · ' + c + ' = ' + b*b + '-' + 4*a*c + '=' + discr;
    
    coefficient_a.textContent = a;
    coefficient_b.textContent = b;
    coefficient_c.textContent = c;

}
