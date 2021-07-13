function removeDup(nums) {
    let uniqueNums = [];
    nums.forEach(num,i => {

        if (uniqueNums.length === 0) {
            uniqueNums.push(num);
        }
        else {
            if (num !== nums[i-1]) {
                uniqueNums.push(num);
            } else {
                i++
            }
        }
    })
    nums = uniqueNums;
    return nums;
}

console.log(removeDup([1,3,3,3,5,6,6,6,8,8]));