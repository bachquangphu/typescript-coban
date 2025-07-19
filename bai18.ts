// khai báo phương thức trong class
class Person1 {
    name1: any;
    constructor(name: any) {// phương thức 1
        this.name1 = name;
        console.log(this.name1 + "constructor.");
    }

    static talk() {// phương thức 2
        console.log("this static method is talk");
    }

    run() {// phương thức 3
        console.log("person running....");
    }


}
let p = new Person1("Tedu ");//Tedu constructor.
Person1.talk();//this static method is talk
p.run();//person running....