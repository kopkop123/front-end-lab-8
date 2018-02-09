let number = parseInt(prompt("Enter natural number from 1 to 20", ""));
let counter = "[~]";
let space = "   ";
let wrap = "\n";

let t = "";

if(number > 0 && number <= 20) {
    for(let i = 1; i <= number; i++) {
        for(let j = number; j > 0; j--) {
            if(j <= i) {
                t += counter;

                if(j > 1) {
                    t += counter;
                }
            } else {
                t += space;
            }
        }
        t += wrap;
    }
    console.log(t);
} else {
    console.log("Incorrect!");
}
