/* The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square 
of the height (in meters).
 Write a function that takes two parameters, weight and height,
  computes the BMI,
  and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
 */
"use strict";

function bmi(weight, height) {
    var sum = weight / (height * height);
    if (sum < 15) {
        return "Starvation";
    } else if (sum > 15 && sum < 17.5) {
        return "Anorexic";
    } else if (sum > 17.5 && sum < 18.5) {
        return "Underweight";
    } else if (sum >= 18.5 && sum < 25) {
        return " Ideal";
    } else if (sum >= 25 && sum < 30) {
        return "Overweight";
    } else if (sum >= 30 && sum < 40) {
        return "Obese";
    } else {
        return " Morbidly obese";
    }
}

console.log(bmi(87,1.98));

