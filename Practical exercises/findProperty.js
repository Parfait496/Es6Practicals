/*
findProperty({ name: "Alice", age: 25 }, "name");
// "Alice"
findProperty({ name: "Alice", age: 25 }, "city");
// "Property not found"
*/

const person = {
    name: "Alice",
    age: 25
}

const findProperty =(obj, key) => {
    return key in person? person[key]: `Property not found`;
}

console.log(findProperty(person, "city")); // Property not found
console.log(findProperty(person, "name")); // Alice


