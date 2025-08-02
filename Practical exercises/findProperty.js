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

const find = function findProperty(obj, key) {
    return key in person? person[key]: `Property not found`;
}

console.log(find(person, "city"));

