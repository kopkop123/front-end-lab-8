let euro = prompt("Enter amount of euro", "");
let dollar = prompt("Enter amount of dollar", "");
let message = null;
let startEuro = null;
let resultEuroUah = null;
let startDollar = null;
let resultDollarUah = null;
let oneEuro = null;

const euroExchange = 33.2324;
const dollarExchange = 27.1240;


if(!isFinite(euro)) {
    startEuro = "'enter correct amount of euro'";
} else {
    startEuro = parseFloat(euro);
    resultEuroUah = startEuro * euroExchange;

    if(resultEuroUah % 1 !== 0) {
        resultEuroUah = Math.round(resultEuroUah * 100) / 100;
        resultEuroUah = `${resultEuroUah.toFixed(2)}`;
    } else {
        resultEuroUah = `${resultEuroUah}`;
    }
}

if(!isFinite(dollar)) {
    startDollar = "'enter correct amount of dollar'";
} else {
    startDollar = parseFloat(dollar);
    resultDollarUah = startDollar * dollarExchange;

    if(resultDollarUah % 1 !== 0) {
        resultDollarUah = Math.round(resultDollarUah * 100) / 100;
        resultDollarUah = `${resultDollarUah.toFixed(2)}`;
    } else {
        resultDollarUah = `${resultDollarUah}`;
    }
}

oneEuro = Math.round((euroExchange / dollarExchange) *100) / 100 ;

message = `${startEuro} euros are equal ${resultEuroUah} UAH, ${startDollar} dollars are equal ${resultDollarUah} UAH, one euro is equal ${oneEuro} dollars.`;

console.log(message);
