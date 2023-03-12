// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n=7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer n, the number of socks represented in ar.
// The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3

let n=100
let ar = [50, 49, 38, 49, 78, 36, 25, 96, 10, 67, 78, 58, 98, 8, 53, 1, 4, 7, 29, 6, 59, 93, 74, 3, 67, 47, 12, 85, 84, 40, 81, 85, 89, 70, 33, 66, 6, 9, 13, 67, 75, 42, 24, 73, 49, 28, 25, 5, 86, 53, 10, 44, 45, 35, 47, 11, 81, 10, 47, 16, 49, 79, 52, 89, 100, 36, 6, 57, 96, 18, 23, 71, 11, 99, 95, 12, 78, 19, 16, 64, 23, 77, 7, 19, 11, 5, 81, 43, 14, 27, 11, 63, 57, 62, 3, 56, 50, 9, 13, 45]

function sockMerchant(n, ar) {
    // Write your code here
    let aux = 0
    
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < n; j++ ) {
            if (ar[i] === ar[j]) {
                aux++;
                ar.splice(i, 1);
                ar.splice(j - 1, 1)
                i--;
                break;
            }
        }
    }
    return aux;
}
console.log(sockMerchant(n, ar));