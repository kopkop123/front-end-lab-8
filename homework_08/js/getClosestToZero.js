function getClosestToZero() {
    if(arguments.length > 1) {
        let closest = arguments[0];
        let result = closest;

        for(let i = 0; i <= arguments.length; i++) {
            let diff = Math.abs(0 - arguments[i]);
            if(diff < closest) {
                closest = diff;
                result = arguments[i];
            }
        }

        return result;
    } else if(arguments.length === 1) {
        return arguments[0];
    } else {
        return undefined;
    }
}
