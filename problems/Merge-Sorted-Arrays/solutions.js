function mergeTwo(arr1, arr2) {
    let mergedArr = [];
    let index1 = 0;
    let index2 = 0;
    let i = 0;

    //check for both lengths
    while (i < ((arr1.length) + (arr2.length))) {
        let unmerged1 = arr1[index1];
        let unmerged2 = arr2[index2];
       
        if (unmerged1 < unmerged2) {
            mergedArr[i] = unmerged1;
            index1++;
        } else {
            mergedArr[i] = unmerged2;
            index2++;
        }
        i++;

    }
    return mergedArr.filter(e => e !== 0)
}


