class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`姓名：${this.name}年龄：${this.age}`);
    }
}

let person1 = new Person("xiaoming", "17");
person1.showInfo();

class Teacher extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    showSchool() {
        console.log(this.school);
    }
}
let teacher1 = new Teacher("Mr.Li", "30", "heida");
teacher1.showInfo();
teacher1.showSchool();

let a =(a)=>a;
