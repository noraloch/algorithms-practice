/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let finalSeq = "";
    
    let map = new Map();
    
    for (let i=0; i < s.length; i++) {
        map.set(i, s.charAt(i));
        
    }
    
    for (let i = 0; i < s.length; i++) {
        let innerSeq = "";
        for (let y = i; y < s.length; y++ ) {
            if (!innerSeq.includes(s.charAt(y))) {
                innerSeq += s.charAt(y);
                if (y === s.length - 1) {
                    finalSeq = innerSeq.length > finalSeq.length ? innerSeq : finalSeq
                    if (i === 0) {
                        return finalSeq.length
                    }
                }
            } else {
                finalSeq = innerSeq.length > finalSeq.length ? innerSeq : finalSeq
                y = s.length
            }
        }
        
    }
    return finalSeq.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));