let least = (countries) => {
    let cObj = {};
    let result;
    countries.forEach(c => {
        if (!cObj[c]) {
            cObj[c] = 1;
        } else {
            cObj[c]++;
        }
    })
    // let min = Math.min(...Object.values(cObj));
    result = (Object.keys(cObj).filter(key => cObj[key] === Math.min(...Object.values(cObj))));
    return result;
}

console.log(least(["USA", "France", "Finland", "USA", "Morocco", "France"]));