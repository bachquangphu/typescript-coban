// Arrow function ( hàm mũi tên)
let cal = function () {
    return 100000;
}
console.log(cal());//100000

let calArrow = (bonus: number, tax: number) => 100000 + bonus - tax;
console.log(calArrow(100000, 10000));//190000