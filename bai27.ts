/*interfaces*/
interface Person3 {
    fname: string,
    lname: string,
    age?: number// có thể đặc dấu ? phía sau biến(trước dấu 2 chấm để biến mang tính có cũng được không có cũng được
}

type Person4 = {
    name: string,
    age: number,
    children: Person3[],
}
// let n: Person3 = {
//     fname: 'Tedu',
//     lname: 'Online',
//     age: 25
// }

// let n2: Person3 = {
//     fname: 'Tedu 2',
//     lname: 'Online 2',
//     //age: 25
// }


let p4: Person4 = {
    name: "phu",
    age: 25,
    children: [
        {
            fname: 'aaaa',
            lname: "wwwww",
            age: 2
        },
        {
            fname: 'bbbb',
            lname: "wwwww",
            age: 2
        }]
}
console.log(p4);

p4.children[1].age = 5;
console.log(p4);

// interface labelledValue {
//     label: string; // có thêm readonly vào để không thể sửa kiểu dữ liệu
// }

// function printLabel(labelledObj: labelledValue) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" }
// printLabel(myObj);//Size 10 Object
type colorAnimal = "brown" | "black" | "white";
interface animal {
    name: string,
    color: colorAnimal,
    age: number,
    gender: "male" | "female"
    call: () => void,
}
let dog1: animal = {
    name: "lu",
    color: "black",
    age: 2,
    gender: "female",
    call: () => {
        console.log("gâu,gâu");
    }
}


console.log(dog1);
let ten = dog1.name;
console.log(ten);
dog1.call();