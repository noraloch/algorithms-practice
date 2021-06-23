function multiply(a, b) {
    let result = 0;
    let isANegative = false;
    let isBNegative = false;
    let newA;
    if (a < 0) {
         newA = Math.abs(a);
        isANegative = true;
    }
    if (b < 0) {
        Math.abs(b);
        isBNegative = true;
    }

    for (let i = 0; i < newA; i++) {
        result += b;
        console.log(result)
    }

    if (isANegative && isBNegative) {
        return result;
    } else if (isBNegative || isANegative) {
        return -result;
    } else {
        return result;
    }

}
