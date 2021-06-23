function longestSequenceNumber(arr) {
    let number;
    let count = 0;
    let maxNumber;
    let maxCount = 0;

    arr.forEach((num, i) => {
        if (number === undefined) {
            number = num;
            count++;
            maxNumber = number;
        } else if (num === number) {

            if (i === arr.length - 1) {
                if (maxCount < count) {
                    maxNumber = number;
                }
            } else {
                count++;
            }

        } else if (num !== number) {
            if (maxCount < count) {
                maxCount = count;
                maxNumber = number;
            }
            number = num;
            count = 1;
        }
    })
    return maxNumber;
    //integer
}

console.log(longestSequenceNumber([4,4,4,4,6,6,8,8,8,8,8,8,8,7,8])); // -> outputs 8