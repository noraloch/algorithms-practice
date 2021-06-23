// Question 5 - write a function that returns the index of
// the first unique character in a string, return -1 if no unique characters
function bar(str) {
    let tracker = {
        b: 1
        a: 3
        n: 2
    };
    let strArray = str.split('');
    if (!strArray.includes(strArray[i])) {
        return -1;
    }
    for (let i = 0; i < strArray.length; i++) {
        let innerTracker = [];
         if !tracker.b { tracker.b = 1} else tracker.b += 1
        // add a runner to compare each letter at index to the rest of the str
        // for (let y = 0; y < strArray.length; y++) {
        //     //push to tracker
        //     innerTracker.push(strArray[y]); // innerTracker = ['b']
        //     if (strArray.includes(strArray[i])) {

        //     }
        // }
        // if (innerTracker.length <= 1) {
        //     return innerTracker.length;
        // }
    }
    strArray.forEach((x) => {
        if tracker.b === 1
    })

}
console.log(bar('banana')); // 0
console.log(bar('sarahcharles')); // 5
console.log(bar('linkedlist')); // 2
console.log(bar('anna')); // -1