// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.

// To know more about XOR Click Here

// Debug the given function strings_xor to find the XOR of the two given strings appropriately.

// Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format

// The input consists of two lines. The first line of the input contains the first string, s, and the second line contains the second string,t .


// Output Format

// Print the string obtained by the XOR of the two input strings in a single line.

// Sample Input

// 10101
// 00101
// Sample Output

// 10000
// Explanation

// The XOR of the two strings 10101 and 00101 is 
// 1 ⊕ 0, 0 ⊕ 0, 1 ⊕ 1, 0 ⊕ 0, 1 ⊕ 1 = 10000.

let chunk = ["10101 \n 00101"]
console.log(chunk)


process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
   let s = input.split("\n")[0], t = input.split("\n")[1], result = '';
    for (let i = 0; i < s.length; i++)
        result += s[i] ^ t[i];
    console.log(result);
});

//No caso desse challenge os testes nao aceitavam JavaScript basicamente, mas segundo o resultado eu sim consegui resolver dessa forma acima.


