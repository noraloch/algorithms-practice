let floyd = (rows) => {
    let p = '';
    let tracker = 1;
    for (let n = 1; n <= rows; n++) {
        for (let y = 1 ; y <= n; y++) {
            p += tracker + ' ';
            tracker += 1;
        }
        console.log(p);
        p = '';
    }
}

// floyd(5);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
