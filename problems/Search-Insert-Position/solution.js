
function bubbleSort(n) {
    for (let outer = 0; outer < n.length; outer++) {
        let outerElement = n[outer];

        for (let inner = outer + 1; inner < n.length; inner++) {
            let innerElement = n[inner];

            if (outerElement > innerElement) {
                n[outer] = innerElement;
                n[inner] = outerElement;
                outerElement = n[outer];
                innerElement = n[inner];
            }
        }
    }
    return n;
}

var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    if (nums.length === 1) {
        return target <= nums[0] ? 0 : 1;
    }

    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    }

    while (low < high) {
        //when indecies are next to each other
        if (low + 1 === high) {
            if (target > nums[high]) {
                return high + 1;
            }
            if (target < nums[low]) {
                return low;
            }
            return high;
        }
        let mid = parseInt(low + (high - low) / 2)
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid;
        } else if (nums[mid] < target) {
            low = mid;
        }
    }
}