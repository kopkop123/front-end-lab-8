function getTransformedArray(arr, increment) {
    let arrNew = [];
    forEach(arr, func(arr){
        arrNew.push(increment(arr));
    });

    return arrNew;
}
