function decypherPhrase(charactersMap, str) {
    let obj = {};

    Object.keys(charactersMap).forEach(key() {
       obj[charactersMap[key]] = key;
    });
    
    return cypherPhrase(obj, str);
}
