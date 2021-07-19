function areAnagrams(word1, word2) {

    let w1 = word1.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
    let w2 = word2.replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase();
    let isAnag;
    if (w1.length !== w2.length) return false;

    w1Array = Array.from(w1);
    w2Array = Array.from(w2);

    w1Array.forEach(char => {
        if (!w2Array.includes(char)) {
            isAnag = false;
        } else if (isAnag !== false) {
            remove(char);
            isAnag = true;
        }
    });
    function remove(c) {
        let ind = w2Array.indexOf(c);
        w2Array.splice(ind, 1);
    }
    return isAnag;
}

// console.log(areAnagrams('dss', 'ssd'));