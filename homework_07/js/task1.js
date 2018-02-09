let number = parseInt(prompt("Enter natural number from 1 to 20", ""));
let counter = "[~]";
let space = "   ";
let wrap = "\n";

let result = "";

if(number > 0 && number <= 20) {
    for(let i = 1; i <= number; i++) {
        for(let j = number; j > 0; j--) {
            if(j <= i) {
                result += counter;

                if(j > 1) {
                    result += counter;
                }
            } else {
                result += space;
            }
        }
        result += wrap;
    }
    console.log(result);
} else {
    console.log("Incorrect!");
}
