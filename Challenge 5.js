// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]

// The unique element is 4.

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer,n , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in a.

let a = [1, 2, 3, 4, 3, 2, 1]

function lonelyinteger(a) {
    // Write your code here
    for (let i = 0; i < a.length; i++) {
        let j = a.filter(j => j === a[i]) 
        if (j.length === 1) {
            return a[i]
        }
    }
}

console.log(lonelyinteger(a));