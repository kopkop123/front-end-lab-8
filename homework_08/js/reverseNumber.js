function reverseNumber(a) {
    let str = a.toString();
    let arr = str.split("").reverse();
    let result = null;

    if(arr[arr.length-1] === "-") {
        arr.pop();
        result = parseInt("-" + arr.join(""));
        return result;
    }

    result = parseInt(arr.join(""));
    return result;
}
