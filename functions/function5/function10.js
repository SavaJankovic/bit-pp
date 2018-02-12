/* Write a function to find the 
element that occurs most frequently. */

function find(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                m++;
            }

            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }

        m = 0;
    }
    return item + " repeat " + mf + " times";

}
console.log(find([1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 3, 2]));