// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example
// s = [2,2,1,3,2]
// d = 4
// m = 2


// Lily wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2. In this case, there are two segments meeting her criteria: [2,2] and [1,3].

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided

// Input Format

// The first line contains an integer n, the number of squares in the chocolate bar.
// The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
// The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.

let s = [5, 1, 2, 4, 4, 2, 4, 2, 2, 5, 1, 4, 3, 1, 1, 1, 2, 1, 4, 1]
let d = 18
let m = 6

function birthday(s, d, m) {
    // Write your code here
    let arrays = []
    let count = 0;
    for (let i = 0; i < s.length; i ++) {
        arrays.push(s.slice(i, i + m))
    }
    console.log(arrays);
    for (let i = 0; i < arrays.length; i++) {
        let soma = arrays[i].reduce((acu, valAtual) => acu + valAtual, 0)
        console.log(soma)
        if(soma === d) {
            count++
        }
    }
    return count
}

console.log(birthday(s, d, m));

//combinacao de elementos possiveis cujo numero é determinado pelo length do mes de aniversário que somados devem dar igual ao dia de aniversário 