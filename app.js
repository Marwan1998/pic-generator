const row = 5, col = 7;
for (let i = 1; i <= row; i++) {
    let counter = col-1;
    for (let j = 1; j <= col; j++) {
        let n = (col*i) - counter--;
        console.log(n);
    }    
}