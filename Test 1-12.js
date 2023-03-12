//find the median number 
//ex: arr = [5, 3, 1, 2, 4]
//you need to sorted the numbers and find the number in de midium
// in this case, 3
arr = [5, 3, 1, 2, 4, 6, 7]

function findMedian(arr) {
    // Write your code here
    arr.sort((a,b) => {
        return a - b;
    })
    console.log(arr);
    console.log(arr[Math.floor(arr.length/2)]);
    return (arr[Math.floor(arr.length/2)]);
}

findMedian(arr)