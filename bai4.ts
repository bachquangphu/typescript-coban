/* let trong ts*/
/* phạm vi chỉ trong khối của nó 
không thể khai báo hai lần và không hỗ trợ hoisting
*/

function greetPerson(name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Chandler");

var a = 1;
let b = 10;
if (a == 1) {
    let b = 200;
    var a = 20;
}
console.log(a);
console.log(b);