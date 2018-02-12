/* Write a function to hide email address. */
"use strict";

function hide(email) {
    var hideEmail = "";
    var stars = "***";
    var half = "";
    var secondHalf = "";
    var secondHalfFinal = "";
    for (var i = 0; i < (email.length - 7) / 2; i++) {
        half += email[i];
    }
    for (var j = (email.length - 7) / 2; j < email.length; j++) {
        secondHalf += email[j];
    }
    for (var x = 3; x < secondHalf.length; x++) {
        secondHalfFinal += secondHalf[x];
    }

    hideEmail = half + stars + secondHalfFinal;

    return hideEmail;
}
console.log(hide("sava_vb@gmail.com"));
console.log(hide("savudin92vb@gmail.com"));

