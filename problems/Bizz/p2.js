function areAnagrams(word1, word2) {

    let w1 = word1.replaceAll(' ', '').toLowerCase();
    let w2 = word2.replaceAll(' ', '').toLowerCase();

    if (w1.length !== w2.length) return false;
    else {
        w1Array = Array.from(w1);
        w2Array = Array.from(w2);
        return w1Array.find(char => !w2Array.includes(char)) ? false : true;
    }
}

console.log(areAnagrams('f', 'finrders'));