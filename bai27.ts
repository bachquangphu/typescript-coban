/*interfaces*/
interface Person3 {
    fname: string,
    lname: string,
    age?: number// có thể đặc dấu ? phía sau biến(trước dấu 2 chấm để biến mang tính có cũng được không có cũng được
}
let n: Person3 = {
    fname: 'Tedu',
    lname: 'Online',
    age: 25
}

let n2: Person3 = {
    fname: 'Tedu 2',
    lname: 'Online 2',
    //age: 25
}

interface labelledValue {
    label: string; // có thêm readonly vào để không thể sửa kiểu dữ liệu
}

function printLabel(labelledObj: labelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj);//Size 10 Object