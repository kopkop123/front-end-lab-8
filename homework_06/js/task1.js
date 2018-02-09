let firstSide = prompt("Enter first side", "");
let secondSide = prompt("Enter second side", "");
let thirdSide = prompt("Enter third side", "");
let a = parseFloat(firstSide);
let b = parseFloat(secondSide)
let c = parseFloat(thirdSide);
let message = null;
let triangle = null;
let s = null;

if(!isFinite(firstSide) || !isFinite(secondSide) || !isFinite(thirdSide)) {
    message = "Incorrect data";
} else {
    if(a <= 0 || b <= 0 || c <= 0) {
        message = "Incorrect data";
    } else {
        let p = (a + b + c)/2;
        s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        if(isNaN(s) || s == 0) {
            message = "Incorrect data";
        } else {
            if(s % 1 !== 0) {
                s = Math.round(s * 100) / 100;
                message = `${s.toFixed(2)}`;
            } else {
                message = `${s}`;
            }
        }

    }
}

let angleA = Math.acos((b*b + c*c - a*a)/(2*b*c))*(180/Math.PI);
let angleB = Math.acos((a*a + c*c - b*b)/(2*a*c))*(180/Math.PI)
let angleC = 180 - (angleA + angleB);

if(angleA == 90 || angleB == 90 || angleC == 90) {
    triangle = "right triangle";
} else if(a !== b && b !== c && a !== c) {
    triangle = "scalene";
} else if(a == b && b == c && a == c) {
    triangle = "equilateral";
} else if(a == b || a == c || b == c) {
    triangle = "isosceles";
}

if(message == "Incorrect data") {
    console.log(message);
} else {
    console.log(`Type of triangle is ${triangle} and square is ${message}`)
}
