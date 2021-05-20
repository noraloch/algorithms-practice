//using recursion
var solution = function(isBadVersion) {

    return function(n) {
        let low = 1;
        let top = n;
        
        while (low < top) {
            const mid = parseInt (low + (top - low) / 2);

            if (isBadVersion(mid)) {
                top = mid;
            } else {
                low = mid + 1;
            }      
        }
        return low;
    }
}