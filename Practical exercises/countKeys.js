/*

countKeys({ name: "Alice", age: 25, city: "Paris" });
// 3
countKeys({});
// 0
*/

const countKeys = (obj) => {
    return Object.keys(obj).length; // returns an array of keys of an object.
};

const person0 = {
    name: "Kelly",
    age: 32,
    school: "AUCA",
    Hobbies: ["swimming", "hiking"],
    salary: 3400
};

console.log(countKeys(person0));
