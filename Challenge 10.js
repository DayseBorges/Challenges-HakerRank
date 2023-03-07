// There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation  A'[i] + B'[i] >= k holds for all i where 0 >= i > n.

// There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A',B',  satisfying the relation exists. Otherwise, return NO.

// Example
// A = [0, 1]
// B = [0, 2]
// k = 1

// A valid A', B' is A' = [1,0] and B' = [0,2]: 1+0 >= 1 and 0+2>=1. Return YES.

// Function Description

// Complete the twoArrays function in the editor below. It should return a string, either YES or NO.

// twoArrays has the following parameter(s):

// int k: an integer
// int A[n]: an array of integers
// int B[n]: an array of integers
// Returns
// - string: either YES or NO

// Input Format

// The first line contains an integer , the number of queries.

// The next q sets of 3 lines are as follows:

// The first line contains two space-separated integers n and k, the size of both arrays A and B, and the relation variable.
// The second line contains n space-separated integers A[i].
// The third line contains n space-separated integers B[i].


// Sample Input

// STDIN       Function
// -----       --------
// 2           q = 2
// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]
// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]
// Sample Output

// YES
// NO


//Esclarecimento: 
// Permutar seria ordenar a matriz A na ordem crescente e a matriz B na ordem decrescente 
// let A = [[3,1,2],[3,1,2],[3,1,2]];
// let B = [[9,7,8],[9,7,8],[9,7,8]];
// let k = 10;


function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO"
            } 
        }
    return "YES"
}
    
console.log(twoArrays(10, [2,1,3], [9,8,7]));
console.log(twoArrays(11, [2,1,3], [9,8,7]));

//IMPORTANTE:

// Porque retornar "NO" primeiro:

// Se o loop for percorrer toda a matriz A e não encontrar um elemento de A que satisfaça a relação, então não há nenhuma permutação que satisfaça a relação, e devemos retornar "NO".

// Se retornarmos "YES" imediatamente após o loop for sem encontrar um elemento de A que satisfaça a relação, estaremos assumindo que a permutação existe, o que pode não ser o caso. Portanto, retornar "NO" primeiro garante que, se não houver permutação que satisfaça a relação, retornaremos "NO" corretamente.

