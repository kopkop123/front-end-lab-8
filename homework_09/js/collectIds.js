function collectIds(movies) {
    let arrNew = getFilteredArray(movies, predicateFunction);

    return getTransformedArray(arrNew, function(increment) {
       return increment.id;
    });
}
