/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let top = nums.length - 1;
    
if (!nums.includes(target)) {
    return -1;
} else if (nums.length === 1) {
    return 0;
}
    
    while (low<top){
        
        if (low + 1 === top) {
            if (target === nums[top]) {
            return top;
            }
            if (target === nums[low]) {
            return low;
            }
        }
        
        const mid = parseInt (low + (top - low) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            top = mid;
        } else {
            low = mid;
        }
    }
};

exports.search = search;