class Student{
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.UniversityName = "MIT";
    }
}

const student1 = new Student(18, "Sohan");
const student2 = new Student(78, "John Smith");

console.log(student1);
console.log(student2);

console.log(student1.name);
console.log(student2.name);

const student3 = new Student(90, "Mike");
console.log(student3);