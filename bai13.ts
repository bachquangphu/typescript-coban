/* bóc tách mảng*/
let employees = ['A', 'B', 'C'];
// let [emp1, emp2, emp3] = employees;
// console.log(emp1);//A
// console.log(emp2);//B
// console.log(emp3);//C

let [emp1, ...emp2] = employees;
console.log(emp1);//A
console.log(emp2);//[ 'B', 'C' ]