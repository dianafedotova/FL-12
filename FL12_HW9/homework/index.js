 // Task 1. Function that converts string to number and wise versa.
 function convert() {
     let array = [];
     for (let i = 0; i < arguments.length; i++) {
         if (typeof arguments[i] === 'string') {
             array.push(parseInt(arguments[i]));
         } else {
             array.push(arguments[i].toString());
         }
     }
     return array;
 }

 // Task 2. Function that iterates over array and executes function on each element.
 function executeforEach(array, callback) {
     for (let i = 0; i < array.length; i++) {
         callback(array[i]);
     }
 }

 // Task 3. Function that returns transformed array based on function, which passed as a second parameter.
 function mapArray(array, callback) {
     let newArray = [];
     executeforEach(array, el => newArray.push(callback(parseInt(el))));
     return newArray;
 }

 // Task 4. Function that returns filtered array based on function, which passed as a parameter.
 function filterArray(array, parameter) {
     let newArray = [];
     executeforEach(array, el => parameter(el) ? newArray.push(el) : 0);
     return newArray;
 }

 // Task 5. Function that reverses the string value passed into it.
 function flipOver(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
         reverseString = reverseString + string[i];
     }
     return reverseString;
 }

 // Task 6. Function that creates an array from the given range of numbers.
 function makeListFromRange(array) {
     let newArray = [];
     let firstNumber = array[0];
     let lastNumber = array[1];
     for (let i = firstNumber; i <= lastNumber; i++) {
         newArray.push(i);
     }
     return newArray;
 }

 // Task 7. Function that accepts an array of object and returns new array of values by passed key name.
 function getArrayOfKeys(array, key) {
     let newArray = [];
     executeforEach(array, keyElement => newArray.push(keyElement[key]));
     return newArray;
 }

  // Task 8. Function that returns a new array with numbers and '*' instead of numbers lowest from 30. 
 function substitute(array) {
     const THIRTY = 30;
     return mapArray(array, el => el < THIRTY ? '*' : el);
 }

 // Task 9. Function that returns a day number that was some amount of days ago from the passed date.
 function getPastDay(date, pastDay) {
     const MILLISEC_IN_DAY = 86400000;
     return new Date(date - MILLISEC_IN_DAY * pastDay).getDate();
 }

 // Task 10. Function that formats a date in such format "YYYY/M/d HH:mm".
 function formatDate(date) {
    const TEN = 10;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours() < TEN ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < TEN ? '0' + date.getMinutes() : date.getMinutes();
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;
}