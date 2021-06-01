function lengthOfLongestSubString(string) {
    let finalSeq = "";
    for (let i = 0; i < string.length; i++) {
        let tempSeq = "";
        for (let l = i; l < string.length; l++) {
            if (!tempSeq.includes(string.charAt(l))) {
                tempSeq += string.charAt(l);
                if (l === string.length - 1) {
                    finalSeq = tempSeq > finalSeq ? tempSeq : finalSeq
                    if ( i === 0) {
                        return finalSeq.length;
                    }
                }
            } else {
                finalSeq = tempSeq > finalSeq ? tempSeq : finalSeq
                l = string.length
            }
        }
    }
    return finalSeq.length;
}

console.log(lengthOfLongestSubString("aaaa"));