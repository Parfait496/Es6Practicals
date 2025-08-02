// constructor runs when creating an object

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getSummary() {
        console.log(`summary of the ${this.title} book written by ${this.author} `);
    }
}

let book = new Book("The football", "Parfait");

book.getSummary();

// inheritance of child class from the parent class

class Cat {
    constructor(sound) {
        this.sound = sound;
    }
    meow() {
        console.log(`${this.sound}`);
        
    }
}

const myCat = new Cat("Milo");
myCat.meow();

// Project

class Student {
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

// create a child class

class GraduateStudent extends Student  {
    constructor(name, age, grade, degree) {
        super(name, age, grade)
        this.degree = degree;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Degree: ${this.degree}`);
    }
}
 
// Testing Objects

const s1 = new Student("Alice", 21, "A");
s1.displayInfo();

const s2 = new GraduateStudent("Bob", 24, "A+", "Computer Science");
s2.displayInfo();