function multiply(a, b) {
    let result = 0;
    let isANegative = false;
    let isBNegative = false;
    if (a < 0) {
        Math.abs(a);
        isANegative = true;
    }
    if (b < 0) {
        b.Math.abs();
        isBNegative = true;
    }

    for (let i = 0; i < a; i++) {
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

console.log(multiply(-3, 81));