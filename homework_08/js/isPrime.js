function isPrime(a) {
    if(a < 2) {
        return false;
    } else {
        if(a === 2) {
            return true;
        } else {
            for(let i = 2; i < a; i++) {
                if(a % i === 0) {
                    return false;
                }
            }

            return true;
        }
    }
}
