// Exercise 1
// the first approach
function exercise1_1(inputNumber) {
    let arrNumber = [];
    let remainder = inputNumber;
    do {
        arrNumber.unshift(remainder % 10);
        remainder = Math.floor(remainder / 10);
    } while (remainder > 0);
    return arrNumber;
}
var result = exercise1_1(123);
console.log(result);

// the second approach: convert the input number into string, then split that string into characters
function exercise1_2(inputNumber) {
    var result = [];
    result = inputNumber.toString(10).split("");
    return result;
}
var result = exercise1_2(123);
console.log(result);

// Exercise 2
function exercise2(oriKeyName, newKeyName) {

}

//Exercise 3
function exercise3(inputString) {
    return inputString.split("").sort().join("");
}
var result = exercise3("hgfedcba");
console.log(result);

//Exercise 4
function exercise4(inputArray) {
    console.log(inputArray);
    return inputArray.sort().join(" ");
}
var result = exercise4([1, 4, 45, 76, 9, 98, 34, 3]);
console.log(result);