let arr = [1, 3, 5, 9, 7];

function miniMaxSum(arr) {
    // Write your code here
    let sorted = arr.sort();
    let min = sorted[0] + sorted[1] + sorted[2] + sorted[3];
    let max = sorted[1] + sorted[2] + sorted[3] + sorted[4];
    console.log(min, max)
}

console.log(miniMaxSum(arr))
console.log(arr)