/*Homework*/
// !problem №4
function multiplaying(k, n) {
  for (let i = 1; i <= n; i++) {
    let result = n ** k;
    console.log(result);
  }
}
// multiplaying(5, 3);

// !problem №7
// We need to add together 2 array and delete repeated number and string in the new array
function addTogethertwoArrayAndThenRemoveDuplicates() {
  let firstArray = [1, 2, 1, 8, 9, 9, 6];
  let secondArray = [5, 6, 8, 4, 8, 7, 1];
  let combinedArray = firstArray.concat(secondArray);
  let uniqueCombinedArray = Array.from(new Set(combinedArray));
  let result = uniqueCombinedArray.sort((a, b) => a - b);
  console.log(result);
}
// addTogethertwoArrayAndThenRemoveDuplicates();

// ! problem №5
// I have to delete nested arrays and show the result
let myNestedArray = [
  [5, 4],
  [8, 7],
  [9, 3],
];

let flattenedArray = [];

for (let i = 0; i < myNestedArray.length; i++) {
  for (let j = 0; j < myNestedArray[i].length; j++) {
    flattenedArray.push(myNestedArray[i][j]);
  }
}

// console.log(flattenedArray);

// second method

let myNestedArray_2 = [
  [5, 4],
  [8, 7],
  [9, 3],
];
let result = myNestedArray_2.flat();
// console.log(result);

// !problem №216
// Write a function that takes only min number: here I ca user min method

function getTheMinNumber(arr) {
  arr = [-1, 2, 3, 4, 5];
  let result = Math.min(...arr);
  console.log(result);
}
// getTheMinNumber();

// ! problem №215
// We need to store an array
function storeAnArray(arr = [15, 3, 5, 8, 7, 6, 4, 9, 5]) {
  let copyArray = arr.slice();
  let result = copyArray.sort((a, b) => a - b);
  console.log("original array: " + arr + " sorted array: " + result);
}
// storeAnArray();

// !problem №209
// I need to creat a function that accepts only number even if it is a string and return "Null" if there is no namber
function processNumbers(...args) {
  let numbers = args.map((arg) => parseInt(arg)).filter((num) => !isNaN(num));
  console.log(numbers);
}
// processNumbers("hello", 2, 3, "world", 4, 5, undefined, null, false, true, "undefined");

// !problem №211
// I need to creat array function that makes elemnts in "" it even numbers

function logArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (typeof element === "number") {
      console.log('"' + element.toString() + '"');
    } else if (typeof element === "string") {
      console.log('"' + element + '"');
    }
  }
}
// logArrayElements([1, 2, 3, 4]);

//! problem №2

function sortNumbers(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr;
}
let numbers = [5, 3, 8, 2, 1, 4];
let sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers);


