/* Write a function to calculate how many years there
 are left until retirement based on the year of birth. 
 Retirement for men is at age of 65 and for women at age of 60.
  If someone is already retired, a proper message should
be displayed */
"use strict";

function retired(yearsOfBirth, gender) {
    var currentYear = 2018;
    var numberYears = currentYear - yearsOfBirth;
    var yearsToRetired = 0;
    if (gender === "m" || gender === "M") {
        if (numberYears < 65) {
            yearsToRetired = 65 - numberYears;
        } else {
            return "You need a africka sljiva."
        }
    }

    if (gender === "f" || gender === "F") {
        if (numberYears < 60) {
            yearsToRetired = 60 - numberYears;
        } else {
            return " Buy your grandpa aficku sljivu."
        }
    }

    return yearsToRetired;
}
console.log(retired(1992, "f"));
