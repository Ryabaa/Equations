let button = document.querySelector(".button");

let input_1 = document.querySelector(".input-1");
let input_2 = document.querySelector(".input-2");
let input_3 = document.querySelector(".input-3");

let unknown_1 = document.querySelector(".unknown-1");
let unknown_2 = document.querySelector(".unknown-2");
let unknown_3 = document.querySelector(".unknown-3");

let solution = document.querySelector(".solution");

let aZero = document.querySelector(".a-zero");

let solDiscriminant = document.querySelector(".solution-discriminant");
let discriminant = document.querySelector(".discriminant");
let discrResult = document.querySelector(".discriminant-result");

let solutionEquation = document.querySelector(".solution-equation");

let coefficient_a = document.querySelector(".coefficient-a");
let coefficient_b = document.querySelector(".coefficient-b");
let coefficient_c = document.querySelector(".coefficient-c");
let coefficients = document.querySelector(".coefficients");

let top_1 = document.querySelector(".top-1");
let top_2 = document.querySelector(".top-2");
let top_3 = document.querySelector(".top-3");
let top2_1 = document.querySelector(".top2-1");
let top2_2 = document.querySelector(".top2-2");
let top2_3 = document.querySelector(".top2-3");

let bottom_1 = document.querySelector(".bottom-1");
let bottom_2 = document.querySelector(".bottom-2");
let bottom_3 = document.querySelector(".bottom-3");
let bottom2_1 = document.querySelector(".bottom2-1");
let bottom2_2 = document.querySelector(".bottom2-2");
let bottom2_3 = document.querySelector(".bottom2-3");

let answer_1 = document.querySelector(".answer-1");
let answer_2 = document.querySelector(".answer-2");
let answer_3 = document.querySelector(".answer-3");

let rootFirst = document.querySelector(".root-1");
let rootSecond = document.querySelector(".root-2");
let rootThird = document.querySelector(".root-3");
let noRoots = document.querySelector(".no-roots");

function visualTwoRoots(a, b, root_1, root_2, d, sd) {
    rootThird.style.display = "none";
    solutionEquation.style.display = "flex";
    coefficients.style.display = "flex";
    solDiscriminant.style.display = "flex";
    rootFirst.style.display = "flex";
    rootSecond.style.display = "flex";
    noRoots.style.display = "none";
    aZero.style.display = "none";
    answer_1.textContent = root_1;
    answer_2.textContent = root_2;
    top_1.textContent = `-${b} + √${d}`;
    top_2.textContent = `-${b} - √${d}`;
    bottom_1.textContent = `2 · ${a}`;
    bottom_2.textContent = `2 · ${a}`;
    top2_1.textContent = Math.round((-b + sd) * 100) / 100;
    top2_2.textContent = Math.round((-b - sd) * 100) / 100;
    bottom2_1.textContent = 2*a;
    bottom2_2.textContent = 2*a;
    discriminant.textContent = ` ${b}² - 4 · ${a} · ${c} = ${b*b} - ${4*a*c} = `;
    discrResult.textContent = d;
}

function visualOneRoot(a, b, c, root_3, d) {
    minus(a, b, c);
    answer_3.textContent = root_3;
    solutionEquation.style.display = "flex";
    coefficients.style.display = "flex";
    solDiscriminant.style.display = "flex";
    rootFirst.style.display = "none";
    rootSecond.style.display = "none";
    aZero.style.display = "none";
    rootThird.style.display = "flex";
    noRoots.style.display = "none";
    top_3.textContent = -b;
    top2_3.textContent = -b;
    bottom_3.textContent = `2 · ${a}`;
    bottom2_3.textContent = 2*a;
    discriminant.textContent = ` ${b}² - 4 · ${a} · ${c} = ${b*b} - ${4*a*c} = `;
    discrResult.textContent = d;
}

function visualNoRoots(d) {
    solutionEquation.style.display = "flex";
    coefficients.style.display = "flex";
    solDiscriminant.style.display = "flex";
    rootFirst.style.display = "none";
    rootSecond.style.display = "none";
    rootThird.style.display = "none";
    aZero.style.display = "none";
    noRoots.style.display = "unset";
    noRoots.textContent = "The discriminant is less than zero, the equation has no solution";
    discriminant.textContent = ` ${b}² - 4 · ${a} · ${c} = ${b*b} - ${4*a*c} = `;
    discrResult.textContent = d;
}

function visualCoeffZero() {
    solutionEquation.style.display = "none";
    coefficients.style.display = "none";
    solDiscriminant.style.display = "none";
    rootFirst.style.display = "none";
    rootSecond.style.display = "none";
    rootThird.style.display = "none";
    noRoots.style.display = "none";
    aZero.style.display = "unset";
    aZero.textContent = 'Coefficient "a" cannot be equal to zero';
}

function getInputs(i1, i2, i3) {
    a = i1.value;
    b = i2.value;
    c = i3.value;
    
    if (a === '') {
        a = 1;
    }
    if (b === '') {
        b = 1;
    }
    if (c === '') {
        c = 0;
    }
}

function solCoeffs_Unknowns(u1, u2, u3, coeff1, coeff2, coeff3) {
    u1.textContent = a;
    u2.textContent = b;
    u3.textContent = c;
    coeff1.textContent = a;
    coeff2.textContent = b;
    coeff3.textContent = c;
}

function calcDiscr(a, b, c) {
    return (b * b) - (4 * a * c);
}

function calcSqrtDiscr(d) {
    return Math.sqrt(d);
}


function main() {
    let a = null;
    let b = null;
    let c = null;
    getInputs(input_1, input_2, input_3);
    let discr = calcDiscr(a, b, c);
    sqrtDiscr = calcSqrtDiscr(discr);
    
    function getTwoRoots(a, b, d) {
        let root_1 = (-b + d) / (2 * a);
        let root_2 = (-b - d) / (2 * a);
        root_1 = Math.round(root_1 * 100) / 100;
        root_2 = Math.round(root_2 * 100) / 100;
        visualTwoRoots(a, b, root_1, root_2, discr, sqrtDiscr);
        return [root_1, root_2];
    }
    
    function getOneRoot(a, b) {
        let root_3 = -b / (2 * a); 
        root_3 = Math.round(root_3 * 100) / 100;
        visualOneRoot(a, b, root_3, discr, sqrtDiscr);
        return root_3;
    }
    
    if (discr > 0) {
        solCoeffs_Unknowns(unknown_1, unknown_2, unknown_3, coefficient_a, coefficient_b, coefficient_c);
        getTwoRoots(a, b, sqrtDiscr);
    } else if (discr == 0) {
        solCoeffs_Unknowns(unknown_1, unknown_2, unknown_3, coefficient_a, coefficient_b, coefficient_c);
        getOneRoot(a, b);
    } else {
        solCoeffs_Unknowns(unknown_1, unknown_2, unknown_3, coefficient_a, coefficient_b, coefficient_c);
        visualNoRoots(discr);
    }

    if (a == 0) {
        visualCoeffZero();
    }
    
}


button.addEventListener('click', function() {
    solution.style.display = "flex";
    main();
});
