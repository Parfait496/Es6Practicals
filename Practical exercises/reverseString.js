/*

reverseString("hello");
// "olleh"
reverseString("Codewars");
// "srawedoC"

*/
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello")); // olleH
 