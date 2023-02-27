// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.: AM or PM ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45 

let s = "08:05:45AM"
function timeConversion(s) {
    // Write your code here
    if (s.includes("PM")) {
        s = s.slice(0, -2) 
        s = s.split(":")
        let hr = parseInt(s) + 12
        if (hr === 24) {
            hr = "12";
        }
        s.splice(0, 1, hr)
        s = s.join(":")
    } else if  (s.includes("AM")) {
        s = s.slice(0, -2) 
        s = s.split(":")
        let hr = s[0]
        if (hr === 12) {
            hr = "00";
        }
        s.splice(0, 1, hr)
        s = s.join(":")
    }
    return s
}

console.log(timeConversion(s));