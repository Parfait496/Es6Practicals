/*
filterEvens([1, 2, 3, 4, 5, 6]);
// [2, 4, 6]
filterEvens([7, 9, 11]);
// []
*/

const filterEvens = (arr) => {
    return arr.filter(num => num % 2 === 0);
}

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterEvens(numbers));
