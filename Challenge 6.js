// You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

// Example
// n = 9^10
// 9^10 = 1001^2. We're working with 32 bits, so:

// 0000000000000000000000000000001001^2 = 9^10
// 1111111111111111111111111111110110^2 = 4294967286^10


// Return 4294967286.

// Function Description

// Complete the flippingBits function in the editor below.

// flippingBits has the following parameter(s):

// int n: an integer
// Returns

// int: the unsigned decimal integer result
// Input Format

// The first line of the input contains , the number of queries.
// Each of the next  lines contain an integer, , to process.


// Sample Input

// 3 
// 2147483647 
// 1 
// 0
// Sample Output

// 2147483648 
// 4294967294 
// 4294967295
// Explanation

// Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.

let n = 9

function flippingBits(n) {
    // Write your code here
    let binary = (n).toString(2).padStart(32, '0')
    let result = "";
    
    for (let i = 0; i < binary.length; i++) {
        if (binary.charAt(i) == '0') {
            result += 1
        } else {
            result += 0
        }
    }
    return parseInt(result, 2)

    // ou resolvo assim:
    // return ~n >>> 0;
}

console.log(flippingBits(n))