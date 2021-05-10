function binaryGap(n) {
    let binaryNumber = (n >>> 0).toString(2);

    let startedCounting = false;
    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === '1') {
            
            if (startedCounting) {
                count++;
                if (count > maxCount) {
                    maxCount = count;
                    count = 0;
                }
            } else {
                startedCounting = true;
            }
        } else {
            count++;
        }
    }
    return maxCount;
}