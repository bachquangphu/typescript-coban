// kế thừa 
class Person2 {
    constructor(name: string) {
        console.log(name + `Person constructor`);//John Person constructor
    }

    getID() {
        return 10;
    }
}

class Employee extends Person2 {// khi Employee kết thừa Person2 thì Employee có thể gọi ra phương thức của Person2
    constructor(name: string) {
        super(name);
        console.log(name + "Employee constructor");
    }
    getID(): number {
        return super.getID();
    }
}
let emp = new Employee('John ');//John Employee constructor
console.log(emp.getID());//10
