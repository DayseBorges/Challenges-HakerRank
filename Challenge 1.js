let arr = [1, -4, 0, 3, -2];

function plusMinus(arr) {
    // Write your code here
    let zero = 0;
    let positivos = 0;
    let negativos = 0;
    console.log(zero);
    for (let i of arr) {
        if (i === 0) zero++;
        if (i > 0) positivos++;
        if (i < 0) negativos++;
    }
    console.log((zero / arr.length).toFixed(6));
    console.log((positivos / arr.length).toFixed(6));
    console.log((negativos / arr.length).toFixed(6));
}

console.log(plusMinus(arr)); 
console.log(arr)