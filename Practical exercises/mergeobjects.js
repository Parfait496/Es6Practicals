/*

mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
// { a: 1, b: 3, c: 4 }
mergeObjects({ x: "hello" }, { y: "world", x: "hi" });
// { x: "hi", y: "world" }
*/
// It overwrites the properties in obj1.


const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

person1 = {
    name: "Kelly",
    age: 32,
    school: "AUCA",
    Hobbies: ["swimming", "hiking"],
    salary: 3400
};

person2 = {
    name: "Kellia",
    age: 30,
    school: "AUCA",
    Hobbies: ["Eating", "Running"]
};

person3 = mergeObjects(person1, person2);

console.log(person3);