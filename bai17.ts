// khai báo class: class thực chất là function nhưng không hỗ trợ hoisting ( bằng chứng là trong file js thì class được biên dịch ra thành function)
class Person {
    run() {
        console.log(`Person is running...`)
    }
}
let p1 = new Person();
console.log(typeof p1);//object
console.log(typeof Person);//function

console.log(p1.run() === Person.prototype.run());//true
console.log(p1.run());//Person is running...