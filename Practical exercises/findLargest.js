/*
findLargest([10, 20, 5, 40, 30]);
// 40
findLargest([-5, -10, -1]);
// -1
*/

const findLargest = (arr) => {
     return Math.max(...arr);
};

const numbers = [10, 20, 5, 40, 30];

console.log(findLargest(numbers));
