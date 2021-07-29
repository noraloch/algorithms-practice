let factorial = (n) => {
    //  4 => (4 3 2 1) = 24 
    let numArray =[];
    let count = 1;
    while (count <= n) {
        numArray.push(count);
        count++;
    }
    console.log(numArray);
    let result;
    numArray.forEach((e,i)=> {
        if (i === 0) result = e;
        result = result * e;
    });
    return result;
} 

console.log(factorial(170)); // last number before infinity