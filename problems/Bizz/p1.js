function oddPositionCount(str) {
    // print element in odd position with occurence number i.e abbloseckc - a:1,b:2,o:1,e:1,k:1
    let arr = Array.from(str);
    let result = {};
    arr.forEach((elm, i) => {

        let count = 0;
        let position = i + 1;

        if (position % 2 > 0 && !result[elm]) {
            // console.log(result);
            arr.forEach(e=> { if(e === elm) count++ })
            result[elm] = count;
        }
    })
    return result;
}

// console.log(oddPositionCount("bbbbbjjjjj"));

