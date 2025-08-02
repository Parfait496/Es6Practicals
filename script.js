const personalinfromation = {
  name: "John Doe",
  age: 30,
  email: "johndoe@sdf.com",
  zip: "12345",
  state: "CA",
  city: "Los Angeles"
};

const {name: n, age: a, } = personalinfromation;
console.log(`Name: ${n}, Age: ${a}`);