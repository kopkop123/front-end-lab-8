function getMin() {
    if(arguments.length > 0) {
        let min = arguments[0];
        for(let i = 0; i <= arguments.length; i++) {
            if(arguments[i] < min) {
                min = arguments[i];
            }
        }

        return min;
    } else {
        return undefined;
    }
}
