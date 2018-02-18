function cypherPhrase(charactersMap, str) {
    str = str.split("");

    let newStr = getTransformedArray(str, increment(val) {
    for (let key in arr) {
      if (val === key) {
        return arr[key];
      }
    }
    return val;
  });

  newStr = newStr.join("");
  return newStr;
}
