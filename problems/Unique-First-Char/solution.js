
function bar(str) {
    let tracker = {};
    let strArray = str.split('');
    for (let i = 0; i < strArray.length; i++) {
        let letter = strArray[i];

        if (!tracker[letter]) {
            tracker[letter] = 1;
        } else {
            tracker[letter] += 1;
        }
    }
    for (let i = 0; i < strArray.length; i++) {
        let elm = strArray[i];
        if (tracker[elm] === 1) {
            return i;
        }
    }
    return -1
}

console.log(bar('banana')); // 0
console.log(bar('sarahcharles')); // 5
console.log(bar('linkedlist')); // 2
console.log(bar('anna')); // -1