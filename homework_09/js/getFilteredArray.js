function getFilteredArray(arr, predicateFunction) {
    let arrNew = [];
    forEach(arr, func(arr) {
        if(predicateFunction(arr)){
            arrNew.push(arr);
        }
    });

    return arrNew;
}
