// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example

// strings = ["ab", "ab", "abc"] 
// queries = ["ab", "abc", "ab"] 

// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, results = [2,1,0].

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

strings = ["ab", "ab", "abc"] 
queries = ["ab", "abc", "bc"] 

function matchingStrings(strings, queries) {
    // Write your code here
    let repete = [];
    queries.forEach(i => {
        repete.push(strings.filter(j => i === j).length)
    })
    return repete
}

console.log(matchingStrings(strings, queries));