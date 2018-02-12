/*Write a program that checks if a given element e is in
the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */
"use strict";

function checks(a, e) {
    if (a.includes(e)) {
        return "Yes";
    } else {
        return "No";

    }
}

console.log(checks([5, -4.2, 3, 7], 13));
